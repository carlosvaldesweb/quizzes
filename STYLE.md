# Quizzes — Style Guide

Guide for maintaining visual consistency across landing pages and the internal application.

---

## 1. Foundation

### Font

- **Family:** `Outfit` (sans-serif), configured in `app/assets/css/main.css`
- **Sizes:** Use Tailwind's scale (`text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, etc.)
- **Monospace:** Use `font-mono` for access codes and data values

### Border Radius

- **Global:** `--ui-radius: 0.5rem` (applied by Nuxt UI)
- **Cards:** `rounded-2xl` for main containers, `rounded-xl` for inner elements, `rounded-lg` for small elements
- **Pills/Badges:** `rounded-full`

### Spacing

- Generous whitespace between sections
- Inner card padding: `p-5` or `p-6`
- Inner element spacing: `space-y-2` to `space-y-3`
- Section gap between text and mockup: `gap-8 lg:gap-12`

---

## 2. Color Palette

| Role | Color | Tailwind | Usage |
|---|---|---|---|
| **Primary** | Violet | `violet-500` | Brand identity, primary buttons, accents, active states |
| **Secondary** | Amber | `amber-500` | Gamification, badges, energy, warnings |
| **Success** | Emerald | `emerald-500` | Correct answers, completed states, positive indicators |
| **Error** | Rose | `rose-500` | Incorrect answers, alerts, destructive actions |
| **Info** | Blue | `blue-500` | Tips, contextual help, informational notifications |
| **Neutral** | Slate | `slate-700` | Text, backgrounds, borders |

### Color Application Rules

- **Never hardcode text/background colors for general UI** — Nuxt UI handles light/dark mode automatically.
- **Use opacity-based colors** for backgrounds that must work in both modes: `bg-violet-500/10`, `bg-emerald-500/20`.
- **Semantic color pairs:**
  - Light text on colored bg: `text-violet-600 dark:text-violet-400`
  - Muted text: `text-muted` (Nuxt UI class)
- **Borders in dark mode:** Use `border-white/10 dark:border-slate-700/30` for subtle dividers inside glass cards.

### Pro Feature Indicator

- Icon: `i-lucide-sparkles`
- Badge style: `bg-violet-500/15 text-violet-600 dark:text-violet-400 rounded-full px-2 py-0.5 text-[9px] font-semibold`
- In text: append `✦ Pro` to the title

---

## 3. Glassmorphism

Two utility classes defined in `main.css`:

### `.glass`

Solid glassmorphism for inner elements, inputs, pills, and secondary cards.

```css
@apply bg-white dark:bg-neutral-900/80 backdrop-blur-sm border border-neutral-200 dark:border-slate-700/30;
```

**Use for:** Inner cards, option pills, input-like elements, progress bar backgrounds, small containers.

```html
<div class="glass rounded-xl p-3">Content</div>
```

### `.glass-strong`

Translucent glassmorphism for main/outer cards.

```css
@apply bg-white/30 dark:bg-neutral-800/40 backdrop-blur-sm border border-neutral-100 dark:border-neutral-700;
```

**Use for:** Main mockup cards, feature showcase cards, "How it works" step cards.

```html
<div class="glass-strong rounded-2xl p-6 shadow-2xl">Content</div>
```

### Nesting Pattern

Always nest `.glass` inside `.glass-strong`:

```html
<div class="glass-strong rounded-2xl p-5 shadow-2xl">
  <div class="glass rounded-xl p-3 mb-3">Inner content</div>
  <div class="glass rounded-lg p-2">Smaller element</div>
</div>
```

---

## 4. Gradient Mesh Background

Animated blurred gradient blobs that float behind section content.

### `.gradient-mesh`

Full-strength mesh. Use on hero and prominent sections.

```html
<UPageSection class="gradient-mesh">...</UPageSection>
```

### `.gradient-mesh-subtle`

Reduced opacity. Use on alternating sections for visual rhythm.

```html
<UPageSection class="gradient-mesh-subtle gradient-mesh">...</UPageSection>
```

**Note:** Always combine both classes — `.gradient-mesh-subtle` modifies `.gradient-mesh`'s pseudo-elements.

---

## 5. Gradient Text

### Class: `.text-gradient-primary`

Violet-to-amber gradient for accent text (stats, key numbers).

```html
<div class="text-lg font-bold text-gradient-primary">85%</div>
```

### Component: `<SharedGradientText>`

