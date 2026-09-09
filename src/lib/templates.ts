import type { AppSpec } from "@/lib/spec";

export type Template = {
  id: string;
  blurb: string;
  spec: AppSpec;
};

export const TEMPLATES: Template[] = [
  {
    id: "bloom",
    blurb: "Houseplant care without the guilt",
    spec: {
      name: "Bloom",
      packageName: "com.forge.bloom",
      tagline: "Water the right plant, at the right time.",
      theme: { seed: "#3F6B54", mode: "light" },
      nav: [
        { id: "home", label: "Today", icon: "leaf" },
        { id: "garden", label: "Garden", icon: "search" },
        { id: "care", label: "Care", icon: "settings" },
      ],
      screens: [
        {
          id: "home",
          title: "Bloom",
          subtitle: "Saturday",
          fab: { icon: "add", label: "Add plant" },
          blocks: [
            {
              type: "hero",
              kicker: "Good morning",
              title: "Two plants need a drink",
              subtitle: "Fiddle-leaf and pothos are thirsty. The rest can wait.",
            },
            {
              type: "statRow",
              stats: [
                { label: "Plants", value: "8" },
                { label: "Due today", value: "2" },
                { label: "Streak", value: "12d" },
              ],
            },
            { type: "section", title: "Today", action: "See all" },
            {
              type: "list",
              items: [
                {
                  title: "Fiddle-leaf fig",
                  subtitle: "Last watered 9 days ago",
                  icon: "water",
                  trailing: "chevron",
                  meta: "250 ml",
                },
                {
                  title: "Golden pothos",
                  subtitle: "Leaves are starting to droop",
                  icon: "water",
                  trailing: "chevron",
                  meta: "180 ml",
                },
                {
                  title: "Boston fern",
                  subtitle: "Mist only — soil is still damp",
                  icon: "leaf",
                  trailing: "chevron",
                  meta: "Mist",
                },
              ],
            },
            { type: "section", title: "Looking happy" },
            {
              type: "card",
              title: "Snake plant",
              body: "Last watered 18 days ago and still fine. This one likes to be ignored.",
              meta: "Low light · Monthly",
              icon: "leaf",
              tone: "accent",
            },
          ],
        },
        {
          id: "garden",
          title: "Garden",
          subtitle: "8 plants",
          blocks: [
            { type: "search", placeholder: "Search plants" },
            {
              type: "chips",
              items: ["All", "Low light", "Pet safe", "Thirsty"],
              selected: 0,
            },
            {
              type: "list",
              items: [
                { title: "Fiddle-leaf fig", subtitle: "Living room · Bright", icon: "leaf", trailing: "chevron" },
                { title: "Golden pothos", subtitle: "Kitchen · Medium", icon: "leaf", trailing: "chevron" },
                { title: "Snake plant", subtitle: "Hallway · Low", icon: "leaf", trailing: "chevron" },
                { title: "Monstera", subtitle: "Studio · Bright", icon: "leaf", trailing: "chevron" },
                { title: "Boston fern", subtitle: "Bathroom · Humidity", icon: "leaf", trailing: "chevron" },
                { title: "Olive tree", subtitle: "Balcony · Direct", icon: "leaf", trailing: "chevron" },
              ],
            },
          ],
        },
        {
          id: "care",
          title: "Care",
          blocks: [
            {
              type: "progress",
              label: "Weekly watering",
              value: 0.72,
              caption: "5 of 7 care tasks done",
            },
            { type: "section", title: "Reminders" },
            {
              type: "toggle",
              label: "Morning check-in",
              description: "A quiet nudge at 8:00 if something is due",
              on: true,
            },
            {
              type: "toggle",
              label: "Skip when raining",
              description: "Outdoor plants pause after wet weather",
              on: false,
            },
            {
              type: "list",
              items: [
                { title: "Notification time", trailing: "value", value: "08:00" },
                { title: "Units", trailing: "value", value: "ml" },
                { title: "Default light", trailing: "value", value: "Medium" },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "ledger",
    blurb: "A calm ledger for everyday spend",
    spec: {
      name: "Ledger",
      packageName: "com.forge.ledger",
      tagline: "See where the month actually went.",
      theme: { seed: "#3E534C", mode: "light" },
      nav: [
        { id: "home", label: "Month", icon: "wallet" },
        { id: "activity", label: "Activity", icon: "chart" },
        { id: "budget", label: "Budget", icon: "settings" },
      ],
      screens: [
        {
          id: "home",
          title: "September",
          subtitle: "Checking · 4482",
          fab: { icon: "add", label: "Add" },
          blocks: [
            {
              type: "hero",
              kicker: "Left to spend",
              title: "$1,240",
              subtitle: "of a $2,800 monthly envelope. 21 days remain.",
            },
            {
              type: "statRow",
              stats: [
                { label: "Spent", value: "$1,560" },
                { label: "Income", value: "$4,200" },
                { label: "Saved", value: "18%" },
              ],
            },
            { type: "section", title: "Recent", action: "All" },
            {
              type: "list",
              items: [
                { title: "Market on Pine", subtitle: "Groceries", meta: "Yesterday", trailing: "value", value: "−$64.20", icon: "restaurant" },
                { title: "Metro pass", subtitle: "Transit", meta: "Mon", trailing: "value", value: "−$28.00", icon: "map" },
                { title: "Northwell payroll", subtitle: "Income", meta: "Fri", trailing: "value", value: "+$2,100", icon: "wallet" },
                { title: "Atelier coffee", subtitle: "Cafés", meta: "Fri", trailing: "value", value: "−$6.50", icon: "restaurant" },
              ],
            },
          ],
        },
        {
          id: "activity",
          title: "Activity",
          blocks: [
            { type: "search", placeholder: "Search merchants" },
            {
              type: "chips",
              items: ["All", "Food", "Home", "Transit", "Income"],
              selected: 0,
            },
            {
              type: "list",
              items: [
                { title: "Week of Sep 1", subtitle: "18 charges", trailing: "value", value: "−$412" },
                { title: "Week of Aug 25", subtitle: "21 charges", trailing: "value", value: "−$388" },
                { title: "Week of Aug 18", subtitle: "16 charges", trailing: "value", value: "−$291" },
              ],
            },
            {
              type: "card",
              title: "Cafés are up 22%",
              body: "Eight visits this month versus five last month. Still under the $80 envelope.",
              icon: "chart",
              tone: "accent",
            },
          ],
        },
        {
          id: "budget",
          title: "Budget",
          blocks: [
            { type: "progress", label: "Groceries", value: 0.64, caption: "$320 of $500" },
            { type: "progress", label: "Transit", value: 0.4, caption: "$80 of $200" },
            { type: "progress", label: "Cafés", value: 0.71, caption: "$57 of $80" },
            { type: "section", title: "Rules" },
            {
              type: "toggle",
              label: "Round up to savings",
              description: "Spare change from each charge",
              on: true,
            },
            {
              type: "toggle",
              label: "Warn at 80%",
              description: "A single note, never a nag",
              on: true,
            },
          ],
        },
      ],
    },
  },
  {
    id: "pulse",
    blurb: "Strength log for a small garage gym",
    spec: {
      name: "Pulse",
      packageName: "com.forge.pulse",
      tagline: "Log the work. Watch the slow climb.",
      theme: { seed: "#4A7C6F", mode: "dark" },
      nav: [
        { id: "home", label: "Train", icon: "fitness" },
        { id: "log", label: "Log", icon: "calendar" },
        { id: "body", label: "Body", icon: "person" },
      ],
      screens: [
        {
          id: "home",
          title: "Pulse",
          subtitle: "Week 14",
          fab: { icon: "add", label: "Start" },
          blocks: [
            {
              type: "hero",
              kicker: "Today · Lower",
              title: "Squat, RDL, lunges",
              subtitle: "Last session: squat 225 × 5. Aim for 230 if the bar is fast.",
            },
            {
              type: "statRow",
              stats: [
                { label: "Streak", value: "9" },
                { label: "PRs", value: "3" },
                { label: "Minutes", value: "48" },
              ],
            },
            { type: "section", title: "Session" },
            {
              type: "list",
              items: [
                { title: "Back squat", subtitle: "5 × 5", trailing: "value", value: "225 lb", icon: "fitness" },
                { title: "Romanian deadlift", subtitle: "3 × 8", trailing: "value", value: "185 lb", icon: "fitness" },
                { title: "Walking lunge", subtitle: "3 × 12", trailing: "value", value: "40 lb", icon: "fitness" },
                { title: "Hanging knee raise", subtitle: "3 × 12", trailing: "value", value: "BW", icon: "timer" },
              ],
            },
          ],
        },
        {
          id: "log",
          title: "Log",
          blocks: [
            {
              type: "chips",
              items: ["All", "Lower", "Upper", "Conditioning"],
              selected: 0,
            },
            {
              type: "list",
              items: [
                { title: "Thu · Lower A", subtitle: "Squat 225 × 5", trailing: "chevron", meta: "51 min" },
                { title: "Tue · Upper A", subtitle: "Bench 185 × 5", trailing: "chevron", meta: "47 min" },
                { title: "Sun · Conditioning", subtitle: "Row 5k", trailing: "chevron", meta: "22 min" },
                { title: "Fri · Lower B", subtitle: "Deadlift 315 × 3", trailing: "chevron", meta: "44 min" },
              ],
            },
          ],
        },
        {
          id: "body",
          title: "Body",
          blocks: [
            {
              type: "card",
              title: "Bodyweight",
              body: "178.4 lb this morning. Down 2.1 from four weeks ago — slow, which is the point.",
              meta: "Updated today",
              icon: "person",
              tone: "accent",
            },
            { type: "section", title: "Preferences" },
            {
              type: "toggle",
              label: "Rest timer",
              description: "Three minutes between main sets",
              on: true,
            },
            {
              type: "list",
              items: [
                { title: "Units", trailing: "value", value: "lb" },
                { title: "Bar weight", trailing: "value", value: "45 lb" },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "lumen",
    blurb: "A reading list that stays out of the way",
    spec: {
      name: "Lumen",
      packageName: "com.forge.lumen",
      tagline: "What you’re reading, and what comes next.",
      theme: { seed: "#5C5346", mode: "light" },
      nav: [
        { id: "home", label: "Now", icon: "book" },
        { id: "shelf", label: "Shelf", icon: "search" },
        { id: "notes", label: "Notes", icon: "edit" },
      ],
      screens: [
        {
          id: "home",
          title: "Lumen",
          subtitle: "Evening",
          fab: { icon: "add", label: "Add book" },
          blocks: [
            {
              type: "hero",
              kicker: "Currently reading",
              title: "A Pattern Language",
              subtitle: "Alexander, Ishikawa, Silverstein · page 214 of 1171",
            },
            {
              type: "progress",
              label: "Tonight’s goal",
              value: 0.35,
              caption: "12 pages · 20 minute sitting",
            },
            {
              type: "statRow",
              stats: [
                { label: "This year", value: "11" },
                { label: "Queue", value: "7" },
                { label: "Abandoned", value: "2" },
              ],
            },
            { type: "section", title: "Up next" },
            {
              type: "list",
              items: [
                { title: "The Living Mountain", subtitle: "Nan Shepherd", trailing: "chevron", icon: "book" },
                { title: "How Buildings Learn", subtitle: "Stewart Brand", trailing: "chevron", icon: "book" },
                { title: "In Praise of Shadows", subtitle: "Jun’ichirō Tanizaki", trailing: "chevron", icon: "book" },
              ],
            },
          ],
        },
        {
          id: "shelf",
          title: "Shelf",
          blocks: [
            { type: "search", placeholder: "Title or author" },
            {
              type: "chips",
              items: ["All", "Reading", "Queue", "Finished"],
              selected: 1,
            },
            {
              type: "list",
              items: [
                { title: "A Pattern Language", subtitle: "Architecture", trailing: "value", value: "18%" },
                { title: "The Living Mountain", subtitle: "Landscape", trailing: "value", value: "Queue" },
                { title: "Four Thousand Weeks", subtitle: "Time", trailing: "value", value: "Done" },
                { title: "The Overstory", subtitle: "Fiction", trailing: "value", value: "Done" },
              ],
            },
          ],
        },
        {
          id: "notes",
          title: "Notes",
          blocks: [
            {
              type: "quote",
              text: "A building or a town will only be alive to the extent that it is made by the people in it.",
              attribution: "A Pattern Language · 14",
            },
            { type: "section", title: "Captures" },
            {
              type: "card",
              title: "Alcoves",
              body: "Every public room needs a pocket of smaller scale — a window seat, a nook — or people won’t linger.",
              meta: "Pattern 179",
              icon: "edit",
            },
            {
              type: "button",
              label: "New note",
              variant: "tonal",
            },
          ],
        },
      ],
    },
  },
];

export const EXAMPLE_PROMPTS = [
  "A quiet habit tracker for morning stretching",
  "Neighborhood tool library with borrow and return",
  "Home wine tastings with a cellar notebook",
  "A kid chore board with weekly stars",
];
