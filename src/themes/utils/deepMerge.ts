/**
 * Theme Utilities - Deep Merge
 *
 * Utility functions for deep merging theme configurations.
 * This allows partial theme overrides while keeping defaults.
 */

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

/**
 * Deep merge two objects, with the second object overriding the first
 * @param target - The target object (defaults)
 * @param source - The source object (overrides)
 * @returns Merged object
 */
export function deepMerge<T extends Record<string, any>>(
  target: T,
  source: DeepPartial<T> | undefined
): T {
  if (!source) return target;

  const output = { ...target };

  for (const key in source) {
    const sourceValue = source[key];
    const targetValue = target[key];

    if (sourceValue === undefined) {
      continue;
    }

    // If both are objects (but not arrays), merge recursively
    if (
      isObject(sourceValue) &&
      isObject(targetValue) &&
      !Array.isArray(sourceValue) &&
      !Array.isArray(targetValue)
    ) {
      output[key] = deepMerge(targetValue as any, sourceValue as any);
    } else {
      // Otherwise, override with source value
      output[key] = sourceValue as any;
    }
  }

  return output;
}

/**
 * Check if value is a plain object
 */
function isObject(value: any): value is Record<string, any> {
  return value !== null && typeof value === 'object';
}

export type { DeepPartial };