Wrapper component for gradient text in section titles. Highlights one or two key words.

```html
<template #title>
  Crea sesiones y estudien
  <SharedGradientText>juntos</SharedGradientText>
</template>
```

---

## 6. Hover Effects

### `.card-hover-lift`

Subtle lift + shadow on hover for interactive cards.

```html
<div class="glass-strong rounded-2xl card-hover-lift">Card content</div>
```

Effect: `translateY(-4px)` + enhanced shadow on hover. Adapts to dark mode.

### Rotate-on-hover (Mockups)

Static tilt that straightens on hover. Used on mockup containers.

```html
<div class="transform rotate-2 hover:rotate-0 transition-transform duration-500">
  Mockup content
</div>
```

Alternate between `rotate-1`, `rotate-2`, `-rotate-1`, `-rotate-2` across mockups for variety.

---

## 7. Animations

All animations are defined in `main.css`. Use CSS classes — no JavaScript needed.

### Flashcard 3D Flip

Creates a card that flips to show front/back content on a 6-second cycle.

```html
<div class="perspective-container">
  <div class="flashcard-inner relative" style="min-height: 220px">
    <div class="flashcard-face absolute inset-0">Front content</div>
    <div class="flashcard-back absolute inset-0">Back content</div>
  </div>
</div>
```

**Required structure:**
- `.perspective-container` — Sets `perspective: 1000px`
- `.flashcard-inner` — Sets `transform-style: preserve-3d` + animation
- `.flashcard-face` — Front (hidden when rotated past 90deg)
- `.flashcard-back` — Back (pre-rotated 180deg, visible when flipped)

### Card Deck Cycling

3 stacked cards that cycle through front/middle/back positions every 9 seconds.

```html
<div class="relative" style="min-height: 230px">
  <div class="absolute inset-x-0 top-0 glass-strong rounded-2xl p-4 card-deck-1">Card 1</div>
  <div class="absolute inset-x-0 top-0 glass-strong rounded-2xl p-4 card-deck-2">Card 2</div>
  <div class="absolute inset-x-0 top-0 glass-strong rounded-2xl p-4 card-deck-3">Card 3</div>
</div>
```

**Positions cycle:** front (z:30, scale:1, rotate:0) -> middle (z:20, scale:0.95, rotate:3deg) -> back (z:10, scale:0.9, rotate:6deg).

**Important:** Container must have `min-height` since cards are absolutely positioned.

### Theme Preview Cycling

3 overlapping elements that crossfade on a 9-second cycle. Used for theme picker previews.

```html
<div class="relative" style="min-height: 125px">
  <div class="theme-cycle-1 absolute inset-0">Preview 1 (visible 0-3s)</div>
  <div class="theme-cycle-2 absolute inset-0">Preview 2 (visible 3-6s)</div>
  <div class="theme-cycle-3 absolute inset-0">Preview 3 (visible 6-9s)</div>
</div>
```

Can also be used on check marks, labels, or any element that should cycle visibility.

### Pulse Live Indicator

Pulsing dot for "active" or "live" states.

```html
<div class="w-2 h-2 rounded-full bg-emerald-500 pulse-live" />
```

### Fade-in-up (Staggered)

Entrance animation for lists. Combine with `stagger-N` for sequential reveals.

```html
<div class="animate-fade-in-up stagger-1">Item 1</div>
<div class="animate-fade-in-up stagger-2">Item 2</div>
<div class="animate-fade-in-up stagger-3">Item 3</div>
```

Delays: `stagger-1` (0.1s) through `stagger-6` (0.6s).

---

## 8. Floating Badges

Small glass pills positioned outside mockup cards to highlight features.

### Pattern

```html
<div class="relative"> <!-- Mockup container -->
  <div class="glass-strong rounded-2xl p-5">Main card content</div>

  <!-- Top right badge -->
  <div class="absolute -top-4 -right-4 glass rounded-xl p-3 shadow-lg transform -rotate-6 z-10">
    <div class="flex items-center gap-2">
      <UIcon name="i-lucide-icon-name" class="text-violet-500 text-lg" />
      <span class="text-xs font-medium">Label</span>
    </div>
  </div>

  <!-- Bottom left badge -->
  <div class="absolute -bottom-3 -left-3 glass rounded-xl p-3 shadow-lg transform rotate-3 z-10">
    <div class="flex items-center gap-2">
      <UIcon name="i-lucide-icon-name" class="text-emerald-500 text-lg" />
      <span class="text-xs font-medium">Label</span>
    </div>
  </div>
</div>
```

