# key-suites-cloudflare DESIGN.md

> Auto-generated design system — reverse-engineered via static analysis by skillui.
> Frameworks: Tailwind CSS 4.2.1 + React 19.2.6 + Next.js 16.2.6
> Colors: 20 · Fonts: 1 · Components: 24
> Icon library: not detected · State: not detected
> Primary theme: dark · Dark mode toggle: no · Motion: expressive

---

## 1. Visual Theme & Atmosphere

This is a **dark-themed** interface with a neutral tone. Depth is expressed through layered shadows and subtle surface color variation. Typography uses **sans-serif** throughout — a clean, modern choice that maintains consistency. Spacing follows a **4px base grid** (compact density), with scale: 2, 4, 6, 8, 10, 12, 14, 16px. Motion is expressive — spring physics, layout animations, and staggered reveals are part of the visual language.

---

## 2. Color Palette & Roles

| Token | Hex | Role | Use |
|---|---|---|---|
| footer-background | `#050c0b` | background | Page background, darkest surface |
| menu-panel-background | `#ffffff` | surface | Card and panel backgrounds |
| surface | `#000000` | surface | Card and panel backgrounds |
| text-primary | `#eef2f1` | text-primary | Headings and body text |
| text-muted | `#454d4b` | text-muted | Captions, placeholders, secondary info |
| border | `#52706b` | border | Dividers, card borders, outlines |
| danger | `#e52429` | danger | Error states, destructive actions |
| success | `#25d366` | success | Success states, positive indicators |
| warning | `#fff8e7` | warning | Warning states, caution indicators |
| info | `#13b7c4` | info | Informational highlights |
| unknown | `#071c1c` | unknown | Palette color |
| unknown | `#79827f` | unknown | Palette color |
| focus-color | `#19c6cc` | unknown | Palette color |
| unknown | `#93a09d` | unknown | Palette color |
| muted | `#666e6c` | unknown | Palette color |
| unknown | `#d8c980` | unknown | Palette color |
| unknown | `#b91c20` | unknown | Palette color |
| unknown | `#65541e` | unknown | Palette color |
| unknown | `#c7d4d1` | unknown | Palette color |
| unknown | `#d9eeea` | unknown | Palette color |

### CSS Variable Tokens

```css
--muted: #68727a;
--footer-background: #080c0c;
--hero-background: #171c1b;
--card-image-ratio: 4/5;
--card-gap: 28px;
--menu-panel-background: #f7faf9;
```


---

## 3. Typography Rules

**Font Stack:**
- **sans-serif** — Heading 1, Heading 2, Body, Caption

| Role | Font | Size | Weight |
|---|---|---|---|
| Heading 1 | sans-serif | 25px | 700 |
| Heading 2 | sans-serif | 24px | 700 |
| Body | sans-serif | clamp(22px,1.8vw,29px) | 400 |
| Caption | sans-serif | 11px | 400 |

**Typographic Rules:**
- Use **sans-serif** for all text — do not mix font families
- Maintain consistent hierarchy: no more than 3-4 font sizes per screen
- Headings use bold (600-700), body uses regular (400)
- Line height: 1.5 for body text, 1.2 for headings
- Use color and opacity for secondary hierarchy, not additional font sizes


---

## 4. Component Stylings

### Layout (12)

**Footer** — `components/Footer.tsx`

**Header** — `components/Header.tsx`

**Page** — `app/alojamientos/page.tsx`

**Page** — `app/alojamientos/[slug]/page.tsx`
- Props: `slug`
- Key Styles: `group-page`

```tsx
{ slug }
```

**Page** — `app/contacto/page.tsx`

**Page** — `app/espectaculos/page.tsx`

**Page** — `app/granada/page.tsx`

**Layout** — `app/layout.tsx`
- Props: `subsets`, `variable`

