# Forge native Android build

Forge is now built as a standalone Android application. The Android app does not package the web application.

Features:
- Native Android project-generation workspace
- Free local OpenAI-compatible AI endpoint
- Kotlin and Python expert prompt guardrails
- Technical datasheet generation with explicit UNKNOWN handling
- Source-text import
- ZIP export of generated Gradle projects
- CI Gradle compile, tests, APK integrity verification and artifact upload

AI generation requires an actual reachable local model endpoint. Forge never reports an AI result as successful when the model request fails.
