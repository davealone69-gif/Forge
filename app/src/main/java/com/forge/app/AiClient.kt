package com.forge.app

import java.io.BufferedReader
import java.io.InputStreamReader
import java.io.OutputStreamWriter
import java.net.HttpURLConnection
import java.net.URL
import org.json.JSONArray
import org.json.JSONObject

/**
 * Local-only OpenAI-compatible client.
 * Default target is llama.cpp serving Qwen3-1.7B-GGUF.
 */
class AiClient(
    private val endpoint: String,
    private val model: String,
    private val apiKey: String = ""
) {
    fun ask(prompt: String): String {
        require(endpoint.isNotBlank()) { "AI endpoint is required" }
        require(model.isNotBlank()) { "AI model is required" }

        val url = URL(endpoint.trimEnd('/') + "/chat/completions")
        val conn = (url.openConnection() as HttpURLConnection).apply {
            requestMethod = "POST"
            connectTimeout = 15000
            readTimeout = 120000
            doOutput = true
            setRequestProperty("Content-Type", "application/json")
            if (apiKey.isNotBlank()) setRequestProperty("Authorization", "Bearer $apiKey")
        }

        val system = """
            You are Forge Expert, a senior Android/Kotlin and Python engineer running locally.
            Produce real, runnable code only. Never invent APIs, libraries, measurements,
            datasheet values, test results, or build success. Prefer standard Android SDK and
            free/open-source tooling. For technical datasheets, distinguish manufacturer-sourced
            facts from calculations and unknowns. For generated Android projects, include complete
            files, dependencies, manifests, resources, tests and build instructions.
        """.trimIndent()

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
        conn.disconnect()

        if (code !in 200..299) {
            throw IllegalStateException("Local AI HTTP $code: $text")
        }

        val json = JSONObject(text)
        val choices = json.optJSONArray("choices")
            ?: throw IllegalStateException("Local AI returned no choices: $text")
        val result = choices.optJSONObject(0)
            ?.optJSONObject("message")
            ?.optString("content")
            ?.trim()
            ?: throw IllegalStateException("Local AI returned no message content")

        if (result.isBlank()) throw IllegalStateException("Local AI returned empty content")
        return result
    }
}
