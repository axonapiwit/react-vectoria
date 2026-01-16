# React Vectoria

[![npm version](https://img.shields.io/npm/v/react-vectoria.svg)](https://www.npmjs.com/package/react-vectoria)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

Modern React SVG icon library with CSS and Framer Motion animations. Tree-shakable, TypeScript-ready, and fully customizable.

## Features

- 🎨 **10+ Built-in Icons** - Ready-to-use SVG icons
- ⚡ **Tree-shakable** - Import only what you need
- 🎭 **CSS Animations** - 5 built-in animations (spin, pulse, bounce, shake, ping)
- 🎬 **Framer Motion Support** - Optional advanced animations
- 📦 **TypeScript** - Full type definitions included
- 🎯 **Customizable** - Size, color, and className props
- ♿ **Accessible** - ARIA labels and semantic HTML
- 🌳 **Zero Dependencies** - Except React (framer-motion optional)

## Installation

```bash
npm install react-vectoria
```

```bash
yarn add react-vectoria
```

```bash
pnpm add react-vectoria
```

## Quick Start

```tsx
import { ArrowRight, Check, Search } from 'react-vectoria'

function App() {
  return (
    <>
      <ArrowRight size={24} color="blue" />
      <Check size={20} color="green" />
      <Search size={32} />
    </>
  )
}
```

## Usage

### Basic Icons

```tsx
import { ArrowRight, ArrowLeft, Check, X, Plus, Minus, Search, Menu } from 'react-vectoria'

<ArrowRight size={24} color="blue" />
<ArrowLeft size={20} />
<Check size={32} color="green" />
<X size={24} color="red" />
<Plus size={20} />
<Minus size={20} />
<Search size={24} />
<Menu size={24} />
```

### CSS Animations

Import the CSS file and use the `animation` prop:

```tsx
import 'react-vectoria/styles.css'
import { ArrowRight } from 'react-vectoria'

<ArrowRight animation="spin" />
<ArrowRight animation="pulse" />
<ArrowRight animation="bounce" />
<ArrowRight animation="shake" />
<ArrowRight animation="ping" />
```

**Available animations:**
- `spin` - Continuous rotation
- `pulse` - Opacity fade in/out
- `bounce` - Vertical bounce
- `shake` - Horizontal shake
- `ping` - Scale and fade out

### Framer Motion

For advanced animations, use `AnimatedIcon` with Framer Motion:

```tsx
import { ArrowRight, Check } from 'react-vectoria'
import { AnimatedIcon } from 'react-vectoria/animated'

// Using built-in variants
<AnimatedIcon icon={ArrowRight} variant="hover" />
<AnimatedIcon icon={Check} variant="tap" />
<AnimatedIcon icon={ArrowRight} variant="loading" />

// Custom animations
<AnimatedIcon 
  icon={ArrowRight} 
  iconProps={{ size: 32 }}
  whileHover={{ scale: 1.2, rotate: 90 }}
  whileTap={{ scale: 0.9 }}
  transition={{ type: 'spring', stiffness: 300 }}
/>
```

**Note:** Install `framer-motion` as a peer dependency:

```bash
npm install framer-motion
```

## API Reference

### Icon Props

All icons accept these props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number \| string` | `24` | Icon size in pixels |
| `color` | `string` | `"currentColor"` | Icon color (supports CSS colors) |
| `animation` | `"spin" \| "pulse" \| "bounce" \| "shake" \| "ping"` | - | CSS animation type |
| `className` | `string` | - | Additional CSS classes |
| `aria-label` | `string` | - | Accessibility label |
| `...svgProps` | `SVGProps<SVGSVGElement>` | - | All standard SVG props |

### AnimatedIcon Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `IconComponent` | **required** | Icon component to animate |
| `iconProps` | `IconProps` | - | Props passed to the icon |
| `variant` | `"hover" \| "tap" \| "loading"` | - | Built-in animation variant |
| `...motionProps` | `HTMLMotionProps<'div'>` | - | All Framer Motion props |

### Built-in Variants

- `hover` - Scale up on hover, scale down on tap
- `tap` - Scale down on tap
- `loading` - Continuous rotation

## Available Icons

- **Arrows:** `ArrowRight`, `ArrowLeft`, `ArrowUp`, `ArrowDown`
- **Actions:** `Check`, `X`, `Plus`, `Minus`
- **UI:** `Search`, `Menu`

## TypeScript

Full TypeScript support with exported types:

```tsx
import type { IconProps, IconComponent, AnimationType } from 'react-vectoria'
import type { AnimatedIconProps } from 'react-vectoria/animated'

const MyIcon: IconComponent = ArrowRight
const animation: AnimationType = 'spin'
```

## Tree-shaking

React Vectoria supports tree-shaking. Import only the icons you need:

```tsx
// ✅ Good - Only imports ArrowRight
import { ArrowRight } from 'react-vectoria'

// ❌ Avoid - Imports all icons
import * as Icons from 'react-vectoria'
```

## Customization

### Custom Colors

```tsx
<ArrowRight color="#FF5733" />
<Check color="rgb(34, 197, 94)" />
<Search color="var(--primary-color)" />
```

### Custom Sizes

```tsx
<ArrowRight size={16} />
<ArrowRight size="2rem" />
<ArrowRight size="100%" />
```

### Custom Classes

```tsx
<ArrowRight className="my-custom-class" />
```

### Styling with CSS

```css
.my-icon {
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
}

.my-icon:hover {
  transform: scale(1.1);
}
```

## Examples

### Loading State

```tsx
import { ArrowRight } from 'react-vectoria'
import 'react-vectoria/styles.css'

<ArrowRight animation="spin" size={20} />
```

### Button with Icon

```tsx
import { ArrowRight } from 'react-vectoria'
import { AnimatedIcon } from 'react-vectoria/animated'

<button>
  Continue
  <AnimatedIcon icon={ArrowRight} iconProps={{ size: 16 }} variant="hover" />
</button>
```

### Search Input

```tsx
import { Search } from 'react-vectoria'

<div style={{ position: 'relative' }}>
  <Search 
    size={20} 
    style={{ position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)' }}
  />
  <input type="search" style={{ paddingLeft: 32 }} />
</div>
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © [Your Name](LICENSE)
