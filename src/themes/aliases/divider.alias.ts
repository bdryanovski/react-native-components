/**
 * Component Aliases - Divider
 *
 * Semantic tokens for divider components.
 */

import type { ColorTokens } from '../tokens/colors.token';
import type { SpacingTokens } from '../tokens/spacing.token';

export type DividerAliases = {
  color: string;
  thickness: number;
  marginVertical: number;
  marginHorizontal: number;
};

/**
 * Default divider aliases that reference design tokens
 */
export const createDividerAliases = (tokens: {
  color: ColorTokens;
  spacing: SpacingTokens;
}): DividerAliases => ({
  color: tokens.color.gray[200],
  thickness: 1,
  marginVertical: tokens.spacing.md,
  marginHorizontal: tokens.spacing.none,
});

