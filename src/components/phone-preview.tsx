import { useEffect, useMemo, useState, type CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowLeft,
  BarChart3,
  Bell,
  BookOpen,
  Calendar,
  Camera,
  Check,
  ChevronRight,
  Droplets,
  Dumbbell,
  Heart,
  Home,
  Leaf,
  Map,
  Moon,
  MoreHorizontal,
  Music,
  Pencil,
  Plus,
  Search,
  Settings,
  Share2,
  Star,
  Sun,
  Timer,
  Trash2,
  User,
  UtensilsCrossed,
  Wallet,
  Wifi,
  Zap,
} from "lucide-react";
import type { AppSpec, Block, IconName, ListItem, Screen } from "@/lib/spec";
import { schemeCssVars, schemeFromSeed } from "@/lib/theme";
import { cn } from "@/lib/utils";

const ICONS: Record<IconName, LucideIcon> = {
  home: Home,
  search: Search,
  settings: Settings,
  person: User,
  favorite: Heart,
  add: Plus,
  check: Check,
  star: Star,
  bolt: Zap,
  leaf: Leaf,
  book: BookOpen,
  fitness: Dumbbell,
  restaurant: UtensilsCrossed,
  wallet: Wallet,
  calendar: Calendar,
  notifications: Bell,
  chart: BarChart3,
  timer: Timer,
  map: Map,
  camera: Camera,
  music: Music,
  water: Droplets,
  moon: Moon,
  sun: Sun,
  edit: Pencil,
  delete: Trash2,
  share: Share2,
  back: ArrowLeft,
  more: MoreHorizontal,
};

function Glyph({ name, className, filled }: { name: IconName; className?: string; filled?: boolean }) {
  const Icon = ICONS[name] ?? Star;
  return (
    <Icon
      className={className}
      strokeWidth={1.75}
      fill={filled ? "currentColor" : "none"}
    />
  );
}

function StatusBar() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(id);
  }, []);
  const time = now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  return (
    <div
      className="relative z-20 flex h-8 shrink-0 items-center justify-between px-6 pt-1 text-[11px] font-medium tabular-nums"
      style={{ color: "var(--md-on-surface)" }}
    >
      <span>{time}</span>
      <span className="flex items-center gap-1.5">
        <Wifi className="size-3" strokeWidth={2.2} />
        <span className="inline-block h-2.5 w-4 rounded-[2px] shadow-[inset_0_0_0_1.2px_currentColor]">
          <span className="ml-px mt-px block h-1.5 w-2.5 rounded-[1px] bg-current" />
        </span>
      </span>
    </div>
  );
}

function Hero({ block }: { block: Extract<Block, { type: "hero" }> }) {
  return (
    <div
      className="rounded-xl px-5 py-5"
      style={{ background: "var(--md-primary-container)", color: "var(--md-on-primary-container)" }}
    >
      {block.kicker ? (
        <p className="text-[11px] font-medium uppercase tracking-[0.14em] opacity-80">{block.kicker}</p>
      ) : null}
      <h2 className="mt-1 font-display text-[26px] leading-tight font-medium tracking-tight">{block.title}</h2>
      {block.subtitle ? <p className="mt-2 text-[13px] leading-snug opacity-85">{block.subtitle}</p> : null}
    </div>
  );
}

function SearchBar({ placeholder }: { placeholder: string }) {
  return (
    <div
      className="flex h-11 items-center gap-2 rounded-xl px-3.5 text-[14px]"
      style={{ background: "var(--md-surface-container)", color: "var(--md-on-variant)" }}
    >
      <Search className="size-4 shrink-0" strokeWidth={1.75} />
      <span>{placeholder}</span>
    </div>
  );
}

