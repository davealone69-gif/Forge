import { packageFromName } from "@/lib/utils";

export const ICON_NAMES = [
  "home",
  "search",
  "settings",
  "person",
  "favorite",
  "add",
  "check",
  "star",
  "bolt",
  "leaf",
  "book",
  "fitness",
  "restaurant",
  "wallet",
  "calendar",
  "notifications",
  "chart",
  "timer",
  "map",
  "camera",
  "music",
  "water",
  "moon",
  "sun",
  "edit",
  "delete",
  "share",
  "back",
  "more",
] as const;

export type IconName = (typeof ICON_NAMES)[number];

export type NavItem = {
  id: string;
  label: string;
  icon: IconName;
};

export type ListItem = {
  title: string;
  subtitle?: string;
  meta?: string;
  icon?: IconName;
  trailing?: "chevron" | "switch" | "value";
  value?: string;
  on?: boolean;
};

export type Block =
  | { type: "hero"; kicker?: string; title: string; subtitle?: string }
  | { type: "search"; placeholder: string }
  | { type: "chips"; items: string[]; selected?: number }
  | { type: "statRow"; stats: { label: string; value: string }[] }
  | { type: "progress"; label: string; value: number; caption?: string }
  | { type: "section"; title: string; action?: string }
  | {
      type: "card";
      title: string;
      body?: string;
      meta?: string;
      icon?: IconName;
      tone?: "default" | "accent";
    }
  | { type: "list"; items: ListItem[] }
  | { type: "toggle"; label: string; description?: string; on: boolean }
  | { type: "field"; label: string; placeholder?: string; multiline?: boolean }
  | { type: "button"; label: string; variant?: "filled" | "tonal" | "outline" }
  | { type: "quote"; text: string; attribution?: string };

export type Screen = {
  id: string;
  title: string;
  subtitle?: string;
  fab?: { icon: IconName; label?: string } | null;
  blocks: Block[];
};

export type AppSpec = {
  name: string;
  packageName: string;
  tagline: string;
  theme: {
    seed: string;
    mode: "light" | "dark";
  };
  nav: NavItem[];
  screens: Screen[];
};

export type GeneratedApp = {
  spec: AppSpec;
  note: string;
};

const ICON_SET = new Set<string>(ICON_NAMES);

function asString(value: unknown, fallback = ""): string {
  return typeof value === "string" ? value.trim() : fallback;
}

function asNumber(value: unknown, fallback = 0): number {
  return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}

function asBool(value: unknown, fallback = false): boolean {
  return typeof value === "boolean" ? value : fallback;
}

function slugId(value: string, fallback: string): string {
  const slug = value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "")
    .slice(0, 24);
  return slug || fallback;
}

function asIcon(value: unknown, fallback: IconName = "home"): IconName {
  const raw = asString(value).toLowerCase();
  return ICON_SET.has(raw) ? (raw as IconName) : fallback;
}

function asHex(value: unknown, fallback: string): string {
  const raw = asString(value);
  return /^#([0-9a-f]{6})$/i.test(raw) ? raw.toUpperCase() : fallback;
}

function asListItem(raw: unknown): ListItem | null {
  if (!raw || typeof raw !== "object") return null;
  const item = raw as Record<string, unknown>;
  const title = asString(item.title);
  if (!title) return null;
  const trailingRaw = asString(item.trailing);
  const trailing =
    trailingRaw === "chevron" || trailingRaw === "switch" || trailingRaw === "value"
      ? trailingRaw
      : undefined;
  return {
    title: title.slice(0, 48),
    subtitle: asString(item.subtitle).slice(0, 80) || undefined,
    meta: asString(item.meta).slice(0, 32) || undefined,
    icon: item.icon ? asIcon(item.icon, "star") : undefined,
    trailing,
    value: asString(item.value).slice(0, 24) || undefined,
    on: typeof item.on === "boolean" ? item.on : undefined,
  };
}

