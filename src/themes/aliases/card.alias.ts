/**
 * Component Aliases - Card
 *
 * Semantic tokens for card components.
 */

import type { ColorTokens } from '../tokens/colors.token';
import type { SpacingTokens } from '../tokens/spacing.token';
import type { RadiusTokens } from '../tokens/radius.token';
import type { ShadowTokens } from '../tokens/shadow.token';

export type CardAliases = {
  backgroundColor: string;
  borderColor: string;
  borderWidth: number;
  borderRadius: number;
  padding: number;
  shadow: {
    shadowColor: string;
    shadowOffset: { width: number; height: number };
    shadowOpacity: number;
    shadowRadius: number;
    elevation: number;
  };
};

/**
 * Default card aliases that reference design tokens
 */
export const createCardAliases = (tokens: {
  color: ColorTokens;
  spacing: SpacingTokens;
  radius: RadiusTokens;
  shadow: ShadowTokens;
}): CardAliases => ({
  backgroundColor: tokens.color.white,
  borderColor: tokens.color.gray[200],
  borderWidth: 1,
  borderRadius: tokens.radius.lg,
  padding: tokens.spacing.lg,
  shadow: tokens.shadow.sm,
});

