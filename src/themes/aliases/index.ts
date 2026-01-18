/**
 * Component Aliases - Entry Point
 *
 * Export all component aliases (semantic tokens).
 * These provide meaningful names for component styling and reference design tokens.
 */

export * from './button.alias';
export * from './card.alias';
export * from './surface.alias';
export * from './text.alias';
export * from './divider.alias';

import type { ButtonAliases } from './button.alias';
import type { CardAliases } from './card.alias';
import type { SurfaceAliases } from './surface.alias';
import type { TextAliases } from './text.alias';
import type { DividerAliases } from './divider.alias';

import { createButtonAliases } from './button.alias';
import { createCardAliases } from './card.alias';
import { createSurfaceAliases } from './surface.alias';
import { createTextAliases } from './text.alias';
import { createDividerAliases } from './divider.alias';

import type { DesignTokens } from '../tokens';

/**
 * All component aliases combined
 */
export type ComponentAliases = {
  button: ButtonAliases;
  card: CardAliases;
  surface: SurfaceAliases;
  text: TextAliases;
  divider: DividerAliases;
};

/**
 * Create all component aliases from design tokens
 */
export const createComponentAliases = (tokens: DesignTokens): ComponentAliases => ({
  button: createButtonAliases(tokens),
  card: createCardAliases(tokens),
  surface: createSurfaceAliases(tokens),
  text: createTextAliases(tokens),
  divider: createDividerAliases(tokens),
});

