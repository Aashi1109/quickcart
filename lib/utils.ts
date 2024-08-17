import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const mapCurrencyCodesToLabels = (conversionRates: [string: string]) => {
  for (const [key, value] of Object.entries(conversionRates)) {
  }
};
