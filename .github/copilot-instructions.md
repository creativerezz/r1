# Copilot Instructions

## Project Overview

This is **Reza UI** - a modern shadcn custom component registry built with Next.js 15, React 19, and Tailwind CSS v4. It enables distribution of 19+ reusable, accessible React components, hooks, libraries, and pages via the `shadcn` CLI.

**Author:** Reza Jafar  
**Website:** https://rezajafar.com  
**GitHub:** https://github.com/creativerezz  
**LinkedIn:** https://linkedin.com/in/rezajafar

## Architecture

### Registry System
- **Source of truth**: `registry.json` defines all registry items with metadata
- **Registry name**: `reza-ui` (formerly "acme")
- **Build process**: `pnpm registry:build` (runs `shadcn build`) generates static JSON files in `public/r/[name].json`
- **Registry items** are organized under `registry/new-york/` following shadcn's "new-york" style variant

### Application Structure
- **Header**: Sticky header with brand logo, social links (GitHub, LinkedIn, Website), and theme toggle
- **Sidebar**: Left sidebar with component categories and quick install guide (hidden on mobile)
- **Footer**: Attribution and links to creator's profiles
- **Theme**: Dark/light mode support via `next-themes` with system preference detection

### Registry Item Types
Registry items use typed file paths with specific `type` field values:
- `registry:component` - React components (`.tsx` files)
- `registry:page` - Next.js pages with optional `target` field for installation path
- `registry:hook` - Custom React hooks
- `registry:lib` - Utility libraries and helper functions

Example from `registry.json`:
```json
{
  "name": "complex-component",
  "files": [
    { "path": "registry/new-york/blocks/complex-component/page.tsx", "type": "registry:page", "target": "app/pokemon/page.tsx" },
    { "path": "registry/new-york/blocks/complex-component/components/pokemon-card.tsx", "type": "registry:component" }
  ]
}
```

### Directory Structure
- `registry/new-york/blocks/[component-name]/` - Complex components with nested structure (components/, hooks/, lib/)
- `registry/new-york/ui/` - Primitive UI components (button, card, input, etc.)
- `components/` - App-specific components (e.g., `open-in-v0-button.tsx`)
- `app/` - Next.js app router (demo page showcasing registry items)

## Key Patterns

### Component Development
1. **Use `cn()` utility** from `@/lib/utils` for conditional Tailwind classes (combines `clsx` + `tailwind-merge`)
2. **Variant-based styling** with `class-variance-authority` (see `button.tsx`, `badge.tsx`, `alert.tsx` for CVA pattern)
3. **Radix UI primitives** (@radix-ui/react-*) for accessible base components
4. **Path aliases** configured in `tsconfig.json` and `components.json`:
   - `@/components` → components/
   - `@/lib` → lib/
   - `@/registry/new-york/...` → registry/new-york/...

### Available UI Components
**Form Components:**
- `button` - CVA variants (default/outline/ghost/destructive/link), sizes (sm/default/lg/icon)
- `input` - Text input with focus states
- `textarea` - Multi-line text input
- `label` - Accessible form labels (Radix UI)
- `checkbox` - Checkbox with Radix UI primitives
- `radio-group` - Radio button groups
- `switch` - Toggle switch component
- `select` - Dropdown select with Radix UI

**Layout Components:**
- `card` - Composition pattern with Header/Title/Description/Action/Content/Footer
- `dialog` - Modal dialogs with Radix UI
- `sheet` - Slide-over panels (CVA side variants: left/right/top/bottom)
- `tabs` - Tabbed interface with Radix UI
- `accordion` - Collapsible sections
- `alert` - Notification banners (CVA variants: default/destructive)

**Data Display:**
- `table` - Responsive table with Header/Body/Footer/Row/Cell composition
- `badge` - Status indicators (CVA variants: default/secondary/destructive/outline)
- `avatar` - User avatars with fallback support

**Interactive:**
- `dropdown-menu` - Context menus with checkboxes, radio items, sub-menus
- `sonner` - Toast notifications (uses sonner library)

### Form Validation Pattern
Use Zod for client-side validation (see `example-form.tsx`):
- Define schema with `z.object()`
- Use `safeParse()` for validation in form submit handler
- Extract field errors with `error.flatten().fieldErrors`
- Show errors with `aria-invalid` and `aria-errormessage` attributes

### Server Components & Caching
- Use `cache()` from React for server-side data fetching (see `complex-component/page.tsx`)
- Pattern: `const getCachedFn = cache(originalFn)` before component definition

## Development Workflow

### Commands
- `pnpm dev` - Start dev server with Turbopack
- `pnpm registry:build` - Build registry JSON files (run after modifying `registry.json`)
- `pnpm build` - Production build
- `pnpm lint` - ESLint check

### Adding New Registry Items
1. Create component files under `registry/new-york/blocks/[name]/` or `registry/new-york/ui/[name].tsx`
2. Add entry to `registry.json` with:
   - `name`, `type` (registry:ui or registry:component), `title`, `description`
   - `files` array with paths and types
   - `dependencies` (npm packages) and `registryDependencies` (other registry items)
3. Run `pnpm registry:build` to generate `public/r/[name].json`
4. Items are consumable via `npx shadcn@latest add <registry-url> [name]`

### Component Types in Registry
- **registry:ui** - Primitive/base UI components (button, input, dialog, etc.)
- **registry:component** - Complex composite components and examples
- **registry:page** - Full page components (use `target` field for installation path)
- **registry:hook** - Custom React hooks
- **registry:lib** - Utility functions and helpers

### v0 Integration
Components include "Open in v0" button using v0's API:
- URL format: `https://v0.dev/chat/api/open?url={NEXT_PUBLIC_BASE_URL}/r/{name}.json`
- Requires `NEXT_PUBLIC_BASE_URL` environment variable

## Component Usage Patterns

### Composition Components (Card, Dialog, Sheet)
Follow composition pattern with sub-components:
```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content here</CardContent>
  <CardFooter>Footer actions</CardFooter>
</Card>
```

### Radix UI Controlled Components
Most interactive components use Radix UI primitives with controlled state:
```tsx
// Dialog example
<Dialog>
  <DialogTrigger asChild>
    <Button>Open</Button>
  </DialogTrigger>
  <DialogContent>...</DialogContent>
</Dialog>

// Select example
<Select>
  <SelectTrigger>
    <SelectValue placeholder="..." />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="...">...</SelectItem>
  </SelectContent>
</Select>
```

### Toast Notifications
Use sonner for toast notifications - add `<Toaster />` to root layout:
```tsx
import { Toaster } from "@/registry/new-york/ui/sonner"
// In layout: <Toaster />
// Usage: import { toast } from "sonner"; toast("Message")
```

## Configuration Files
- `components.json` - shadcn configuration (style: "new-york", RSC enabled, Tailwind v4)
- `registry.json` - Registry metadata (name: "reza-ui", homepage: "https://rezajafar.com")
- `tsconfig.json` - Path aliases with `@/*` mapping to project root

## Theme System
- Uses `next-themes` for dark/light mode
- Theme toggle in site header with sun/moon icons
- System preference detection with `defaultTheme="system"`
- Smooth transitions disabled for instant mode switching
- CSS variables in `globals.css` for both light and dark modes

## Layout Components
- `SiteHeader` - Sticky header with brand, social links, and theme toggle
- `SiteFooter` - Footer with attribution and social links
- `AppSidebar` - Navigation sidebar with component categories
- `ThemeProvider` - Wraps app to enable theme switching
- `ThemeToggle` - Button component for switching between light/dark modes
