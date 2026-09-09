export type MaterialScheme = {
  primary: string;
  onPrimary: string;
  primaryContainer: string;
  onPrimaryContainer: string;
  secondaryContainer: string;
  onSecondaryContainer: string;
  surface: string;
  surfaceDim: string;
  surfaceContainerLowest: string;
  surfaceContainer: string;
  surfaceContainerHigh: string;
  onSurface: string;
  onSurfaceVariant: string;
  outline: string;
  outlineVariant: string;
  inverse: string;
};

type RGB = { r: number; g: number; b: number };
type HSL = { h: number; s: number; l: number };

function hexToRgb(hex: string): RGB {
  const h = hex.replace("#", "");
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16),
  };
}

function rgbToHex(r: number, g: number, b: number): string {
  const to = (n: number) =>
    Math.max(0, Math.min(255, Math.round(n)))
      .toString(16)
      .padStart(2, "0");
  return `#${to(r)}${to(g)}${to(b)}`.toUpperCase();
}

function rgbToHsl({ r, g, b }: RGB): HSL {
  const R = r / 255;
  const G = g / 255;
  const B = b / 255;
  const max = Math.max(R, G, B);
  const min = Math.min(R, G, B);
  const l = (max + min) / 2;
  if (max === min) return { h: 0, s: 0, l };
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h = 0;
  if (max === R) h = (G - B) / d + (G < B ? 6 : 0);
  else if (max === G) h = (B - R) / d + 2;
  else h = (R - G) / d + 4;
  return { h: h * 60, s, l };
}

function hueToRgb(p: number, q: number, t: number): number {
  let T = t;
  if (T < 0) T += 1;
  if (T > 1) T -= 1;
  if (T < 1 / 6) return p + (q - p) * 6 * T;
  if (T < 1 / 2) return q;
  if (T < 2 / 3) return p + (q - p) * (2 / 3 - T) * 6;
  return p;
}

function hslToRgb({ h, s, l }: HSL): RGB {
  if (s === 0) {
    const v = l * 255;
    return { r: v, g: v, b: v };
  }
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const hk = h / 360;
  return {
    r: hueToRgb(p, q, hk + 1 / 3) * 255,
    g: hueToRgb(p, q, hk) * 255,
    b: hueToRgb(p, q, hk - 1 / 3) * 255,
  };
}

function mixHex(a: string, b: string, t: number): string {
  const A = hexToRgb(a);
  const B = hexToRgb(b);
  return rgbToHex(A.r + (B.r - A.r) * t, A.g + (B.g - A.g) * t, A.b + (B.b - A.b) * t);
}

function relLum(hex: string): number {
  const { r, g, b } = hexToRgb(hex);
  const lin = (c: number) => {
    const s = c / 255;
    return s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}

function onColor(bg: string, light = "#F4F7F4", dark = "#1A1C1B"): string {
  return relLum(bg) > 0.42 ? dark : light;
}

function tuneSeed(hex: string): string {
  const hsl = rgbToHsl(hexToRgb(hex));
  hsl.s = Math.min(0.42, Math.max(0.18, hsl.s));
  hsl.l = Math.min(0.48, Math.max(0.28, hsl.l));
  const rgb = hslToRgb(hsl);
  return rgbToHex(rgb.r, rgb.g, rgb.b);
}

export function schemeFromSeed(seed: string, mode: "light" | "dark"): MaterialScheme {
  const primary = tuneSeed(seed);
  if (mode === "dark") {
    const p = mixHex(primary, "#D7E6DC", 0.42);
    const surface = mixHex(primary, "#0E100F", 0.9);
    const container = mixHex(primary, "#171A18", 0.82);
    return {
      primary: p,
      onPrimary: onColor(p, "#E8F3EC", "#102018"),
      primaryContainer: mixHex(primary, "#1C2A22", 0.45),
      onPrimaryContainer: mixHex("#E8F3EC", primary, 0.12),
      secondaryContainer: mixHex(primary, "#222826", 0.55),
      onSecondaryContainer: mixHex("#E4EDE6", primary, 0.18),
      surface,
      surfaceDim: mixHex(primary, "#0A0C0B", 0.88),
      surfaceContainerLowest: mixHex(primary, "#080908", 0.9),
      surfaceContainer: container,
      surfaceContainerHigh: mixHex(primary, "#1E2420", 0.75),
      onSurface: "#E6EDE8",
      onSurfaceVariant: "#B0B8B2",
      outline: mixHex(primary, "#8A938C", 0.35),
      outlineVariant: mixHex(primary, "#3A423C", 0.4),
      inverse: "#E6EDE8",
    };
  }

  const surface = mixHex(primary, "#F6F4F0", 0.94);
  const container = mixHex(primary, "#EDEAE4", 0.88);
  const pContainer = mixHex(primary, "#FFFFFF", 0.82);
  return {
    primary,
    onPrimary: onColor(primary),
    primaryContainer: pContainer,
    onPrimaryContainer: mixHex("#1A1C1B", primary, 0.35),
    secondaryContainer: mixHex(primary, "#E7EBE6", 0.7),
    onSecondaryContainer: mixHex("#1A1C1B", primary, 0.4),
    surface,
    surfaceDim: mixHex(primary, "#E7E4DE", 0.86),
    surfaceContainerLowest: "#FFFDF8",
    surfaceContainer: container,
    surfaceContainerHigh: mixHex(primary, "#E3E0DA", 0.8),
    onSurface: "#1A1C1B",
    onSurfaceVariant: "#545C57",
    outline: mixHex(primary, "#747C76", 0.35),
    outlineVariant: mixHex(primary, "#D5D8D3", 0.4),
    inverse: "#1A1C1B",
  };
}

export function schemeCssVars(scheme: MaterialScheme): Record<string, string> {
  return {
    "--md-primary": scheme.primary,
    "--md-on-primary": scheme.onPrimary,
    "--md-primary-container": scheme.primaryContainer,
    "--md-on-primary-container": scheme.onPrimaryContainer,
    "--md-secondary-container": scheme.secondaryContainer,
    "--md-on-secondary-container": scheme.onSecondaryContainer,
    "--md-surface": scheme.surface,
    "--md-surface-dim": scheme.surfaceDim,
    "--md-surface-lowest": scheme.surfaceContainerLowest,
    "--md-surface-container": scheme.surfaceContainer,
    "--md-surface-high": scheme.surfaceContainerHigh,
    "--md-on-surface": scheme.onSurface,
    "--md-on-variant": scheme.onSurfaceVariant,
    "--md-outline": scheme.outline,
    "--md-outline-variant": scheme.outlineVariant,
    "--md-inverse": scheme.inverse,
  };
}

export function hexToArgb(hex: string): string {
  return `0xFF${hex.replace("#", "").toUpperCase()}`;
}
