import { IAppState } from "@/types/context";

export const isProductLiked = (
  likedProducts: IAppState["likedProducts"],
  productId: number
) => likedProducts.some((prod) => prod.id === productId);

export function debounce(func: Function, delay = 500) {
  let timeoutId: number | undefined | NodeJS.Timeout;
  return (...args: any[]) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}
