package com.forge.app

import java.io.ByteArrayOutputStream
import java.util.zip.ZipEntry
import java.util.zip.ZipOutputStream

object ProjectBuilder {
    fun buildProject(name: String, packageName: String, kotlinCode: String): ByteArray {
        require(name.isNotBlank())
        require(packageName.matches(Regex("[A-Za-z_][A-Za-z0-9_]*(\\.[A-Za-z_][A-Za-z0-9_]*)+"))) { "Invalid package name" }
        val pkgPath = packageName.replace('.', '/')
        val safeName = name.replace(Regex("[^A-Za-z0-9_-]"), "_")
        val files = linkedMapOf(
            "settings.gradle.kts" to "pluginManagement { repositories { google(); mavenCentral(); gradlePluginPortal() } }\ndependencyResolutionManagement { repositoriesMode.set(org.gradle.api.initialization.resolve.RepositoriesMode.FAIL_ON_PROJECT_REPOS); repositories { google(); mavenCentral() } }\nrootProject.name = \"$safeName\"\ninclude(\":app\")\n",
            "build.gradle.kts" to "plugins { id(\"com.android.application\") version \"8.7.3\" apply false; id(\"org.jetbrains.kotlin.android\") version \"2.0.21\" apply false }\n",
            "gradle.properties" to "org.gradle.jvmargs=-Xmx2048m -Dfile.encoding=UTF-8\nandroid.useAndroidX=true\nkotlin.code.style=official\n",
            "app/build.gradle.kts" to "plugins { id(\"com.android.application\"); id(\"org.jetbrains.kotlin.android\") }\nandroid { namespace = \"$packageName\"; compileSdk = 35; defaultConfig { applicationId = \"$packageName\"; minSdk = 24; targetSdk = 35; versionCode = 1; versionName = \"1.0\" }; compileOptions { sourceCompatibility = JavaVersion.VERSION_17; targetCompatibility = JavaVersion.VERSION_17 }; kotlinOptions { jvmTarget = \"17\" } }\ndependencies { implementation(\"androidx.core:core-ktx:1.15.0\"); implementation(\"androidx.activity:activity-ktx:1.10.1\"); implementation(\"androidx.appcompat:appcompat:1.7.0\") }\n",
            "app/src/main/AndroidManifest.xml" to "<?xml version=\"1.0\" encoding=\"utf-8\"?><manifest xmlns:android=\"http://schemas.android.com/apk/res/android\"><application android:theme=\"@style/AppTheme\" android:label=\"$safeName\"><activity android:name=\".$${"MainActivity"}\" android:exported=\"true\"><intent-filter><action android:name=\"android.intent.action.MAIN\"/><category android:name=\"android.intent.category.LAUNCHER\"/></intent-filter></activity></application></manifest>\n",
            "app/src/main/res/values/styles.xml" to "<?xml version=\"1.0\" encoding=\"utf-8\"?><resources><style name=\"AppTheme\" parent=\"android:style/Theme.Material.Light.NoActionBar\"/></resources>\n",
            "app/src/main/java/$pkgPath/MainActivity.kt" to kotlinCode
        )
        val out = ByteArrayOutputStream()
        ZipOutputStream(out).use { zip -> files.forEach { (path, content) -> zip.putNextEntry(ZipEntry(path)); zip.write(content.toByteArray()); zip.closeEntry() } }
        return out.toByteArray()
    }
}
