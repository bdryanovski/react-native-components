# ThemeProvider

Design to manage and provide theming capabilities to your application.

## Usage

```tsx
import { ThemeProvider } from '@dryanovski/react-native-components';

const App = () => {
  return (
    <ThemeProvider theme="dark">
      <YourAppComponents />
    </ThemeProvider>
  );
};
```

## Props

- `theme`: A string representing the theme to be applied (e.g., "light", "dark").
- `children`: The child components that will have access to the theme context.
