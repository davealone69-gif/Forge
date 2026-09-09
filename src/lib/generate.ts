import { createServerFn } from "@tanstack/react-start";
import { coerceSpec, extractJson, type GeneratedApp } from "@/lib/spec";

const SYSTEM = `You design Android apps as a JSON spec for Forge, an AI Android studio.
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

type GenerateInput = {
  prompt: string;
  currentSpec?: unknown;
};

export type GenerateResult =
  | { ok: true; app: GeneratedApp }
  | { ok: false; error: string };

async function callXai(messages: { role: "system" | "user"; content: string }[]): Promise<GenerateResult> {
  const apiKey = process.env.XAI_API_KEY;
  if (!apiKey) {
    return { ok: false, error: "The built-in AI is offline right now. Try a starter app, or try again in a moment." };
  }

  const res = await fetch("https://api.x.ai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "grok-4.5",
      messages,
      temperature: 0.7,
      max_tokens: 3500,
      response_format: { type: "json_object" },
    }),
    signal: AbortSignal.timeout(60000),
  });

  if (!res.ok) {
    return { ok: false, error: `The built-in AI returned ${res.status}. Try again, or pick a starter.` };
  }

  const body = (await res.json()) as {
    choices?: { message?: { content?: string } }[];
  };
  const text = body.choices?.[0]?.message?.content ?? "";
  if (!text) {
    return { ok: false, error: "The built-in AI returned an empty reply." };
  }

  try {
    const parsed = extractJson(text);
    const app = coerceSpec(parsed);
    return { ok: true, app };
  } catch {
    return {
      ok: false,
      error: "The model returned an unusable app spec. Try a more specific prompt.",
    };
  }
}

export const generateAndroidApp = createServerFn({ method: "POST" })
  .validator((input: GenerateInput) => {
    const prompt = typeof input?.prompt === "string" ? input.prompt.trim() : "";
    return {
      prompt: prompt.slice(0, 1500),
      currentSpec: input?.currentSpec,
    };
  })
  .handler(async ({ data }): Promise<GenerateResult> => {
    if (!data.prompt) {
      return { ok: false, error: "Describe the Android app you want to build." };
    }

    if (data.currentSpec) {
      return callXai([
        { role: "system", content: SYSTEM },
        {
          role: "user",
          content:
            "Update this Android app spec according to the instruction. Return the FULL updated JSON, including a short 'note' of what changed.\n\n" +
            `Current spec:\n${JSON.stringify(data.currentSpec)}\n\n` +
            `Instruction:\n${data.prompt}`,
        },
      ]);
    }

    return callXai([
      { role: "system", content: SYSTEM },
      {
        role: "user",
        content: `Design this Android app:\n${data.prompt}`,
      },
    ]);
  });