### Rules

- **Always use `z-10`** on floating badges so they appear above the card.
- **Top-right badge:** `-top-4 -right-4`, `-rotate-6`
- **Bottom-left badge:** `-bottom-3 -left-3`, `rotate-3`
- **Icon colors:** Use the section's accent color (violet, emerald, amber).
- **For animated containers** (deck cycling, flashcard flip): Use `z-30` or `z-40` on badges since animated cards use higher z-indices.

---

## 9. Mockup Design Patterns

### Card Header

Icon + title + subtitle, separated by a border.

```html
<div class="flex items-center gap-3 mb-4 pb-3 border-b border-white/10 dark:border-slate-700/30">
  <div class="w-9 h-9 rounded-xl bg-violet-500/20 flex items-center justify-center">
    <UIcon name="i-lucide-icon" class="text-violet-500 text-lg" />
  </div>
  <div>
    <div class="font-semibold text-sm">Title</div>
    <div class="text-xs text-muted">Subtitle</div>
  </div>
</div>
```

### Mini Metrics Grid

For displaying key numbers in mockups.

```html
<div class="grid grid-cols-3 gap-2 mb-3">
  <div class="glass rounded-lg p-2 text-center">
    <div class="text-lg font-bold text-gradient-primary">12</div>
    <div class="text-[10px] text-muted">Label</div>
  </div>
  <!-- repeat -->
</div>
```

### Answer Options (2-column)

```html
<div class="grid grid-cols-2 gap-1.5">
  <!-- Correct answer -->
  <div class="rounded-md py-1.5 text-center text-[9px] font-medium bg-violet-500 text-white shadow-sm shadow-violet-500/25">
    Answer A
  </div>
  <!-- Neutral answer -->
  <div class="glass rounded-md py-1.5 text-center text-[9px] font-medium">
    Answer B
  </div>
</div>
```

### Progress Bars

```html
<div class="w-full h-1.5 rounded-full bg-white/20 dark:bg-slate-700/30">
  <div class="h-1.5 rounded-full bg-emerald-500" style="width: 85%" />
</div>
```

For gradient progress: `bg-linear-to-r from-violet-500 to-emerald-500`.

### Settings Grid (2-column)

For displaying configuration key-value pairs.

```html
<div class="grid grid-cols-2 gap-2">
  <div class="glass rounded-lg p-2">
    <div class="text-[9px] text-muted mb-0.5">Label</div>
    <div class="text-xs font-semibold">Value</div>
  </div>
  <!-- repeat -->
</div>
```

### Access Code Display

```html
<div class="glass rounded-xl p-3 text-center">
  <div class="text-[9px] text-muted mb-1.5">Codigo de acceso</div>
  <div class="font-mono text-2xl font-bold tracking-widest text-gradient-primary">
    QUIZ-7X3K
  </div>
</div>
```

---

## 10. Section Layout

### Standard Section (UPageSection)

```html
<UPageSection headline="Headline text">
  <template #title>
    Title with <SharedGradientText>accent</SharedGradientText>
  </template>
  <!-- Content -->
</UPageSection>
```

### Two-Column Feature Section (Text + Mockup)

```html
<UPageSection headline="Headline">
  <template #title>
    Title <SharedGradientText>word</SharedGradientText>
  </template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
    <div>
      <p class="text-lg text-muted mb-6">Description paragraph.</p>
      <div class="space-y-3">
        <!-- Feature items with icon + title + desc -->
      </div>
    </div>
    <div class="relative">
      <MockupComponent />
    </div>
  </div>
</UPageSection>
```

### Reversed Layout (Mockup Left, Text Right)

Add `lg:order-last` to the text column and `lg:order-first` to the mockup column. Use with `gradient-mesh-subtle gradient-mesh` for visual alternation.

```html
<UPageSection headline="Headline" class="gradient-mesh-subtle gradient-mesh">
  <template #title>...</template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
    <div class="lg:order-last">Text content</div>
    <div class="relative lg:order-first">
      <MockupComponent />
    </div>
  </div>
</UPageSection>
```

### Visual Rhythm

Alternate sections between:
1. **Normal** (text left, mockup right) — no gradient mesh
2. **Reversed** (mockup left, text right) — with `gradient-mesh-subtle gradient-mesh`

