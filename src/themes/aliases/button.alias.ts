/**
 * Component Aliases - Button
 *
 * Semantic tokens for button components.
 * These reference design tokens and provide meaningful names for component styling.
 */

import type { ColorTokens } from '../tokens/colors.token';
import type { RadiusTokens } from '../tokens/radius.token';
import type { SpacingTokens } from '../tokens/spacing.token';

export type ButtonAliases = {
  // Primary variant
  primary: {
    backgroundColor: string;
    textColor: string;
    borderColor: string;
    hoverBackgroundColor: string;
    activeBackgroundColor: string;
    disabledBackgroundColor: string;
    disabledTextColor: string;
  };

  // Secondary variant
  secondary: {
    backgroundColor: string;
    textColor: string;
    borderColor: string;
    hoverBackgroundColor: string;
    activeBackgroundColor: string;
    disabledBackgroundColor: string;
    disabledTextColor: string;
  };

  // Danger variant
  danger: {
    backgroundColor: string;
    textColor: string;
    borderColor: string;
    hoverBackgroundColor: string;
    activeBackgroundColor: string;
    disabledBackgroundColor: string;
    disabledTextColor: string;
  };

  // Ghost variant
  ghost: {
    backgroundColor: string;
    textColor: string;
    borderColor: string;
    hoverBackgroundColor: string;
    activeBackgroundColor: string;
    disabledBackgroundColor: string;
    disabledTextColor: string;
  };

  // Sizing
  sizes: {
    small: {
      paddingVertical: number;
      paddingHorizontal: number;
      fontSize: number;
      lineHeight: number;
    };
    medium: {
      paddingVertical: number;
      paddingHorizontal: number;
      fontSize: number;
      lineHeight: number;
    };
    large: {
      paddingVertical: number;
      paddingHorizontal: number;
      fontSize: number;
      lineHeight: number;
    };
  };

  // Common properties
  borderRadius: number;
  borderWidth: number;
};

/**
 * Default button aliases that reference design tokens
 */
export const createButtonAliases = (tokens: {
  color: ColorTokens;
  spacing: SpacingTokens;
  radius: RadiusTokens;
}): ButtonAliases => ({
  primary: {
    backgroundColor: tokens.color.primary[500],
    textColor: tokens.color.white,
    borderColor: tokens.color.primary[500],
    hoverBackgroundColor: tokens.color.primary[600],
    activeBackgroundColor: tokens.color.primary[700],
    disabledBackgroundColor: tokens.color.gray[300],
    disabledTextColor: tokens.color.gray[500],
  },

  secondary: {
    backgroundColor: tokens.color.gray[600],
    textColor: tokens.color.white,
    borderColor: tokens.color.gray[600],
    hoverBackgroundColor: tokens.color.gray[700],
    activeBackgroundColor: tokens.color.gray[800],
    disabledBackgroundColor: tokens.color.gray[300],
    disabledTextColor: tokens.color.gray[500],
  },

  danger: {
    backgroundColor: tokens.color.danger[500],
    textColor: tokens.color.white,
    borderColor: tokens.color.danger[500],
    hoverBackgroundColor: tokens.color.danger[600],
    activeBackgroundColor: tokens.color.danger[700],
    disabledBackgroundColor: tokens.color.gray[300],
    disabledTextColor: tokens.color.gray[500],
  },

  ghost: {
    backgroundColor: tokens.color.transparent,
    textColor: tokens.color.primary[500],
    borderColor: tokens.color.primary[500],
    hoverBackgroundColor: tokens.color.primary[50],
    activeBackgroundColor: tokens.color.primary[100],
    disabledBackgroundColor: tokens.color.transparent,
    disabledTextColor: tokens.color.gray[400],
  },

  sizes: {
    small: {
      paddingVertical: tokens.spacing.sm,
      paddingHorizontal: tokens.spacing.lg,
      fontSize: 14,
      lineHeight: 18,
    },
    medium: {
      paddingVertical: tokens.spacing.md,
      paddingHorizontal: tokens.spacing.xl,
      fontSize: 16,
      lineHeight: 20,
    },
    large: {
      paddingVertical: tokens.spacing.lg,
      paddingHorizontal: tokens.spacing['2xl'],
      fontSize: 18,
      lineHeight: 24,
    },
  },

  borderRadius: tokens.radius.md,
  borderWidth: 1,
});
