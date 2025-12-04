# Storybook Integration Guide

This guide explains how to use Storybook with your React Native component library.

## 🚀 Getting Started

### Installation

First, install dependencies:

```bash
cd storybook
pnpm install
```

### Running Storybook

#### iOS
```bash
pnpm run storybook:ios
```

#### Android
```bash
pnpm run storybook:android
```

#### General
```bash
pnpm run storybook
```

## 📁 Project Structure

```
storybook/
├── .storybook/              # Storybook configuration
│   ├── index.tsx           # Storybook UI initialization
│   ├── main.ts             # Main configuration
│   └── preview.tsx         # Global decorators and parameters
├── components/             # Your stories
│   ├── Card.stories.tsx
│   ├── ThemeProvider.stories.tsx
│   └── CardWithTheme.stories.tsx
├── App.jsx                 # App entry point
├── index.js                # Root entry point
└── package.json
```

## ✍️ Writing Stories

### Basic Story Structure

```typescript
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { YourComponent } from '../../src/components/YourComponent';

const meta: Meta<typeof YourComponent> = {
  title: 'Components/YourComponent',
  component: YourComponent,
  argTypes: {
    // Define controls for your props
    propName: {
      control: 'text',
      description: 'Description of the prop',
    },
  },
};

export default meta;

type Story = StoryObj<typeof YourComponent>;

export const Default: Story = {
  args: {
    propName: 'value',
  },
};
```

### Using ThemeProvider in Stories

All stories automatically have access to ThemeProvider through the global decorator. You can use the `useTheme` hook in your components:

```typescript
import { useTheme } from '../../src/providers/ThemeProvider';

const YourComponent = () => {
  const { theme, changeTheme } = useTheme();
  // Your component logic
};
```

### Theme Toolbar

The Storybook UI includes a theme switcher toolbar with three options:
- ☀️ Light
- 🌙 Dark
- 📱 System

## 📚 Available Stories

### ThemeProvider Stories
Located at `components/ThemeProvider.stories.tsx`

Demonstrates:
- Light theme
- Dark theme
- System theme
- Theme change callbacks

### Card Stories
Located at `components/Card.stories.tsx`

Demonstrates:
- Basic card
- Card with image
- Card with stats
- Custom styled card
- Minimal card
- Nested cards

### Card with Theme Integration
Located at `components/CardWithTheme.stories.tsx`

Demonstrates:
- Interactive theme switching
- Cards that adapt to theme
- Real-world usage example

## 🎨 Global Decorators

The preview configuration includes a global `withThemeProvider` decorator that:
1. Wraps all stories with ThemeProvider
2. Adds padding for better visualization
3. Syncs with the theme toolbar

## 🔧 Configuration

### Main Configuration (`main.ts`)
- Defines story locations
- Configures addons

### Preview Configuration (`preview.tsx`)
- Global decorators
- Global parameters
- Theme toolbar configuration

## 📝 Best Practices

1. **Organize by Category**: Use the `title` field to organize stories
   - `Components/` for UI components
   - `Providers/` for context providers
   - `Examples/` for integration examples

2. **Provide Multiple Variants**: Show different states and use cases

3. **Use Controls**: Add `argTypes` to make stories interactive

4. **Document Props**: Add descriptions to help users understand

5. **Theme Awareness**: Test components in both light and dark themes

## 🐛 Troubleshooting

### Metro bundler issues
If you encounter bundling errors, try:
```bash
rm -rf node_modules .expo
pnpm install
```

### Storybook not loading
Ensure `STORYBOOK_ENABLED` is set:
```bash
cross-env STORYBOOK_ENABLED='true' expo start --ios
```

### TypeScript errors
Make sure your tsconfig.json includes the parent `src` directory:
```json
{
  "include": [
    "**/*.ts",
    "**/*.tsx",
    "../src/**/*"
  ]
}
```

## 🔗 Linking to Parent Package

The storybook app imports components from the parent package:
```typescript
import { Card } from '../../src/components/Card/Card';
import { ThemeProvider } from '../../src/providers/ThemeProvider';
```

This allows you to:
- Test components as you develop them
- See real-time changes
- Validate the component API

## 📦 Adding New Stories

1. Create a new `.stories.tsx` file in `components/`
2. Import your component from `../../src/`
3. Define the meta object with title and component
4. Export story variants
5. The story will automatically appear in Storybook

Example:
```typescript
// components/Button.stories.tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../src/components/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    title: 'Click me',
    variant: 'primary',
  },
};
```

## 🎯 Goals

This Storybook setup helps you:
- ✅ Develop components in isolation
- ✅ Test theme integration
- ✅ Document component APIs
- ✅ Validate responsive behavior
- ✅ Share components with team members
- ✅ Catch visual regressions

## 🤝 Contributing

When adding new components to the library:
1. Create the component in `../src/components/`
2. Create corresponding stories in `storybook/components/`
3. Test in both light and dark themes
4. Document props and usage

