/**
 * Component Aliases - Text
 *
 * Semantic tokens for text/typography components.
 */

import type { ColorTokens } from '../tokens/colors.token';
import type { TypographyTokens } from '../tokens/typography.token';

export type TextAliases = {
  primary: {
    color: string;
  };
  secondary: {
    color: string;
  };
  muted: {
    color: string;
  };
  inverted: {
    color: string;
  };
  success: {
    color: string;
  };
  warning: {
    color: string;
  };
  danger: {
    color: string;
  };
  error: {
    color: string;
  };
};

/**
 * Default text aliases that reference design tokens
 */
export const createTextAliases = (tokens: {
  color: ColorTokens;
  typography: TypographyTokens;
}): TextAliases => ({
  primary: {
    color: tokens.color.gray[900],
  },
  secondary: {
    color: tokens.color.gray[600],
  },
  muted: {
    color: tokens.color.gray[500],
  },
  inverted: {
    color: tokens.color.white,
  },
  success: {
    color: tokens.color.success[600],
  },
  warning: {
    color: tokens.color.warning[600],
  },
  danger: {
    color: tokens.color.danger[600],
  },
  error: {
    color: tokens.color.error[600],
  },
});
