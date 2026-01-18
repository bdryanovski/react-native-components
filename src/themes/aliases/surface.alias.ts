/**
 * Component Aliases - Surface
 *
 * Semantic tokens for surface components.
 */

import type { ColorTokens } from '../tokens/colors.token';
import type { RadiusTokens } from '../tokens/radius.token';

export type SurfaceAliases = {
  default: {
    backgroundColor: string;
  };
  secondary: {
    backgroundColor: string;
  };
  transparent: {
    backgroundColor: string;
  };
  borderRadius: number;
};

/**
 * Default surface aliases that reference design tokens
 */
export const createSurfaceAliases = (tokens: {
  color: ColorTokens;
  radius: RadiusTokens;
}): SurfaceAliases => ({
  default: {
    backgroundColor: tokens.color.white,
  },
  secondary: {
    backgroundColor: tokens.color.gray[50],
  },
  transparent: {
    backgroundColor: tokens.color.transparent,
  },
  borderRadius: tokens.radius.md,
});