```tsx
// Indica a navegadores y lectores de pantalla que el contenido está en español.
    <html lang="es">
      {/* Activa la variable de la fuente y mantiene cabecera y pie en todas las páginas. */}
      <body className={`${manrope.variable} ${editorial.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
```

*...and 4 more layout components.*

### Navigation (5)

**ComingSoonPage** — `components/ComingSoonPage.tsx`

**Link** — `components/Link.tsx`

**MobileMenu** — `components/MobileMenu.tsx`
- Variants: `Tab`
- Props: `preventScroll`
- State: useState, useRef

**PropertyCard** — `components/PropertyCard.tsx`

**PropertyGroupCard** — `components/PropertyGroupCard.tsx`
- Key Styles: `group-card`

### Typography (1)

**TextLines** — `components/TextLines.tsx`

### Media (1)

**GalleryModal** — `components/GalleryModal.tsx`
- State: useState, useRef

### Other (5)

**HeroCarousel** — `components/HeroCarousel.tsx`
- Animation: framer-motion
- State: useState

**HomeIcon** — `components/HomeIcon.tsx`

**PhoneIcon** — `components/PhoneIcon.tsx`

**PropertyCatalog** — `components/PropertyCatalog.tsx`
- Variants: `Todos`
- Key Styles: `filter-bar`
- State: useState

**ReviewNotice** — `components/ReviewNotice.tsx`



---

## 5. Layout Principles

- **Base spacing unit:** 4px
- **Spacing scale:** 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24
- **Border radius:** 2px, 3px, 6px, 10px, 11px, 12px, 14px, 15px, 16px, 18px, 19px, 20px, 22px, 24px, 24px 48px 24px 24px, 26px, 26px 64px 26px 26px, 28px 72px 28px 28px, 28px, 30px, clamp(28px,4vw,60px) clamp(28px,9vw,150px) clamp(28px,4vw,60px) clamp(28px,4vw,60px), inherit, 28px 68px 28px 28px, 30px 80px 30px 30px, 34px 100px 34px 34px, 40px 130px 40px 40px, 40px, 42px 150px 42px 42px, 44px, 48px, 48px 140px 48px 48px, 48% 52% 42% 58%, 50px 180px 50px 50px, 52% 48% 36% 64%, 999px
- **Max content width:** 1400px
- **Container:** Tailwind `container` class with responsive padding

**Spacing as Meaning:**
| Spacing | Use |
|---|---|
| 4-8px | Tight: related items within a group |
| 12-16px | Medium: between groups |
| 24-32px | Wide: between sections |
| 48px+ | Vast: major section breaks |


---

## 6. Depth & Elevation

### Raised — cards, buttons, interactive elements

- `var(--header-shadow)`
- `var(--menu-shadow)`
- `var(--floating-shadow)`

### Overlay — full-screen overlays, top-level dialogs

- `0 10px 28px rgba(17,25,29,.08)`
- `0 26px 70px rgba(0,0,0,.35)`
- `0 20px 48px rgba(17,25,29,.12)`

### Z-Index Scale

`0, 1, 2, 3, 4, 35, 90, 160, 900, 1000`



---

## 7. Animation & Motion

This project uses **expressive motion**. Animations are an integral part of the experience.

### Framer Motion Patterns

```tsx
// Standard enter animation
<motion.div
  initial={{ opacity: 0, y: 8 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3, ease: "easeOut" }}
/>

// List stagger
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } }
}
const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 }
}
```

### CSS Animations

- `@keyframes gallery-swipe-in`
- `@keyframes catalog-in`

### Animated Components

- **HeroCarousel**: framer-motion

### Motion Guidelines

- Duration: 150-300ms for micro-interactions, 300-500ms for page transitions
- Easing: `ease-out` for enters, `ease-in` for exits
- Always respect `prefers-reduced-motion`


---

## 8. Do's and Don'ts

### Do's

- Use `#050c0b` as the primary page background
- Use **sans-serif** for all UI text
- Follow the **4px** spacing grid for all margins, padding, and gaps
- Use the defined shadow tokens for elevation — see Section 6
- Use border-radius from the scale: 2px, 3px, 6px, 10px, 11px
- Reuse existing components from Section 4 before creating new ones

### Don'ts

- Don't introduce colors outside this palette — extend the design tokens first
- Don't mix font families — use sans-serif consistently
- Don't use arbitrary spacing values — stick to multiples of 4px
- Don't create custom box-shadow values outside the system tokens
- Don't use arbitrary border-radius values — pick from the defined scale
- Don't duplicate component patterns — check Section 4 first
- Don't use backdrop-blur or blur effects

### Anti-Patterns (detected from codebase)

- No blur or backdrop-blur effects
- No zebra striping on tables/lists


---

## 9. Responsive Behavior

No breakpoints detected. Consider adding responsive breakpoints to the design system.

---

## 10. Agent Prompt Guide

Use these as starting points when building new UI:

### Build a Card

```
Background: #ffffff
Border: 1px solid #52706b
Radius: 28px 72px 28px 28px
Padding: 16px
Font: sans-serif
Use shadow tokens from Section 6.
```

### Build a Button

```
Primary: bg var(--accent), text white
Ghost: bg transparent, border #52706b
Padding: 8px 16px
Radius: 28px 72px 28px 28px
Hover: opacity 0.9 or lighter shade
Focus: ring with var(--accent)
```

### Build a Page Layout

```
Background: #050c0b
Max-width: 1400px, centered
Grid: 4px base
Responsive: mobile-first, breakpoints from Section 9
```

### Build a Stats Card

```
Surface: #ffffff
Label: #454d4b (muted, 12px, uppercase)
Value: #eef2f1 (primary, 24-32px, bold)
Status: use success/warning/danger from Section 2
```

### Build a Form

```
Input bg: #050c0b
Input border: 1px solid #52706b
Focus: border-color var(--accent)
Label: #454d4b 12px
Spacing: 16px between fields
Radius: 28px 72px 28px 28px
```

### General Component

```
1. Read DESIGN.md Sections 2-6 for tokens
2. Colors: only from palette
3. Font: sans-serif, type scale from Section 3
4. Spacing: 4px grid
5. Components: match patterns from Section 4
6. Elevation: shadow tokens
```
