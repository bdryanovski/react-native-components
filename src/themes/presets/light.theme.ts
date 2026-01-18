/**
 * Light Theme Configuration
 *
 * The default light theme using design tokens and component aliases.
 */

import { createComponentAliases } from '../aliases';
import type { Theme } from '../theme.types';
import { designTokens } from '../tokens';

/**
 * Default light theme
 */
export const lightTheme: Theme = {
  tokens: designTokens,
  components: createComponentAliases(designTokens),
};
