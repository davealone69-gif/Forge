package com.forge.app

import java.io.BufferedReader
import java.io.InputStreamReader
import java.io.OutputStreamWriter
import java.net.HttpURLConnection
import java.net.URL
import org.json.JSONArray
import org.json.JSONObject

class AiClient(
    private val provider: String,
    private val endpoint: String,
    private val model: String,
    private val apiKey: String = ""
) {
    fun ask(prompt: String): String = when (provider.lowercase()) {
        "gemini" -> askGemini(prompt)
        else -> askOpenAiCompatible(prompt)
    }

    private fun askGemini(prompt: String): String {
        require(apiKey.isNotBlank()) { "Gemini API key is required. Create a free key in Google AI Studio." }
        val selectedModel = model.ifBlank { "gemini-2.5-flash" }
        val base = endpoint.trimEnd('/').ifBlank { "https://generativelanguage.googleapis.com/v1beta" }
        val url = URL("$base/models/$selectedModel:generateContent?key=$apiKey")
        val conn = (url.openConnection() as HttpURLConnection).apply {
            requestMethod = "POST"
            connectTimeout = 15000
            readTimeout = 120000
            doOutput = true
            setRequestProperty("Content-Type", "application/json")
        }
        val system = "You are Forge Expert, a senior Android/Kotlin and Python engineer. Produce real, runnable code only. Never invent APIs, libraries, measurements, datasheet values, test results, or build success. Prefer standard Android SDK and free/open-source tooling. For technical datasheets, distinguish manufacturer-sourced facts from calculations and unknowns. For generated Android projects, include complete files, dependencies, manifests, resources, tests and build instructions."
        val body = JSONObject().apply {
            put("systemInstruction", JSONObject().put("parts", JSONArray().put(JSONObject().put("text", system))))
            put("contents", JSONArray().put(JSONObject().apply {
                put("role", "user")
                put("parts", JSONArray().put(JSONObject().put("text", prompt)))
            }))
            put("generationConfig", JSONObject().put("temperature", 0.2))
        }
        OutputStreamWriter(conn.outputStream).use { it.write(body.toString()) }
        val code = conn.responseCode
        val stream = if (code in 200..299) conn.inputStream else conn.errorStream
        val text = BufferedReader(InputStreamReader(stream)).use { it.readText() }
        if (code !in 200..299) throw IllegalStateException("Gemini HTTP $code: $text")
        val json = JSONObject(text)
        val candidates = json.optJSONArray("candidates") ?: throw IllegalStateException("Gemini returned no candidates: $text")
        val parts = candidates.optJSONObject(0)?.optJSONObject("content")?.optJSONArray("parts")
            ?: throw IllegalStateException("Gemini returned no content")
        val result = buildString {
            for (i in 0 until parts.length()) append(parts.getJSONObject(i).optString("text"))
        }.trim()
        if (result.isBlank()) throw IllegalStateException("Gemini returned empty content")
        return result
    }

    private fun askOpenAiCompatible(prompt: String): String {
        val url = URL(endpoint.trimEnd('/') + "/chat/completions")
        val conn = (url.openConnection() as HttpURLConnection).apply {
            requestMethod = "POST"
            connectTimeout = 15000
            readTimeout = 120000
            doOutput = true
            setRequestProperty("Content-Type", "application/json")
            if (apiKey.isNotBlank()) setRequestProperty("Authorization", "Bearer $apiKey")
        }
        val system = "You are Forge Expert, a senior Android/Kotlin and Python engineer. Produce real, runnable code only. Never invent APIs, libraries, measurements, datasheet values, test results, or build success. Prefer standard Android SDK and free/open-source tooling. For technical datasheets, distinguish manufacturer-sourced facts from calculations and unknowns. For generated Android projects, include complete files, dependencies, manifests, resources, tests and build instructions."
        val body = JSONObject().apply {
            put("model", model)
            put("messages", JSONArray().apply {
                put(JSONObject().put("role", "system").put("content", system))
                put(JSONObject().put("role", "user").put("content", prompt))
            })
            put("temperature", 0.2)
        }
        OutputStreamWriter(conn.outputStream).use { it.write(body.toString()) }
        val code = conn.responseCode
        val stream = if (code in 200..299) conn.inputStream else conn.errorStream
        val text = BufferedReader(InputStreamReader(stream)).use { it.readText() }
        if (code !in 200..299) throw IllegalStateException("AI HTTP $code: $text")
        val json = JSONObject(text)
        return json.getJSONArray("choices").getJSONObject(0).getJSONObject("message").optString("content")
            .ifBlank { throw IllegalStateException("AI returned no content") }
    }
}
