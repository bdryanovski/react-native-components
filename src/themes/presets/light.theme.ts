/**
 * Light Theme Configuration
 *
 * The default light theme using design tokens and component aliases.
 */

import { designTokens } from '../tokens';
import { createComponentAliases } from '../aliases';
import type { Theme } from '../theme.types';

/**
 * Default light theme
 */
export const lightTheme: Theme = {
  tokens: designTokens,
  components: createComponentAliases(designTokens),
};

