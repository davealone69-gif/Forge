package com.forge.app

import android.app.Activity
import android.content.Intent
import android.graphics.Typeface
import android.os.Bundle
import android.view.Gravity
import android.widget.*
import java.util.concurrent.Executors

class MainActivity : Activity() {
    private val io = Executors.newCachedThreadPool()
    private lateinit var root: LinearLayout
    private lateinit var output: TextView
    private lateinit var provider: Spinner
    private lateinit var endpoint: EditText
    private lateinit var model: EditText
    private lateinit var key: EditText
    private var lastProject: ByteArray? = null
    private val prefs by lazy { getSharedPreferences("forge", MODE_PRIVATE) }
    private val dp get() = resources.displayMetrics.density
    private fun d(v: Int) = (v * dp).toInt()

    override fun onCreate(savedInstanceState: Bundle?) { super.onCreate(savedInstanceState); buildUi() }

    private fun buildUi() {
        root = LinearLayout(this).apply { orientation = LinearLayout.VERTICAL; setPadding(d(18), d(18), d(18), d(18)); setBackgroundColor(0xFF090A0C.toInt()) }
        val scroll = ScrollView(this).apply { addView(root) }; setContentView(scroll)
        text("FORGE", 28, true); text("ANDROID APP BUILDER • FREE AI", 11, true); text("Real project generator, coding expert and datasheet workspace.", 14, false)
        section("BUILD")
        val prompt = edit("Describe the complete Android app to build", 5)
        button("BUILD COMPLETE PROJECT") { runAiBuild(prompt.text.toString()) }
        button("EXPORT LAST PROJECT") { exportProject() }
        section("AI PROVIDER")
        provider = Spinner(this).apply {
            adapter = ArrayAdapter(this@MainActivity, android.R.layout.simple_spinner_dropdown_item, arrayOf("Gemini 2.5 Flash (Free tier)", "Local OpenAI-compatible AI"))
            setSelection(if (prefs.getString("provider", "gemini") == "local") 1 else 0)
            onItemSelectedListener = object : android.widget.AdapterView.OnItemSelectedListener {
                override fun onNothingSelected(parent: android.widget.AdapterView<*>?) = Unit
                override fun onItemSelected(parent: android.widget.AdapterView<*>?, view: android.view.View?, position: Int, id: Long) { updateProviderFields(position) }
            }
        }
        root.addView(provider, LinearLayout.LayoutParams(-1, d(56)))
        endpoint = edit("Endpoint", 1)
        model = edit("Model", 1)
        key = edit("Gemini API key or optional local API key", 1)
        endpoint.setText(prefs.getString("endpoint", "https://generativelanguage.googleapis.com/v1beta"))
        model.setText(prefs.getString("model", "gemini-2.5-flash"))
        key.setText(prefs.getString("key", ""))
        updateProviderFields(provider.selectedItemPosition)
        button("SAVE AI SETTINGS") { saveSettings(); toast("AI settings saved") }
        button("TEST AI") { runAi("Reply with exactly: FORGE AI OK") }
        section("KOTLIN + PYTHON EXPERT")
        val code = edit("Ask for real Kotlin/Python code, debugging, tests, Gradle or architecture", 6)
        button("ASK EXPERT") { runAi(code.text.toString()) }
        section("DATA SHEETS")
        val sheet = edit("Component, vehicle, device or system. Ask for a sourced datasheet.", 5)
        button("GENERATE DATA SHEET") { runAi("Create a technical datasheet for: ${sheet.text}. Include identity, specifications, pinout/connectors when verified, operating limits when sourced, compatibility, test procedure, safety notes and source fields. Never invent values. Mark unavailable values UNKNOWN.") }
        button("IMPORT SOURCE TEXT") { startActivityForResult(Intent(Intent.ACTION_OPEN_DOCUMENT).apply { type = "text/*"; addCategory(Intent.CATEGORY_OPENABLE) }, 43) }
        section("RESULT")
        output = textView(13, false); output.text = "Ready. Gemini 2.5 Flash is selected. Add your free Gemini API key, save, then TEST AI."
    }

    private fun updateProviderFields(position: Int) {
        if (!::endpoint.isInitialized) return
        val gemini = position == 0
        endpoint.setText(prefs.getString("endpoint", if (gemini) "https://generativelanguage.googleapis.com/v1beta" else "http://127.0.0.1:11434/v1"))
        model.setText(prefs.getString("model", if (gemini) "gemini-2.5-flash" else "qwen2.5-coder:3b"))
        endpoint.hint = if (gemini) "Gemini API endpoint" else "Local OpenAI-compatible endpoint"
        model.hint = if (gemini) "gemini-2.5-flash or gemini-2.5-pro" else "Local model name"
        key.hint = if (gemini) "Free Gemini API key" else "Optional local API key"
    }