function Chips({ items, selected }: { items: string[]; selected?: number }) {
  const [cur, setCur] = useState(selected ?? 0);
  return (
    <div className="flex gap-2 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {items.map((item, i) => {
        const on = i === cur;
        return (
          <button
            key={item}
            type="button"
            onClick={() => setCur(i)}
            className="h-8 shrink-0 rounded-full px-3.5 text-[12px] font-medium transition-[background-color,color,transform] duration-150 ease-out active:scale-[0.96]"
            style={
              on
                ? { background: "var(--md-secondary-container)", color: "var(--md-on-secondary-container)" }
                : {
                    background: "transparent",
                    color: "var(--md-on-variant)",
                    boxShadow: "inset 0 0 0 1px var(--md-outline-variant)",
                  }
            }
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

function StatRow({ stats }: { stats: { label: string; value: string }[] }) {
  return (
    <div
      className="grid rounded-xl px-2 py-4"
      style={{
        background: "var(--md-surface-container)",
        gridTemplateColumns: `repeat(${stats.length}, minmax(0, 1fr))`,
      }}
    >
      {stats.map((s) => (
        <div key={s.label} className="text-center">
          <div className="font-display text-[22px] leading-none font-medium tabular-nums" style={{ color: "var(--md-on-surface)" }}>
            {s.value}
          </div>
          <div className="mt-1.5 text-[11px] font-medium" style={{ color: "var(--md-on-variant)" }}>
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}

function Progress({ label, value, caption }: { label: string; value: number; caption?: string }) {
  return (
    <div className="rounded-xl px-4 py-4" style={{ background: "var(--md-surface-container)" }}>
      <div className="text-[14px] font-medium" style={{ color: "var(--md-on-surface)" }}>
        {label}
      </div>
      <div className="mt-3 h-2 overflow-hidden rounded-full" style={{ background: "var(--md-outline-variant)" }}>
        <div
          className="h-full rounded-full transition-[width] duration-500"
          style={{ width: `${Math.round(value * 100)}%`, background: "var(--md-primary)" }}
        />
      </div>
      {caption ? (
        <div className="mt-2 text-[12px]" style={{ color: "var(--md-on-variant)" }}>
          {caption}
        </div>
      ) : null}
    </div>
  );
}

function Section({ title, action }: { title: string; action?: string }) {
  return (
    <div className="flex items-end justify-between pt-1">
      <h3 className="text-[15px] font-medium" style={{ color: "var(--md-on-surface)" }}>
        {title}
      </h3>
      {action ? (
        <span className="text-[12px] font-medium" style={{ color: "var(--md-primary)" }}>
          {action}
        </span>
      ) : null}
    </div>
  );
}

function CardBlock({ block }: { block: Extract<Block, { type: "card" }> }) {
  const accent = block.tone === "accent";
  return (
    <div
      className="rounded-xl px-4 py-4"
      style={{
        background: accent ? "var(--md-primary-container)" : "var(--md-surface-container)",
        color: accent ? "var(--md-on-primary-container)" : "var(--md-on-surface)",
      }}
    >
      <div className="flex items-center gap-2">
        {block.icon ? <Glyph name={block.icon} className="size-4" /> : null}
        <div className="text-[15px] font-medium">{block.title}</div>
      </div>
      {block.body ? <p className="mt-2 text-[13px] leading-snug opacity-90">{block.body}</p> : null}
      {block.meta ? (
        <p className="mt-2 text-[11px] font-medium opacity-70">{block.meta}</p>
      ) : null}
    </div>
  );
}

function Switch({ on, onChange }: { on: boolean; onChange: () => void }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      onClick={onChange}
      className="relative h-6 w-11 shrink-0 rounded-full transition-colors duration-150 ease-out"
      style={{ background: on ? "var(--md-primary)" : "var(--md-outline-variant)" }}
    >
      <span
        className="absolute top-0.5 left-0.5 size-5 rounded-full transition-transform duration-150 ease-out"
        style={{
          transform: on ? "translateX(20px)" : "translateX(0)",
          background: on ? "var(--md-on-primary)" : "var(--md-surface)",
        }}
      />
    </button>
  );
}

function ListRow({ item, last }: { item: ListItem; last: boolean }) {
  const [on, setOn] = useState(item.on ?? false);
  return (
    <div
      className="flex min-h-14 items-center gap-3 px-4 py-2.5"
      style={{ boxShadow: last ? "none" : "inset 0 -1px 0 var(--md-outline-variant)" }}
    >
      {item.icon ? (
        <span
          className="flex size-9 shrink-0 items-center justify-center rounded-lg"
          style={{ background: "var(--md-secondary-container)", color: "var(--md-on-secondary-container)" }}
        >
          <Glyph name={item.icon} className="size-4" />
        </span>
      ) : null}
      <div className="min-w-0 flex-1">
        <div className="truncate text-[14px] font-medium" style={{ color: "var(--md-on-surface)" }}>
          {item.title}
        </div>
        {item.subtitle ? (
          <div className="truncate text-[12px]" style={{ color: "var(--md-on-variant)" }}>
            {item.subtitle}
          </div>
        ) : null}
      </div>
      {item.meta && item.trailing !== "value" ? (
        <span className="text-[11px] font-medium" style={{ color: "var(--md-on-variant)" }}>
          {item.meta}
        </span>
      ) : null}
      {item.trailing === "value" ? (
        <span className="text-[13px] font-medium tabular-nums" style={{ color: "var(--md-on-surface)" }}>
          {item.value}
        </span>
      ) : null}
      {item.trailing === "switch" ? <Switch on={on} onChange={() => setOn((v) => !v)} /> : null}
      {item.trailing === "chevron" || !item.trailing ? (
        <ChevronRight className="size-4 shrink-0" style={{ color: "var(--md-outline)" }} />
      ) : null}
    </div>
  );
}

function Toggle({ label, description, initial }: { label: string; description?: string; initial: boolean }) {
  const [on, setOn] = useState(initial);
  return (
    <div
      className="flex items-center gap-3 rounded-xl px-4 py-3.5"
      style={{ background: "var(--md-surface-container)" }}
    >
      <div className="min-w-0 flex-1">
        <div className="text-[14px] font-medium" style={{ color: "var(--md-on-surface)" }}>
          {label}
        </div>
        {description ? (
          <div className="mt-0.5 text-[12px] leading-snug" style={{ color: "var(--md-on-variant)" }}>
            {description}
          </div>
        ) : null}
      </div>
      <Switch on={on} onChange={() => setOn((v) => !v)} />
    </div>
  );
}

function Field({ label, placeholder, multiline }: { label: string; placeholder?: string; multiline?: boolean }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[12px] font-medium" style={{ color: "var(--md-on-variant)" }}>
        {label}
      </span>
      <span
        className={cn("block rounded-lg px-3 py-3 text-[14px]", multiline ? "min-h-20" : "h-11")}
        style={{ background: "var(--md-surface-container)", color: "var(--md-on-variant)" }}
      >
        {placeholder}
      </span>
    </label>
  );
}

function Action({ label, variant }: { label: string; variant?: "filled" | "tonal" | "outline" }) {
  const style =
    variant === "outline"
      ? { background: "transparent", color: "var(--md-primary)", boxShadow: "inset 0 0 0 1px var(--md-outline)" }
      : variant === "tonal"
        ? { background: "var(--md-secondary-container)", color: "var(--md-on-secondary-container)" }
        : { background: "var(--md-primary)", color: "var(--md-on-primary)" };
  return (
    <button
      type="button"
      className="h-11 w-full rounded-lg text-[14px] font-medium transition-transform duration-150 ease-out active:scale-[0.96]"
      style={style}
    >
      {label}
    </button>
  );
}

function Quote({ text, attribution }: { text: string; attribution?: string }) {
  return (
    <div
      className="rounded-xl px-5 py-5"
      style={{ background: "var(--md-primary-container)", color: "var(--md-on-primary-container)" }}
    >
      <p className="text-[15px] leading-relaxed">{text}</p>
      {attribution ? <p className="mt-3 text-[11px] font-medium opacity-70">{attribution}</p> : null}
    </div>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "hero":
      return <Hero block={block} />;
    case "search":
      return <SearchBar placeholder={block.placeholder} />;
    case "chips":
      return <Chips items={block.items} selected={block.selected} />;
    case "statRow":
      return <StatRow stats={block.stats} />;
    case "progress":
      return <Progress label={block.label} value={block.value} caption={block.caption} />;
    case "section":
      return <Section title={block.title} action={block.action} />;
    case "card":
      return <CardBlock block={block} />;
    case "list":
      return (
        <div className="overflow-hidden rounded-xl" style={{ background: "var(--md-surface-container)" }}>
          {block.items.map((item, i) => (
            <ListRow key={`${item.title}-${i}`} item={item} last={i === block.items.length - 1} />
          ))}
        </div>
      );
    case "toggle":
      return <Toggle label={block.label} description={block.description} initial={block.on} />;
    case "field":
      return <Field label={block.label} placeholder={block.placeholder} multiline={block.multiline} />;
    case "button":
      return <Action label={block.label} variant={block.variant} />;
    case "quote":
      return <Quote text={block.text} attribution={block.attribution} />;
    default:
      return null;
  }
}

function ScreenBody({
  screen,
  snack,
}: {
  screen: Screen;
  snack: string | null;
}) {
  return (
    <div className="relative min-h-0 flex-1">
      <div className="h-full overflow-y-auto px-4 pb-24" style={{ color: "var(--md-on-surface)" }}>
        <div className="flex items-baseline justify-between py-2">
          <div>
            <h1 className="font-display text-[22px] leading-tight font-medium tracking-tight">{screen.title}</h1>
            {screen.subtitle ? (
              <p className="text-[12px]" style={{ color: "var(--md-on-variant)" }}>
                {screen.subtitle}
              </p>
            ) : null}
          </div>
          <MoreHorizontal className="size-5" style={{ color: "var(--md-on-variant)" }} />
        </div>
        <div className="flex flex-col gap-3 pb-4">
          {screen.blocks.map((block, i) => (
            <BlockView key={`${block.type}-${i}`} block={block} />
          ))}
        </div>
      </div>
      {screen.fab ? (
        <button
          type="button"
          aria-label={screen.fab.label ?? "Add"}
          className="absolute right-4 bottom-3 flex size-14 items-center justify-center rounded-2xl transition-transform duration-150 ease-out active:scale-[0.96]"
          style={{ background: "var(--md-primary-container)", color: "var(--md-on-primary-container)" }}
        >
          <Glyph name={screen.fab.icon} className="size-6" />
        </button>
      ) : null}
      {snack ? (
        <div
          className="absolute inset-x-4 bottom-4 rounded-lg px-3.5 py-2.5 text-[12px] font-medium"
          style={{ background: "var(--md-inverse)", color: "var(--md-surface)" }}
        >
          {snack}
        </div>
      ) : null}
    </div>
  );
}

function SkeletonScreen() {
  return (
    <div className="flex flex-1 flex-col gap-3 px-4 pt-4">
      <div className="shimmer h-28 rounded-xl" />
      <div className="shimmer h-20 rounded-xl" />
      <div className="shimmer h-14 rounded-xl" />
      <div className="shimmer h-14 rounded-xl" />
      <div className="shimmer h-24 rounded-xl" />
    </div>
  );
}

export function PhonePreview({
  spec,
  activeScreenId,
  onScreenChange,
  generating = false,
}: {
  spec: AppSpec;
  activeScreenId: string;
  onScreenChange?: (id: string) => void;
  generating?: boolean;
}) {
  const scheme = useMemo(
    () => schemeFromSeed(spec.theme.seed, spec.theme.mode),
    [spec.theme.seed, spec.theme.mode],
  );
  const vars = schemeCssVars(scheme);
  const screen = spec.screens.find((s) => s.id === activeScreenId) ?? spec.screens[0];

  return (
    <div className="device mx-auto">
      <div className="device-camera" aria-hidden="true" />
      <div
        className="device-screen"
        style={
          {
            ...vars,
            background: "var(--md-surface)",
            color: "var(--md-on-surface)",
          } as CSSProperties
        }
      >
        <StatusBar />
        {generating || !screen ? (
          <SkeletonScreen />
        ) : (
          <ScreenBody screen={screen} snack={null} />
        )}
        <nav
          className="relative z-10 flex h-16 shrink-0 items-stretch justify-around px-2 pb-2"
          style={{ background: "var(--md-surface-container)", boxShadow: "inset 0 1px 0 var(--md-outline-variant)" }}
        >
          {spec.nav.map((item) => {
            const selected = item.id === (screen?.id ?? activeScreenId);
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onScreenChange?.(item.id)}
                className="flex min-w-14 flex-1 flex-col items-center justify-center gap-1 pt-1 transition-transform duration-150 ease-out active:scale-[0.96]"
                style={{ color: selected ? "var(--md-on-surface)" : "var(--md-on-variant)" }}
              >
                <span
                  className="flex h-8 w-14 items-center justify-center rounded-full transition-colors duration-150"
                  style={{ background: selected ? "var(--md-secondary-container)" : "transparent" }}
                >
                  <Glyph name={item.icon} className="size-5" filled={selected} />
                </span>
                <span className="text-[11px] font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
