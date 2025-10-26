# Reza UI - Component Registry

A modern, accessible component registry built with Next.js 15, React 19, Tailwind CSS v4, and Radix UI.

## 🎨 Features

- **19+ Production-Ready Components** - Accessible, customizable UI components
- **Dark Mode Support** - Built-in theme switching with system preference detection
- **Modern Stack** - Next.js 15, React 19, Tailwind CSS v4, TypeScript
- **Accessible** - ARIA compliant components built with Radix UI
- **shadcn CLI Compatible** - Easy installation via shadcn CLI
- **v0 Integration** - Direct import to v0.dev for AI editing

## 🚀 Quick Start

### Installation

Install components individually using the shadcn CLI:

```bash
npx shadcn@latest add https://rezajafar.com/r/registry.json [component-name]
```

### Examples

```bash
# Install a button component
npx shadcn@latest add https://rezajafar.com/r/registry.json button

# Install a dialog component
npx shadcn@latest add https://rezajafar.com/r/registry.json dialog

# Install an example block
npx shadcn@latest add https://rezajafar.com/r/registry.json table-example
```

## 📦 Available Components

### Form Components (8)
- `button` - Multi-variant button with CVA
- `input` - Form input with validation states
- `textarea` - Multi-line text input
- `label` - Accessible form labels
- `checkbox` - Checkbox with Radix UI
- `radio-group` - Radio button groups
- `switch` - Toggle switch
- `select` - Dropdown select

### Layout Components (6)
- `card` - Composition-based card
- `dialog` - Modal dialogs
- `sheet` - Slide-over panels
- `tabs` - Tabbed navigation
- `accordion` - Collapsible sections
- `alert` - Notification banners

### Data Display (3)
- `table` - Responsive data tables
- `badge` - Status badges
- `avatar` - User avatars

### Interactive (2)
- `dropdown-menu` - Context menus
- `sonner` - Toast notifications

## 🛠️ Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build the registry
pnpm registry:build

# Build for production
pnpm build
```

## 📁 Project Structure

```
├── app/                      # Next.js app directory
├── components/              # App-specific components
│   ├── theme-provider.tsx  # Dark mode provider
│   ├── theme-toggle.tsx    # Theme switcher
│   ├── site-header.tsx     # Header with navigation
│   ├── site-footer.tsx     # Footer with links
│   └── app-sidebar.tsx     # Sidebar navigation
├── registry/
│   └── new-york/
│       ├── ui/             # Base UI components
│       └── blocks/         # Example implementations
├── public/r/               # Built registry JSON files
└── registry.json           # Registry configuration
```

## 🎯 Component Categories

Components are organized into logical categories on the demo site:

- **Form Components** - Input controls and form elements
- **Layout** - Structural and container components
- **Data Display** - Components for showing data
- **Interactive** - Dynamic and interactive components

## 🌙 Dark Mode

The registry includes full dark mode support:

- System preference detection
- Manual theme toggle in header
- Smooth transitions
- CSS variables for theming

## 🔗 Links

- **Author**: Reza Jafar
- **Website**: [rezajafar.com](https://rezajafar.com)
- **GitHub**: [github.com/creativerezz](https://github.com/creativerezz)
- **LinkedIn**: [linkedin.com/in/rezajafar](https://linkedin.com/in/rezajafar)

## 📝 License

Feel free to use these components in your projects.

## 🙏 Credits

Built with:
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)

---

Built by [Reza Jafar](https://rezajafar.com)
