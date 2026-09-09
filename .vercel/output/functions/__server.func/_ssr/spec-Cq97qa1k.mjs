import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/spec-Cq97qa1k.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function pascalCase(name) {
	const parts = name.replace(/[^a-zA-Z0-9]+/g, " ").trim().split(/\s+/).filter(Boolean);
	if (parts.length === 0) return "ForgeApp";
	return parts.map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join("");
}
function packageFromName(name) {
	return `com.forge.${name.toLowerCase().replace(/[^a-z0-9]+/g, "").slice(0, 18) || "app"}`;
}
function newId() {
	return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}
var ICON_SET = /* @__PURE__ */ new Set([
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
	"more"
]);
function asString(value, fallback = "") {
	return typeof value === "string" ? value.trim() : fallback;
}
function asNumber(value, fallback = 0) {
	return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}
function asBool(value, fallback = false) {
	return typeof value === "boolean" ? value : fallback;
}
function slugId(value, fallback) {
	return value.toLowerCase().replace(/[^a-z0-9]+/g, "").slice(0, 24) || fallback;
}
function asIcon(value, fallback = "home") {
	const raw = asString(value).toLowerCase();
	return ICON_SET.has(raw) ? raw : fallback;
}
function asHex(value, fallback) {
	const raw = asString(value);
	return /^#([0-9a-f]{6})$/i.test(raw) ? raw.toUpperCase() : fallback;
}
function asListItem(raw) {
	if (!raw || typeof raw !== "object") return null;
	const item = raw;
	const title = asString(item.title);
	if (!title) return null;
	const trailingRaw = asString(item.trailing);
	const trailing = trailingRaw === "chevron" || trailingRaw === "switch" || trailingRaw === "value" ? trailingRaw : void 0;
	return {
		title: title.slice(0, 48),
		subtitle: asString(item.subtitle).slice(0, 80) || void 0,
		meta: asString(item.meta).slice(0, 32) || void 0,
		icon: item.icon ? asIcon(item.icon, "star") : void 0,
		trailing,
		value: asString(item.value).slice(0, 24) || void 0,
		on: typeof item.on === "boolean" ? item.on : void 0
	};
}
function asBlock(raw) {
	if (!raw || typeof raw !== "object") return null;
	const block = raw;
	switch (asString(block.type)) {
		case "hero": {
			const title = asString(block.title);
			if (!title) return null;
			return {
				type: "hero",
				kicker: asString(block.kicker).slice(0, 40) || void 0,
				title: title.slice(0, 72),
				subtitle: asString(block.subtitle).slice(0, 140) || void 0
			};
		}
		case "search": return {
			type: "search",
			placeholder: asString(block.placeholder, "Search").slice(0, 40)
		};
		case "chips": {
			const items = Array.isArray(block.items) ? block.items.map((x) => asString(x)).filter(Boolean).slice(0, 8) : [];
			if (items.length === 0) return null;
			return {
				type: "chips",
				items,
				selected: Math.max(0, Math.min(items.length - 1, Math.round(asNumber(block.selected, 0))))
			};
		}
		case "statRow": {
			const stats = Array.isArray(block.stats) ? block.stats.map((s) => {
				if (!s || typeof s !== "object") return null;
				const rec = s;
				const label = asString(rec.label);
				const value = asString(rec.value);
				if (!label || !value) return null;
				return {
					label: label.slice(0, 24),
					value: value.slice(0, 16)
				};
			}).filter((s) => Boolean(s)).slice(0, 4) : [];
			if (stats.length === 0) return null;
			return {
				type: "statRow",
				stats
			};
		}
		case "progress": {
			const label = asString(block.label);
			if (!label) return null;
			const value = Math.max(0, Math.min(1, asNumber(block.value, .4)));
			return {
				type: "progress",
				label: label.slice(0, 40),
				value,
				caption: asString(block.caption).slice(0, 48) || void 0
			};
		}
		case "section": {
			const title = asString(block.title);
			if (!title) return null;
			return {
				type: "section",
				title: title.slice(0, 36),
				action: asString(block.action).slice(0, 20) || void 0
			};
		}
		case "card": {
			const title = asString(block.title);
			if (!title) return null;
			return {
				type: "card",
				title: title.slice(0, 48),
				body: asString(block.body).slice(0, 160) || void 0,
				meta: asString(block.meta).slice(0, 40) || void 0,
				icon: block.icon ? asIcon(block.icon, "star") : void 0,
				tone: asString(block.tone) === "accent" ? "accent" : "default"
			};
		}
		case "list": {
			const items = Array.isArray(block.items) ? block.items.map(asListItem).filter((x) => Boolean(x)).slice(0, 10) : [];
			if (items.length === 0) return null;
			return {
				type: "list",
				items
			};
		}
		case "toggle": {
			const label = asString(block.label);
			if (!label) return null;
			return {
				type: "toggle",
				label: label.slice(0, 40),
				description: asString(block.description).slice(0, 80) || void 0,
				on: asBool(block.on, false)
			};
		}
		case "field": {
			const label = asString(block.label);
			if (!label) return null;
			return {
				type: "field",
				label: label.slice(0, 32),
				placeholder: asString(block.placeholder).slice(0, 48) || void 0,
				multiline: asBool(block.multiline, false)
			};
		}
		case "button": {
			const label = asString(block.label);
			if (!label) return null;
			const variantRaw = asString(block.variant);
			const variant = variantRaw === "tonal" || variantRaw === "outline" ? variantRaw : "filled";
			return {
				type: "button",
				label: label.slice(0, 32),
				variant
			};
		}
		case "quote": {
			const text = asString(block.text);
			if (!text) return null;
			return {
				type: "quote",
				text: text.slice(0, 180),
				attribution: asString(block.attribution).slice(0, 40) || void 0
			};
		}
		default: return null;
	}
}
function asScreen(raw, fallbackId, fallbackTitle) {
	if (!raw || typeof raw !== "object") return null;
	const screen = raw;
	const id = slugId(asString(screen.id, fallbackId), fallbackId);
	const title = asString(screen.title, fallbackTitle).slice(0, 28) || fallbackTitle;
	const blocks = (Array.isArray(screen.blocks) ? screen.blocks : Array.isArray(screen.components) ? screen.components : []).map(asBlock).filter((b) => Boolean(b)).slice(0, 16);
	let fab = null;
	if (screen.fab && typeof screen.fab === "object") {
		const rec = screen.fab;
		fab = {
			icon: asIcon(rec.icon, "add"),
			label: asString(rec.label).slice(0, 20) || void 0
		};
	}
	return {
		id,
		title,
		subtitle: asString(screen.subtitle).slice(0, 40) || void 0,
		fab,
		blocks
	};
}
var SKELETON_SPEC = {
	name: "New app",
	packageName: "com.forge.draft",
	tagline: "Designing your Android app",
	theme: {
		seed: "#3F6B54",
		mode: "light"
	},
	nav: [
		{
			id: "home",
			label: "Home",
			icon: "home"
		},
		{
			id: "two",
			label: "Explore",
			icon: "search"
		},
		{
			id: "three",
			label: "You",
			icon: "person"
		}
	],
	screens: [{
		id: "home",
		title: "Forge",
		blocks: []
	}]
};
function coerceSpec(raw) {
	if (!raw || typeof raw !== "object") throw new Error("The model returned an empty spec.");
	const rec = raw;
	const name = asString(rec.name, "Forge App").slice(0, 28) || "Forge App";
	const packageName = /^[a-z][a-z0-9_]*(\.[a-z][a-z0-9_]*)+$/.test(asString(rec.packageName)) ? asString(rec.packageName) : packageFromName(name);
	const themeRaw = rec.theme && typeof rec.theme === "object" ? rec.theme : {};
	const mode = asString(themeRaw.mode) === "dark" ? "dark" : "light";
	const nav = (Array.isArray(rec.nav) ? rec.nav : []).map((item, index) => {
		if (!item || typeof item !== "object") return null;
		const n = item;
		const label = asString(n.label).slice(0, 16);
		if (!label) return null;
		return {
			id: slugId(asString(n.id, label), `tab${index}`),
			label,
			icon: asIcon(n.icon, [
				"home",
				"search",
				"settings",
				"person",
				"star"
			][index] ?? "star")
		};
	}).filter((n) => Boolean(n)).slice(0, 5);
	let screens = (Array.isArray(rec.screens) ? rec.screens : Array.isArray(rec.pages) ? rec.pages : []).map((s, i) => asScreen(s, nav[i]?.id ?? `screen${i}`, nav[i]?.label ?? `Screen ${i + 1}`)).filter((s) => Boolean(s)).slice(0, 5);
	if (nav.length === 0 && screens.length > 0) nav.push(...screens.slice(0, 3).map((s, i) => ({
		id: s.id,
		label: s.title.slice(0, 12) || `Tab ${i + 1}`,
		icon: [
			"home",
			"search",
			"settings"
		][i] ?? "star"
	})));
	if (nav.length === 0) nav.push({
		id: "home",
		label: "Home",
		icon: "home"
	});
	if (screens.length === 0) screens = nav.map((n) => ({
		id: n.id,
		title: n.label,
		blocks: [{
			type: "hero",
			title: name,
			subtitle: asString(rec.tagline, "A new Android app.")
		}]
	}));
	screens = screens.map((s, i) => ({
		...s,
		id: nav[i]?.id ?? s.id
	}));
	while (screens.length < nav.length) {
		const n = nav[screens.length];
		screens.push({
			id: n.id,
			title: n.label,
			blocks: [{
				type: "hero",
				title: n.label,
				subtitle: "Add more here."
			}]
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
				mode
			},
			nav,
			screens
		},
		note: note || `Designed ${name}.`
	};
}
function extractJson(text) {
	const trimmed = text.trim();
	const fence = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/);
	const raw = fence ? fence[1].trim() : trimmed;
	const start = raw.indexOf("{");
	const end = raw.lastIndexOf("}");
	if (start === -1 || end <= start) throw new Error("No JSON object in the model response.");
	return JSON.parse(raw.slice(start, end + 1));
}
//#endregion
export { newId as a, extractJson as i, cn as n, pascalCase as o, coerceSpec as r, SKELETON_SPEC as t };