### Feature Item Pattern

```html
<div class="flex items-start gap-3">
  <div class="w-8 h-8 rounded-lg bg-violet-500/10 dark:bg-violet-500/20 flex items-center justify-center shrink-0 mt-0.5">
    <UIcon :name="item.icon" class="text-violet-500" />
  </div>
  <div>
    <div class="text-sm font-medium">{{ item.title }}</div>
    <div class="text-sm text-muted">{{ item.desc }}</div>
  </div>
</div>
```

---

## 11. Responsive Design

- **Section mockups:** Visible on all screen sizes. On mobile they stack above or below the text column.
- **Hero mockups:** Hidden on mobile with `hidden lg:block` — only the hero section hides its mockup on small screens.
- **Grids:** Use `grid-cols-1 lg:grid-cols-2` for feature sections.
- **Mobile-first:** All layouts stack vertically on mobile.

---

## 12. Dark Mode

- **Automatic:** Nuxt UI handles component colors for light/dark.
- **Glass classes:** Already include dark mode variants.
- **Custom colors:** Always use opacity-based colors (`bg-violet-500/20`) or paired variants (`text-emerald-600 dark:text-emerald-400`).
- **Borders inside glass:** Use `border-white/10 dark:border-slate-700/30`.
- **Background tracks:** Use `bg-white/20 dark:bg-slate-700/30` for progress bar backgrounds.
- **Never hardcode** white or black backgrounds on UI elements.

---

## 13. Vue Transitions

Two custom transitions available for Vue's `<Transition>` component:

### `expand`

Vertical expand/collapse with fade.

```html
<Transition name="expand">
  <div v-if="show">Content</div>
</Transition>
```

### `slide-up`

Slide up from bottom with fade.

```html
<Transition name="slide-up">
  <div v-if="show">Content</div>
</Transition>
```

---

## 14. Iconography

- **Set:** Lucide Icons via Nuxt UI (`i-lucide-*`)
- **Common icons:**
  - Pro/Premium: `i-lucide-sparkles`
  - Quiz/Create: `i-lucide-file-plus-2`
  - Flashcards: `i-lucide-layers`
  - Practice: `i-lucide-target`
  - Sessions: `i-lucide-radio`
  - Timer: `i-lucide-timer`
  - Shuffle: `i-lucide-shuffle`
  - Results: `i-lucide-chart-column`
  - Share: `i-lucide-share-2`
  - Themes: `i-lucide-palette`
  - User: `i-lucide-user`
  - Check: `i-lucide-check-circle`
  - Trophy: `i-lucide-trophy`

---

## 15. Tailwind v4 Notes

- Use `bg-linear-to-r` instead of `bg-gradient-to-r` (Tailwind v4 canonical form).
- Use `bg-linear-to-br` instead of `bg-gradient-to-br`.

---

## Quick Reference

| What | Class/Pattern |
|---|---|
| Outer card | `glass-strong rounded-2xl p-5 shadow-2xl` |
| Inner card | `glass rounded-xl p-3` |
| Small element | `glass rounded-lg p-2` |
| Section gradient bg | `gradient-mesh-subtle gradient-mesh` |
| Accent text numbers | `text-gradient-primary` |
| Title accent word | `<SharedGradientText>word</SharedGradientText>` |
| Card with hover lift | `card-hover-lift` |
| Mockup tilt | `transform rotate-2 hover:rotate-0 transition-transform duration-500` |
| Floating badge (top-right) | `absolute -top-4 -right-4 glass rounded-xl p-3 shadow-lg transform -rotate-6 z-10` |
| Floating badge (bottom-left) | `absolute -bottom-3 -left-3 glass rounded-xl p-3 shadow-lg transform rotate-3 z-10` |
| Hide hero mockup on mobile | `hidden lg:block` (hero only) |
| Flashcard flip | `.perspective-container` > `.flashcard-inner` > `.flashcard-face` + `.flashcard-back` |
| Deck cycling (3 cards) | `.card-deck-1`, `.card-deck-2`, `.card-deck-3` on `absolute` cards |
| Theme crossfade (3 items) | `.theme-cycle-1`, `.theme-cycle-2`, `.theme-cycle-3` |
| Live pulse dot | `pulse-live` on a small rounded div |
| Staggered entrance | `animate-fade-in-up stagger-N` (N = 1 to 6) |
