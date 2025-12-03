import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merge Tailwind classes safely.
 * - clsx handles conditional classes
 * - tailwind-merge resolves class conflicts (e.g. px-2 vs px-4)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
