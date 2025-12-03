import React from 'react';
import type { ThemeProviderProps } from './types';

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return <>{children}</>;
};

export default ThemeProvider;
