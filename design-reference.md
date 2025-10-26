# Reza UI - Design Reference Guide

This document defines the design system, layout patterns, and component usage guidelines for Reza UI. Follow these patterns to ensure consistency when scaling the registry with new pages and components.

---

## Table of Contents

1. [Layout System](#layout-system)
2. [Spacing System](#spacing-system)
3. [Breakpoints](#breakpoints)
4. [Color System](#color-system)
5. [Typography](#typography)
6. [Component Patterns](#component-patterns)
7. [Best Practices](#best-practices)

---

## Layout System

### Page Layout Component

**Always use `PageLayout`** for new pages to ensure consistent spacing and alignment across all screen sizes.

```tsx
import { PageLayout } from "@/components/page-layout"

export default function MyPage() {
  return (
    <PageLayout>
      <h1>Page Title</h1>
      <p>Content here...</p>
    </PageLayout>
  )
}
```

#### PageLayout Props

- `children: React.ReactNode` - Page content
- `className?: string` - Additional CSS classes for the container
- `showSidebar?: boolean` - Show/hide sidebar (default: `true`)
- `maxWidth?: string` - Container max-width (default: `"max-w-5xl"`)

#### What PageLayout Does

1. **Sidebar Integration** - Automatically includes `AppSidebar` (hidden on mobile, visible on `lg+`)
2. **Responsive Padding** - Applies `px-4 md:px-6` for consistent horizontal spacing
3. **Vertical Spacing** - Applies `py-8 md:py-12 lg:py-16` for breathing room
4. **Content Width** - Constrains content to `max-w-5xl` by default for optimal readability
5. **Alignment** - Ensures content aligns with header/footer across all breakpoints

### Header & Footer Alignment

The header and footer automatically align with the main content using the same offset pattern:

- **Mobile/Tablet** (`< lg`): Full-width with `px-4 md:px-6`
- **Desktop** (`lg+`): Offset by `lg:pl-64` to account for 256px sidebar width

```tsx
// Header/Footer Pattern (already implemented)
<div className="mx-auto flex h-14 w-full max-w-screen-2xl items-center px-4 md:px-6 lg:pl-64">
  {/* Content */}
</div>
```

### Sidebar Specifications

- **Width**: `w-64` (256px / 16rem)
- **Visibility**: `hidden lg:block` (hidden on mobile/tablet, visible on desktop)
- **Position**: `sticky top-14` (sticks below the 56px header)
- **Height**: `h-[calc(100vh-3.5rem)]` (full viewport minus header height)
- **Overflow**: `overflow-y-auto` (scrollable if content exceeds viewport)

---

## Spacing System

### Vertical Spacing

**Page-level spacing** (handled by `PageLayout`):
- Mobile: `py-8` (2rem / 32px)
- Tablet: `md:py-12` (3rem / 48px)
- Desktop: `lg:py-16` (4rem / 64px)

**Section spacing**:
- Between sections: `space-y-16` (4rem / 64px)
- Section header margin: `mb-6` (1.5rem / 24px)
- Component grid gap: `gap-8` (2rem / 32px)

### Horizontal Spacing

**Container padding** (handled by `PageLayout`):
- Mobile: `px-4` (1rem / 16px)
- Tablet+: `md:px-6` (1.5rem / 24px)

**Component internal spacing**:
- Card padding: `p-6` (1.5rem / 24px)
- Small gaps: `gap-3` or `gap-4`
- Medium gaps: `gap-6` or `gap-8`

### Scroll Offset for Anchor Links

Add `scroll-mt-24` to sections with IDs to prevent sticky header overlap:

```tsx
<section id="form" className="scroll-mt-24">
  {/* Content */}
</section>
```

---

## Breakpoints

Reza UI uses Tailwind's default breakpoints:

| Breakpoint | Min Width | Usage |
|------------|-----------|-------|
| `sm` | 640px | Small tablets |
| `md` | 768px | Tablets |
| `lg` | 1024px | **Sidebar appears** |
| `xl` | 1280px | Large desktops |
| `2xl` | 1536px | Extra-large screens |

### Key Breakpoint Behaviors

- **`< lg`**: Sidebar hidden, full-width content
- **`lg+`**: Sidebar visible (256px), content offset to the right

---

## Color System

Reza UI uses an OKLCH-based color system with semantic tokens for light and dark modes.

### Semantic Color Tokens

```css
/* Light Mode */
--background: oklch(1 0 0);           /* Pure white */
--foreground: oklch(0.145 0 0);       /* Near black */
--primary: oklch(0.205 0 0);          /* Dark gray */
--muted: oklch(0.97 0 0);             /* Light gray */
--border: oklch(0.922 0 0);           /* Border gray */

/* Dark Mode */
--background: oklch(0.145 0 0);       /* Near black */
--foreground: oklch(0.985 0 0);       /* Off-white */
--primary: oklch(0.922 0 0);          /* Light gray */
--muted: oklch(0.269 0 0);            /* Dark gray */
--border: oklch(1 0 0 / 10%);         /* Subtle border */
```

### Usage in Components

```tsx
// Use semantic class names
<div className="bg-background text-foreground">
<div className="border border-border">
<p className="text-muted-foreground">
<Button className="bg-primary text-primary-foreground">
```

---

## Typography

### Font Stack

- **Sans-serif**: Geist Sans (`--font-geist-sans`)
- **Monospace**: Geist Mono (`--font-geist-mono`)

### Heading Scale

```tsx
// Hero Title (H1)
<h1 className="text-4xl font-bold tracking-tight lg:text-5xl">

// Section Title (H2)
<h2 className="text-3xl font-bold tracking-tight">

// Component Title (H3)
<h3 className="font-semibold mb-1">

// Sidebar Section Header (H4)
<h4 className="mb-2 px-2 text-sm font-semibold text-foreground">
```

### Body Text

```tsx
// Large body (Hero description)
<p className="text-xl text-muted-foreground">

// Regular body (Component description)
<p className="text-sm text-muted-foreground">

// Code inline
<code className="relative rounded bg-muted px-3 py-1.5 text-sm font-mono">
```

---

## Component Patterns

### Section Structure

Use this pattern for all content sections:

```tsx
<section id="section-name" className="scroll-mt-24">
  <div className="flex items-center gap-3 mb-6">
    <Icon className="h-6 w-6 text-primary" />
    <h2 className="text-3xl font-bold tracking-tight">Section Title</h2>
  </div>
  <div className="grid gap-8">
    {/* Component cards */}
  </div>
</section>
```

### Component Card Structure

```tsx
<div className="flex flex-col gap-4 border rounded-lg p-6 relative">
  {/* Header */}
  <div className="flex items-center justify-between">
    <div>
      <h3 className="font-semibold mb-1">Component Name</h3>
      <p className="text-sm text-muted-foreground">
        Component description goes here.
      </p>
    </div>
    <OpenInV0Button name="component-name" className="w-fit" />
  </div>
  
  {/* Preview */}
  <div className="flex items-center justify-center min-h-[300px] relative">
    <ComponentExample />
  </div>
</div>
```

### Hero Section Pattern

```tsx
<div className="flex flex-col items-start gap-4 mb-12">
  <Badge variant="secondary">Badge Text</Badge>
  <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
    Page Title
  </h1>
  <p className="text-xl text-muted-foreground max-w-2xl">
    Description text that explains the purpose of the page.
  </p>
  {/* Optional CTA or code snippet */}
</div>
```

---

## Best Practices

### ✅ DO

1. **Always use `PageLayout`** for new pages
2. **Add `scroll-mt-24`** to sections with anchor IDs
3. **Use semantic color tokens** (`bg-background`, `text-foreground`, etc.)
4. **Follow the component card structure** for consistency
5. **Test on mobile, tablet, and desktop** breakpoints
6. **Use the `cn()` utility** for conditional classes
7. **Apply `max-w-2xl` or `max-w-5xl`** to constrain text width for readability

### ❌ DON'T

1. **Don't hardcode widths** that break responsive layouts
2. **Don't use arbitrary spacing** - stick to the spacing scale
3. **Don't forget dark mode** - test both themes
4. **Don't create custom layout wrappers** - use `PageLayout`
5. **Don't skip TypeScript types** - maintain type safety
6. **Don't use inline styles** - use Tailwind classes

---

## Creating a New Page

Follow these steps to add a new page that scales perfectly:

### 1. Create the Page File

```tsx
// app/my-new-page/page.tsx
import { PageLayout } from "@/components/page-layout"

export default function MyNewPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="flex flex-col items-start gap-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
          Page Title
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Page description
        </p>
      </div>

      {/* Content Sections */}
      <div className="space-y-16">
        <section id="section-1" className="scroll-mt-24">
          {/* Section content */}
        </section>
      </div>
    </PageLayout>
  )
}
```

### 2. Add Metadata (Optional)

```tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Page Title - Reza UI",
  description: "Page description",
}
```

### 3. Update Navigation (If Needed)

Add link to `components/app-sidebar.tsx` or `components/site-header.tsx`.

### 4. Test Responsiveness

- Mobile: `< 640px`
- Tablet: `768px - 1023px` (no sidebar)
- Desktop: `1024px+` (with sidebar)

---

## Layout Checklist

Before deploying a new page, verify:

- [ ] Uses `PageLayout` component
- [ ] Hero section follows the pattern
- [ ] Sections have `scroll-mt-24` for anchor links
- [ ] Tested on mobile, tablet, and desktop
- [ ] Dark mode looks correct
- [ ] No horizontal scrollbars on any breakpoint
- [ ] Content aligns with header and footer
- [ ] Typography scale is consistent
- [ ] Spacing matches the design system

---

## Resources

- **Tailwind CSS v4 Docs**: [tailwindcss.com](https://tailwindcss.com)
- **Radix UI Primitives**: [radix-ui.com](https://www.radix-ui.com)
- **Next.js 15 Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **shadcn/ui**: [ui.shadcn.com](https://ui.shadcn.com)

---

**Built by [Reza Jafar](https://rezajafar.com)** • Last updated: October 2025