function asBlock(raw: unknown): Block | null {
  if (!raw || typeof raw !== "object") return null;
  const block = raw as Record<string, unknown>;
  const type = asString(block.type);
  switch (type) {
    case "hero": {
      const title = asString(block.title);
      if (!title) return null;
      return {
        type: "hero",
        kicker: asString(block.kicker).slice(0, 40) || undefined,
        title: title.slice(0, 72),
        subtitle: asString(block.subtitle).slice(0, 140) || undefined,
      };
    }
    case "search":
      return {
        type: "search",
        placeholder: asString(block.placeholder, "Search").slice(0, 40),
      };
    case "chips": {
      const items = Array.isArray(block.items)
        ? block.items.map((x) => asString(x)).filter(Boolean).slice(0, 8)
        : [];
      if (items.length === 0) return null;
      return {
        type: "chips",
        items,
        selected: Math.max(0, Math.min(items.length - 1, Math.round(asNumber(block.selected, 0)))),
      };
    }
    case "statRow": {
      const stats = Array.isArray(block.stats)
        ? block.stats
            .map((s) => {
              if (!s || typeof s !== "object") return null;
              const rec = s as Record<string, unknown>;
              const label = asString(rec.label);
              const value = asString(rec.value);
              if (!label || !value) return null;
              return { label: label.slice(0, 24), value: value.slice(0, 16) };
            })
            .filter((s): s is { label: string; value: string } => Boolean(s))
            .slice(0, 4)
        : [];
      if (stats.length === 0) return null;
      return { type: "statRow", stats };
    }
    case "progress": {
      const label = asString(block.label);
      if (!label) return null;
      const value = Math.max(0, Math.min(1, asNumber(block.value, 0.4)));
      return {
        type: "progress",
        label: label.slice(0, 40),
        value,
        caption: asString(block.caption).slice(0, 48) || undefined,
      };
    }
    case "section": {
      const title = asString(block.title);
      if (!title) return null;
      return {
        type: "section",
        title: title.slice(0, 36),
        action: asString(block.action).slice(0, 20) || undefined,
      };
    }
    case "card": {
      const title = asString(block.title);
      if (!title) return null;
      return {
        type: "card",
        title: title.slice(0, 48),
        body: asString(block.body).slice(0, 160) || undefined,
        meta: asString(block.meta).slice(0, 40) || undefined,
        icon: block.icon ? asIcon(block.icon, "star") : undefined,
        tone: asString(block.tone) === "accent" ? "accent" : "default",
      };
    }
    case "list": {
      const items = Array.isArray(block.items)
        ? block.items.map(asListItem).filter((x): x is ListItem => Boolean(x)).slice(0, 10)
        : [];
      if (items.length === 0) return null;
      return { type: "list", items };
    }
    case "toggle": {
      const label = asString(block.label);
      if (!label) return null;
      return {
        type: "toggle",
        label: label.slice(0, 40),
        description: asString(block.description).slice(0, 80) || undefined,
        on: asBool(block.on, false),
      };
    }
    case "field": {
      const label = asString(block.label);
      if (!label) return null;
      return {
        type: "field",
        label: label.slice(0, 32),
        placeholder: asString(block.placeholder).slice(0, 48) || undefined,
        multiline: asBool(block.multiline, false),
      };
    }
    case "button": {
      const label = asString(block.label);
      if (!label) return null;
      const variantRaw = asString(block.variant);
      const variant =
        variantRaw === "tonal" || variantRaw === "outline" ? variantRaw : "filled";
      return { type: "button", label: label.slice(0, 32), variant };
    }
    case "quote": {
      const text = asString(block.text);
      if (!text) return null;
      return {
        type: "quote",
        text: text.slice(0, 180),
        attribution: asString(block.attribution).slice(0, 40) || undefined,
      };
    }
    default:
      return null;
  }
}

function asScreen(raw: unknown, fallbackId: string, fallbackTitle: string): Screen | null {
  if (!raw || typeof raw !== "object") return null;
  const screen = raw as Record<string, unknown>;
  const id = slugId(asString(screen.id, fallbackId), fallbackId);
  const title = asString(screen.title, fallbackTitle).slice(0, 28) || fallbackTitle;
  const blockSource = Array.isArray(screen.blocks)
    ? screen.blocks
    : Array.isArray(screen.components)
      ? screen.components
      : [];
  const blocks = blockSource.map(asBlock).filter((b): b is Block => Boolean(b)).slice(0, 16);
  let fab: Screen["fab"] = null;
  if (screen.fab && typeof screen.fab === "object") {
    const rec = screen.fab as Record<string, unknown>;
    fab = {
      icon: asIcon(rec.icon, "add"),
      label: asString(rec.label).slice(0, 20) || undefined,
    };
  }
  return {
    id,
    title,
    subtitle: asString(screen.subtitle).slice(0, 40) || undefined,
    fab,
    blocks,
  };
}

