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
    private lateinit var endpoint: EditText
    private lateinit var model: EditText
    private var lastProject: ByteArray? = null
    private val prefs by lazy { getSharedPreferences("forge", MODE_PRIVATE) }
    private val dp get() = resources.displayMetrics.density
    private fun d(v: Int) = (v * dp).toInt()

    override fun onCreate(savedInstanceState: Bundle?) { super.onCreate(savedInstanceState); buildUi() }

    private fun buildUi() {
        root = LinearLayout(this).apply { orientation = LinearLayout.VERTICAL; setPadding(d(18),d(18),d(18),d(18)); setBackgroundColor(0xFF090A0C.toInt()) }
        val scroll = ScrollView(this).apply { addView(root) }; setContentView(scroll)
        text("FORGE",28,true); text("NATIVE ANDROID • FREE LOCAL AI",11,true); text("Real project generator, coding expert and datasheet workspace.",14,false)
        section("BUILD")
        val prompt = edit("Describe the complete Android app to build",5)
        button("BUILD COMPLETE PROJECT") { runAiBuild(prompt.text.toString()) }
        button("EXPORT LAST PROJECT") { exportProject() }
        section("LOCAL AI")
        text("No paid API is required. Point Forge at a free local OpenAI-compatible model server.",13,false)
        endpoint = edit("http://127.0.0.1:11434/v1",1); endpoint.setText(prefs.getString("endpoint","http://127.0.0.1:11434/v1"))
        model = edit("qwen2.5-coder:3b",1); model.setText(prefs.getString("model","qwen2.5-coder:3b"))
        val key = edit("Optional API key",1); key.setText(prefs.getString("key",""))
        button("SAVE AI SETTINGS") { prefs.edit().putString("endpoint",endpoint.text.toString().trim().trimEnd('/')).putString("model",model.text.toString().trim()).putString("key",key.text.toString()).apply(); toast("Saved") }
        button("TEST AI") { runAi("Reply with exactly: FORGE AI OK") }
        section("KOTLIN + PYTHON EXPERT")
        val code = edit("Ask for real Kotlin/Python code, debugging, tests, Gradle or architecture",6)
        button("ASK EXPERT") { runAi(code.text.toString()) }
        section("DATA SHEETS")
        val sheet = edit("Component, vehicle, device or system. Ask for a sourced datasheet.",5)
        button("GENERATE DATA SHEET") { runAi("Create a technical datasheet for: ${sheet.text}. Include identity, specifications, pinout/connectors when verified, operating limits when sourced, compatibility, test procedure, safety notes and source fields. Never invent values. Mark unavailable values UNKNOWN.") }
        button("IMPORT SOURCE TEXT") { startActivityForResult(Intent(Intent.ACTION_OPEN_DOCUMENT).apply { type="text/*"; addCategory(Intent.CATEGORY_OPENABLE) },43) }
        section("RESULT")
        output = textView(13,false); output.text="Ready. Configure local AI, then build. Errors are reported instead of being hidden."
    }

    private fun runAiBuild(description:String) {
        if(description.trim().isBlank()){toast("Describe the app first");return}
        runAi("""Build a COMPLETE Android application for this requirement: ${description.trim()}
Return ONLY complete MainActivity.kt source. Kotlin JVM 17, compileSdk 35, minSdk 24. No pseudocode, TODOs, fake handlers, placeholder buttons, invented APIs or omitted logic. Every visible control must have a real handler. Include validation, persistence and error handling where required.""".trimIndent()) { code ->
            try { lastProject=ProjectBuilder.buildProject("ForgeGenerated","com.forge.generated",code.removeCodeFences()); output.text="PROJECT GENERATED AND PACKAGED\n\n${lastProject!!.size} bytes\n\nExport it to a ZIP and build it with Gradle/Android Studio." }
            catch(e:Exception){output.text="PROJECT PACKAGING FAILED\n\n${e.message}"}
        }
    }

    private fun runAi(prompt:String,onSuccess:(String)->Unit={output.text=it}) {
        if(prompt.trim().isBlank()){toast("Enter a request");return}
        prefs.edit().putString("endpoint",endpoint.text.toString().trim().trimEnd('/')).putString("model",model.text.toString().trim()).apply()
        output.text="CONTACTING LOCAL AI..."
        io.execute { try {
            val c=AiClient(prefs.getString("endpoint","http://127.0.0.1:11434/v1")!!,prefs.getString("model","qwen2.5-coder:3b")!!,prefs.getString("key","")!!)
            val result=c.ask(prompt); runOnUiThread{onSuccess(result)}
        } catch(e:Exception){runOnUiThread{output.text="AI REQUEST FAILED\n\n${e.message}"}} }
    }

    private fun exportProject(){ val bytes=lastProject?:run{toast("Build a project first");return}; startActivityForResult(Intent(Intent.ACTION_CREATE_DOCUMENT).apply{type="application/zip";putExtra(Intent.EXTRA_TITLE,"Forge-Android-Project.zip")},42) }
    override fun onActivityResult(requestCode:Int,resultCode:Int,data:Intent?){super.onActivityResult(requestCode,resultCode,data);if(requestCode==42&&resultCode==RESULT_OK&&data?.data!=null)try{contentResolver.openOutputStream(data.data!!)?.use{it.write(lastProject!!)};toast("Project exported")}catch(e:Exception){toast("Export failed: ${e.message}")}}
    private fun section(s:String){text(s,12,true).setPadding(0,d(20),0,d(6))}
    private fun text(s:String,size:Int,bold:Boolean)=textView(size,bold).also{it.text=s}
    private fun textView(size:Int,bold:Boolean)=TextView(this).apply{textSize=size.toFloat();setTextColor(0xFFE8EAF0.toInt());if(bold)typeface=Typeface.DEFAULT_BOLD;root.addView(this,LinearLayout.LayoutParams(-1,-2))}
    private fun edit(hint:String,lines:Int)=EditText(this).apply{this.hint=hint;setHintTextColor(0xFF777B85.toInt());setTextColor(0xFFE8EAF0.toInt());setBackgroundColor(0xFF17191E.toInt());setPadding(d(12),d(10),d(12),d(10));minLines=lines;gravity=Gravity.TOP;root.addView(this,LinearLayout.LayoutParams(-1,if(lines>1)d(120)else d(56)))}
    private fun button(label:String,action:()->Unit)=Button(this).apply{text=label;setOnClickListener{action()};root.addView(this,LinearLayout.LayoutParams(-1,d(54)))}
    private fun toast(s:String)=Toast.makeText(this,s,Toast.LENGTH_SHORT).show()
    private fun String.removeCodeFences()=replace(Regex("^```(?:kotlin)?\\s*",RegexOption.MULTILINE),"").replace(Regex("\\s*```$",RegexOption.MULTILINE),"").trim()
}
