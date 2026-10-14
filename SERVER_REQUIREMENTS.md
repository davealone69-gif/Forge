# Server requirements and live health checks

| Service | Requirement | Verification | Start/recovery |
|---|---|---|---|
| Core application | Required | Launch and run core workflow smoke tests | Use the repository's documented run command. |
| Local Ollama | Optional when local AI is selected | Default http://127.0.0.1:11434; check /api/version, /api/tags and a real completion | Run ollama serve on the same host/device and install the selected model. |
| Cloud AI providers | Optional, integration-dependent | Provider HTTPS endpoint, valid credentials and a real request | Configure secrets through protected settings/environment; never commit or bundle private keys. |
| Agent/API backend | Unverified unless active configuration enables it | Probe exact configured endpoint and run a real workflow | Start the actual configured service; do not infer one from UI labels. |

## Health states
HEALTHY requires a live request and selected model/capability success. Also report DEGRADED, STOPPED, UNREACHABLE, AUTH REQUIRED, NOT CONFIGURED, BLOCKED and UNVERIFIED. Show checked-at time, redacted endpoint, last error and next action.

## Startup
Identify selected provider. For Ollama, run ollama serve, check /api/version and /api/tags, then test the model. For cloud providers, configure credentials securely and run a real request. Verify any agent gateway independently from the LLM.

## Verification boundary
Source integration does not prove credentials, models or gateway are available at runtime.