export const SKELETON_SPEC: AppSpec = {
  name: "New app",
  packageName: "com.forge.draft",
  tagline: "Designing your Android app",
  theme: { seed: "#3F6B54", mode: "light" },
  nav: [
    { id: "home", label: "Home", icon: "home" },
    { id: "two", label: "Explore", icon: "search" },
    { id: "three", label: "You", icon: "person" },
  ],
  screens: [{ id: "home", title: "Forge", blocks: [] }],
};

export function coerceSpec(raw: unknown): GeneratedApp {
  if (!raw || typeof raw !== "object") {
    throw new Error("The model returned an empty spec.");
  }
  const rec = raw as Record<string, unknown>;
  const name = asString(rec.name, "Forge App").slice(0, 28) || "Forge App";
  const packageName = /^[a-z][a-z0-9_]*(\.[a-z][a-z0-9_]*)+$/.test(asString(rec.packageName))
    ? asString(rec.packageName)
    : packageFromName(name);

  const themeRaw = rec.theme && typeof rec.theme === "object" ? (rec.theme as Record<string, unknown>) : {};
  const mode = asString(themeRaw.mode) === "dark" ? "dark" : "light";

  const navSource = Array.isArray(rec.nav) ? rec.nav : [];
  const nav: NavItem[] = navSource
    .map((item, index) => {
      if (!item || typeof item !== "object") return null;
      const n = item as Record<string, unknown>;
      const label = asString(n.label).slice(0, 16);
      if (!label) return null;
      const fallbacks: IconName[] = ["home", "search", "settings", "person", "star"];
      return {
        id: slugId(asString(n.id, label), `tab${index}`),
        label,
        icon: asIcon(n.icon, fallbacks[index] ?? "star"),
      };
    })
    .filter((n): n is NavItem => Boolean(n))
    .slice(0, 5);

  const screenSource = Array.isArray(rec.screens)
    ? rec.screens
    : Array.isArray(rec.pages)
      ? rec.pages
      : [];

  let screens = screenSource
    .map((s, i) => asScreen(s, nav[i]?.id ?? `screen${i}`, nav[i]?.label ?? `Screen ${i + 1}`))
    .filter((s): s is Screen => Boolean(s))
    .slice(0, 5);

  if (nav.length === 0 && screens.length > 0) {
    nav.push(
      ...screens.slice(0, 3).map((s, i) => ({
        id: s.id,
        label: s.title.slice(0, 12) || `Tab ${i + 1}`,
        icon: (["home", "search", "settings"] as IconName[])[i] ?? "star",
      })),
    );
  }

  if (nav.length === 0) {
    nav.push({ id: "home", label: "Home", icon: "home" });
  }

  if (screens.length === 0) {
    screens = nav.map((n) => ({
      id: n.id,
      title: n.label,
      blocks: [
        { type: "hero", title: name, subtitle: asString(rec.tagline, "A new Android app.") },
      ],
    }));
  }

  // Align screen ids with nav where possible.
  screens = screens.map((s, i) => ({
    ...s,
    id: nav[i]?.id ?? s.id,
  }));

  while (screens.length < nav.length) {
    const n = nav[screens.length];
    screens.push({
      id: n.id,
      title: n.label,
      blocks: [{ type: "hero", title: n.label, subtitle: "Add more here." }],
    });
  }

  const note = asString(rec.note, asString(rec.tagline, `Designed ${name}.`)).slice(0, 180);

  return {
    spec: {
      name,
      packageName,
      tagline: asString(rec.tagline, "A hand-built Android app.").slice(0, 90),
      theme: {
        seed: asHex(themeRaw.seed, "#3F6B54"),
        mode,
      },
      nav,
      screens,
    },
    note: note || `Designed ${name}.`,
  };
}

export function extractJson(text: string): unknown {
  const trimmed = text.trim();
  const fence = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/);
  const raw = fence ? fence[1].trim() : trimmed;
  const start = raw.indexOf("{");
  const end = raw.lastIndexOf("}");
  if (start === -1 || end <= start) {
    throw new Error("No JSON object in the model response.");
  }
  return JSON.parse(raw.slice(start, end + 1));
}
