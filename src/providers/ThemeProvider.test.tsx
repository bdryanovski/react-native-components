import { act, renderHook, waitFor } from '@testing-library/react-native';
import React from 'react';
import { useColorScheme as useDeviceColorScheme } from 'react-native';
import { ThemeProvider, useTheme } from './ThemeProvider';

// Mock react-native's useColorScheme hook
jest.mock('react-native', () => ({
  useColorScheme: jest.fn(),
}));

const mockedUseDeviceColorScheme = useDeviceColorScheme as jest.MockedFunction<
  typeof useDeviceColorScheme
>;

describe('ThemeProvider', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockedUseDeviceColorScheme.mockReturnValue('light');
  });

  describe('useTheme hook', () => {
    it('should throw error when used outside ThemeProvider', () => {
      // Suppress console.error for this test
      const originalError = console.error;
      console.error = jest.fn();

      expect(() => {
        renderHook(() => useTheme());
      }).toThrow('useTheme must be used within a ThemeProvider');

      console.error = originalError;
    });

    it('should return theme context when used inside ThemeProvider', () => {
      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <ThemeProvider>{children}</ThemeProvider>
      );

      const { result } = renderHook(() => useTheme(), { wrapper });

      expect(result.current).toHaveProperty('theme');
      expect(result.current).toHaveProperty('changeTheme');
    });
  });

  describe('ThemeProvider component', () => {
    it('should use defaultTheme when no theme prop is provided and device is in light mode', () => {
      mockedUseDeviceColorScheme.mockReturnValue('light');

      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <ThemeProvider defaultTheme="light">{children}</ThemeProvider>
      );

      const { result } = renderHook(() => useTheme(), { wrapper });

      expect(result.current.theme).toBe('light');
    });

    it('should use defaultTheme even when device is in dark mode', () => {
      mockedUseDeviceColorScheme.mockReturnValue('dark');

      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <ThemeProvider>{children}</ThemeProvider>
      );

      const { result } = renderHook(() => useTheme(), { wrapper });

      // defaultTheme is 'light' by default, so it should use 'light' even though device is 'dark'
      expect(result.current.theme).toBe('light');
    });

    it('should use provided theme prop over device color scheme', () => {
      mockedUseDeviceColorScheme.mockReturnValue('dark');

      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <ThemeProvider theme="light">{children}</ThemeProvider>
      );

      const { result } = renderHook(() => useTheme(), { wrapper });

      expect(result.current.theme).toBe('light');
    });

    it('should use custom defaultTheme when provided', () => {
      mockedUseDeviceColorScheme.mockReturnValue('light');

      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
      );

      const { result } = renderHook(() => useTheme(), { wrapper });

      expect(result.current.theme).toBe('dark');
    });

    it('should call onThemeChange when theme prop is provided', async () => {
      const onThemeChange = jest.fn();

      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <ThemeProvider theme="light" onThemeChange={onThemeChange}>
          {children}
        </ThemeProvider>
      );

      renderHook(() => useTheme(), { wrapper });

      await waitFor(() => {
        expect(onThemeChange).toHaveBeenCalledWith('light');
      });
    });

    it('should not call onThemeChange when no theme prop is provided', () => {
      const onThemeChange = jest.fn();

      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <ThemeProvider onThemeChange={onThemeChange}>{children}</ThemeProvider>
      );

      renderHook(() => useTheme(), { wrapper });

      // onThemeChange should not be called when theme prop is not provided
      expect(onThemeChange).not.toHaveBeenCalled();
    });
  });

  describe('changeTheme function', () => {
    it('should change theme to dark', () => {
      mockedUseDeviceColorScheme.mockReturnValue('light');

      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <ThemeProvider defaultTheme="light">{children}</ThemeProvider>
      );

      const { result } = renderHook(() => useTheme(), { wrapper });

      expect(result.current.theme).toBe('light');

      act(() => {
        result.current.changeTheme('dark');
      });

      expect(result.current.theme).toBe('dark');
    });

    it('should change theme to light', () => {
      mockedUseDeviceColorScheme.mockReturnValue('dark');

      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
      );

      const { result } = renderHook(() => useTheme(), { wrapper });

      expect(result.current.theme).toBe('dark');

      act(() => {
        result.current.changeTheme('light');
      });

      expect(result.current.theme).toBe('light');
    });

    it('should use device color scheme when theme is set to "system"', () => {
      mockedUseDeviceColorScheme.mockReturnValue('dark');

      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <ThemeProvider defaultTheme="light">{children}</ThemeProvider>
      );

      const { result } = renderHook(() => useTheme(), { wrapper });

      expect(result.current.theme).toBe('light');

      act(() => {
        result.current.changeTheme('system');
      });

      expect(result.current.theme).toBe('dark');
    });

    it('should switch to light theme when system theme is set and device is in light mode', () => {
      mockedUseDeviceColorScheme.mockReturnValue('light');

      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
      );

      const { result } = renderHook(() => useTheme(), { wrapper });

      expect(result.current.theme).toBe('dark');

      act(() => {
        result.current.changeTheme('system');
      });

      expect(result.current.theme).toBe('light');
    });

    it('should handle multiple theme changes', () => {
      mockedUseDeviceColorScheme.mockReturnValue('light');

      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <ThemeProvider defaultTheme="light">{children}</ThemeProvider>
      );

      const { result } = renderHook(() => useTheme(), { wrapper });

      expect(result.current.theme).toBe('light');

      act(() => {
        result.current.changeTheme('dark');
      });
      expect(result.current.theme).toBe('dark');

      act(() => {
        result.current.changeTheme('light');
      });
      expect(result.current.theme).toBe('light');

      act(() => {
        result.current.changeTheme('system');
      });
      expect(result.current.theme).toBe('light');
    });

    it('should respect device color scheme when changing to system theme', () => {
      // Mock device as dark initially
      mockedUseDeviceColorScheme.mockReturnValue('dark');

      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <ThemeProvider defaultTheme="light">{children}</ThemeProvider>
      );

      const { result } = renderHook(() => useTheme(), { wrapper });

      // Initially should be light (from defaultTheme)
      expect(result.current.theme).toBe('light');

      // Change to system should use device color scheme (dark)
      act(() => {
        result.current.changeTheme('system');
      });

      expect(result.current.theme).toBe('dark');
    });

    it('should update system theme when device color scheme is light', () => {
      // Mock device as light
      mockedUseDeviceColorScheme.mockReturnValue('light');

      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
      );

      const { result } = renderHook(() => useTheme(), { wrapper });

      // Initially should be dark (from defaultTheme)
      expect(result.current.theme).toBe('dark');

      // Change to system should use device color scheme (light)
      act(() => {
        result.current.changeTheme('system');
      });

      expect(result.current.theme).toBe('light');
    });
  });

  describe('edge cases', () => {
    it('should handle undefined device color scheme', () => {
      mockedUseDeviceColorScheme.mockReturnValue(undefined);

      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <ThemeProvider defaultTheme="light">{children}</ThemeProvider>
      );

      const { result } = renderHook(() => useTheme(), { wrapper });

      expect(result.current.theme).toBe('light');
    });

    it('should handle null device color scheme', () => {
      mockedUseDeviceColorScheme.mockReturnValue(null);

      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
      );

      const { result } = renderHook(() => useTheme(), { wrapper });

      expect(result.current.theme).toBe('dark');
    });

    it('should maintain theme stability with same changeTheme callback reference', () => {
      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <ThemeProvider defaultTheme="light">{children}</ThemeProvider>
      );

      const { result, rerender } = renderHook(() => useTheme(), { wrapper });

      const initialChangeTheme = result.current.changeTheme;

      rerender({});

      // changeTheme should maintain reference stability due to useCallback
      expect(result.current.changeTheme).toBe(initialChangeTheme);
    });
  });

  describe('integration tests', () => {
    it('should work with nested providers', () => {
      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <ThemeProvider defaultTheme="light">
          <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
        </ThemeProvider>
      );

      const { result } = renderHook(() => useTheme(), { wrapper });

      // Should use the innermost provider
      expect(result.current.theme).toBe('dark');
    });

    it('should maintain theme state across re-renders', () => {
      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <ThemeProvider defaultTheme="light">{children}</ThemeProvider>
      );

      const { result, rerender } = renderHook(() => useTheme(), { wrapper });

      act(() => {
        result.current.changeTheme('dark');
      });
      expect(result.current.theme).toBe('dark');

      rerender({});
      expect(result.current.theme).toBe('dark');
    });
  });
});