    private fun saveSettings() {
        val local = provider.selectedItemPosition == 1
        prefs.edit().putString("provider", if (local) "local" else "gemini")
            .putString("endpoint", endpoint.text.toString().trim().trimEnd('/'))
            .putString("model", model.text.toString().trim())
            .putString("key", key.text.toString())
            .apply()
    }

    private fun runAiBuild(description: String) {
        if (description.trim().isBlank()) { toast("Describe the app first"); return }
        runAi("""Build a COMPLETE Android application for this requirement: ${description.trim()}
Return ONLY complete MainActivity.kt source. Kotlin JVM 17, compileSdk 35, minSdk 24. No pseudocode, TODOs, fake handlers, placeholder buttons, invented APIs or omitted logic. Every visible control must have a real handler. Include validation, persistence and error handling where required.""".trimIndent()) { code ->
            try { lastProject = ProjectBuilder.buildProject("ForgeGenerated", "com.forge.generated", code.removeCodeFences()); output.text = "PROJECT GENERATED AND PACKAGED\n\n${lastProject!!.size} bytes\n\nExport the ZIP and build it with Gradle/Android Studio." }
            catch (e: Exception) { output.text = "PROJECT PACKAGING FAILED\n\n${e.message}" }
        }
    }

    private fun runAi(prompt: String, onSuccess: (String) -> Unit = { output.text = it }) {
        if (prompt.trim().isBlank()) { toast("Enter a request"); return }
        saveSettings()
        output.text = "CONTACTING ${if (provider.selectedItemPosition == 0) "GEMINI 2.5" else "LOCAL AI"}..."
        io.execute {
            try {
                val c = AiClient(
                    prefs.getString("provider", "gemini")!!,
                    prefs.getString("endpoint", "https://generativelanguage.googleapis.com/v1beta")!!,
                    prefs.getString("model", "gemini-2.5-flash")!!,
                    prefs.getString("key", "")!!
                )
                val result = c.ask(prompt)
                runOnUiThread { onSuccess(result) }
            } catch (e: Exception) { runOnUiThread { output.text = "AI REQUEST FAILED\n\n${e.message}" } }
        }
    }

    private fun exportProject() {
        val bytes = lastProject ?: run { toast("Build a project first"); return }
        startActivityForResult(Intent(Intent.ACTION_CREATE_DOCUMENT).apply { type = "application/zip"; putExtra(Intent.EXTRA_TITLE, "Forge-Android-Project.zip") }, 42)
    }

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)
        if (requestCode == 42 && resultCode == RESULT_OK && data?.data != null) try {
            contentResolver.openOutputStream(data.data!!)?.use { it.write(lastProject!!) }; toast("Project exported")
        } catch (e: Exception) { toast("Export failed: ${e.message}") }
        if (requestCode == 43 && resultCode == RESULT_OK && data?.data != null) try {
            val source = contentResolver.openInputStream(data.data!!)?.bufferedReader()?.use { it.readText() } ?: ""
            output.text = "SOURCE IMPORTED\n\n${source.take(12000)}"
        } catch (e: Exception) { output.text = "SOURCE IMPORT FAILED\n\n${e.message}" }
    }

    private fun section(s: String) { text(s, 12, true).setPadding(0, d(20), 0, d(6)) }
    private fun text(s: String, size: Int, bold: Boolean) = textView(size, bold).also { it.text = s }
    private fun textView(size: Int, bold: Boolean) = TextView(this).apply { textSize = size.toFloat(); setTextColor(0xFFE8EAF0.toInt()); if (bold) typeface = Typeface.DEFAULT_BOLD; root.addView(this, LinearLayout.LayoutParams(-1, -2)) }
    private fun edit(hint: String, lines: Int) = EditText(this).apply { this.hint = hint; setHintTextColor(0xFF777B85.toInt()); setTextColor(0xFFE8EAF0.toInt()); setBackgroundColor(0xFF17191E.toInt()); setPadding(d(12), d(10), d(12), d(10)); minLines = lines; gravity = Gravity.TOP; root.addView(this, LinearLayout.LayoutParams(-1, if (lines > 1) d(120) else d(56))) }
    private fun button(label: String, action: () -> Unit) = Button(this).apply { text = label; setOnClickListener { action() }; root.addView(this, LinearLayout.LayoutParams(-1, d(54))) }
    private fun toast(s: String) = Toast.makeText(this, s, Toast.LENGTH_SHORT).show()
    private fun String.removeCodeFences() = replace(Regex("^```(?:kotlin)?\\s*", RegexOption.MULTILINE), "").replace(Regex("\\s*```$", RegexOption.MULTILINE), "").trim()
}
