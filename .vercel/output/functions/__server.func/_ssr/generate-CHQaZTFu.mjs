import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
import { i as extractJson, r as coerceSpec } from "./spec-Cq97qa1k.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/generate-CHQaZTFu.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var SYSTEM = `You design Android apps as a JSON spec for Forge, an AI Android studio.
Return ONLY a JSON object. No markdown. No commentary.

Schema:
{
  "name": "1-2 word product name",
  "packageName": "com.forge.lowercase",
  "tagline": "one line",
  "note": "one sentence describing what you designed",
  "theme": { "seed": "#RRGGBB", "mode": "light" | "dark" },
  "nav": [{ "id": "slug", "label": "short", "icon": "iconName" }],
  "screens": [{
    "id": "matches a nav id",
    "title": "short",
    "subtitle": "optional",
    "fab": { "icon": "add", "label": "optional" } | null,
    "blocks": [ ... ]
  }]
}

Icons (use only these): home search settings person favorite add check star bolt leaf book fitness restaurant wallet calendar notifications chart timer map camera music water moon sun edit delete share back more

Blocks — pick from:
hero { "type":"hero", "kicker"?:string, "title":string, "subtitle"?:string }
search { "type":"search", "placeholder":string }
chips { "type":"chips", "items":string[], "selected"?:number }
statRow { "type":"statRow", "stats":[{ "label":string, "value":string }] }
progress { "type":"progress", "label":string, "value":0-1, "caption"?:string }
section { "type":"section", "title":string, "action"?:string }
card { "type":"card", "title":string, "body"?:string, "meta"?:string, "icon"?:string, "tone"?: "default"|"accent" }
list { "type":"list", "items":[{ "title":string, "subtitle"?:string, "meta"?:string, "icon"?:string, "trailing"?: "chevron"|"switch"|"value", "value"?:string, "on"?:boolean }] }
toggle { "type":"toggle", "label":string, "description"?:string, "on":boolean }
field { "type":"field", "label":string, "placeholder"?:string, "multiline"?:boolean }
button { "type":"button", "label":string, "variant"?: "filled"|"tonal"|"outline" }
quote { "type":"quote", "text":string, "attribution"?:string }

Rules:
- Exactly 3 nav items and 3 screens with matching ids.
- Specific, finished copy. No lorem. No generic "Welcome to my app".
- Home is rich (hero + stats or progress + a list or cards).
- seed is a muted, sophisticated hex — never neon, never purple, never pure yellow.
- Feels like a real indie Android app someone would install.
- 8-14 blocks on home, 6-10 on the others.`;
async function callXai(messages) {
	const apiKey = process.env.XAI_API_KEY;
	if (!apiKey) return {
		ok: false,
		error: "The built-in AI is offline right now. Try a starter app, or try again in a moment."
	};
	const res = await fetch("https://api.x.ai/v1/chat/completions", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${apiKey}`
		},
		body: JSON.stringify({
			model: "grok-4.5",
			messages,
			temperature: .7,
			max_tokens: 3500,
			response_format: { type: "json_object" }
		}),
		signal: AbortSignal.timeout(6e4)
	});
	if (!res.ok) return {
		ok: false,
		error: `The built-in AI returned ${res.status}. Try again, or pick a starter.`
	};
	const text = (await res.json()).choices?.[0]?.message?.content ?? "";
	if (!text) return {
		ok: false,
		error: "The built-in AI returned an empty reply."
	};
	try {
		const parsed = extractJson(text);
		return {
			ok: true,
			app: coerceSpec(parsed)
		};
	} catch {
		return {
			ok: false,
			error: "The model returned an unusable app spec. Try a more specific prompt."
		};
	}
}
var generateAndroidApp_createServerFn_handler = createServerRpc({
	id: "1be802d4e45142c356482c8ddb01d97320743710ccd34590d1c4d66749cf35cc",
	name: "generateAndroidApp",
	filename: "src/lib/generate.ts"
}, (opts) => generateAndroidApp.__executeServer(opts));
var generateAndroidApp = createServerFn({ method: "POST" }).validator((input) => {
	return {
		prompt: (typeof input?.prompt === "string" ? input.prompt.trim() : "").slice(0, 1500),
		currentSpec: input?.currentSpec
	};
}).handler(generateAndroidApp_createServerFn_handler, async ({ data }) => {
	if (!data.prompt) return {
		ok: false,
		error: "Describe the Android app you want to build."
	};
	if (data.currentSpec) return callXai([{
		role: "system",
		content: SYSTEM
	}, {
		role: "user",
		content: `Update this Android app spec according to the instruction. Return the FULL updated JSON, including a short 'note' of what changed.

Current spec:\n${JSON.stringify(data.currentSpec)}\n\nInstruction:\n${data.prompt}`
	}]);
	return callXai([{
		role: "system",
		content: SYSTEM
	}, {
		role: "user",
		content: `Design this Android app:\n${data.prompt}`
	}]);
});
//#endregion
export { generateAndroidApp_createServerFn_handler };
