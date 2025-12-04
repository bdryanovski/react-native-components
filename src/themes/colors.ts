export const colors = {
  // ----- BRAND COLORS -----
  primary: {
    50: '#F0F7FF',
    100: '#D9E9FF',
    200: '#B3D3FF',
    300: '#8DBDFF',
    400: '#66A7FF',
    500: '#3F91FF', // main brand color
    600: '#2376E6',
    700: '#1658B3',
    800: '#0A3A80',
    900: '#001D4D',
  },

  secondary: {
    50: '#F5F5FF',
    100: '#E6E4FF',
    200: '#C8C4FF',
    300: '#AAA3FF',
    400: '#8C82FF',
    500: '#6E61FF', // accent / complementary
    600: '#554ACC',
    700: '#3D3499',
    800: '#251E66',
    900: '#100A33',
  },

  // ----- STATUS COLORS -----
  success: {
    50: '#EBFDF3',
    100: '#C8F9DF',
    200: '#A3F3C6',
    300: '#7DEDAE',
    400: '#57E796',
    500: '#32D880', // success default
    600: '#28B56A',
    700: '#1E9254',
    800: '#146F3E',
    900: '#0A4C28',
  },

  warning: {
    50: '#FFFAEA',
    100: '#FFF2C2',
    200: '#FFE08A',
    300: '#FFCE52',
    400: '#FFBC1A',
    500: '#F5A000', // warning default
    600: '#CC8300',
    700: '#A36600',
    800: '#7A4A00',
    900: '#523000',
  },

  danger: {
    50: '#FFF5F5',
    100: '#FFE0E0',
    200: '#FFB8B8',
    300: '#FF8A8A',
    400: '#FF5C5C',
    500: '#FF2E2E', // danger default
    600: '#CC2323',
    700: '#991A1A',
    800: '#661212',
    900: '#330909',
  },

  error: {
    50: '#FFF4F2',
    100: '#FFE3DE',
    200: '#FFC0B8',
    300: '#FF9A8E',
    400: '#FF6B5C',
    500: '#F04438', // common red error
    600: '#D92D20',
    700: '#B42318',
    800: '#912018',
    900: '#7A271A',
  },

  // ----- DISABLED -----
  disabled: {
    bg: '#E5E7EB',
    text: '#9CA3AF',
    border: '#D1D5DB',
  },

  // ----- NEUTRALS -----
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },

  // ----- BACKGROUND -----
  background: {
    primary: '#FFFFFF',
    secondary: '#F7F7F8',
    tertiary: '#EFEFF1',
    disabled: '#E5E7EB',
  },

  // ----- TEXT -----
  text: {
    primary: '#111827',
    secondary: '#4B5563',
    muted: '#6B7280',
    inverted: '#FFFFFF',
  },

  // ----- BLACK & WHITE -----
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
} as const;

export type ColorToken = typeof colors;
