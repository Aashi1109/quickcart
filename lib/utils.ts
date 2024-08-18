import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const mapCurrencyCodesToLabels = (conversionRates: [string: string]) => {
  for (const [key, value] of Object.entries(conversionRates)) {
  }
};

export const capitalize = (value: string) =>
  value.slice(0, 1).toUpperCase() + value.slice(1);

export const jnstringify = (value: any): string => JSON.stringify(value);

export const jnparse = (value: any): any => JSON.parse(value);
