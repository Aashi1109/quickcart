// utils/cartUtils.ts

import { IAppState, ICartTotals } from "@/types";

/**
 * Checks if a product is already in the cart.
 * @param cart - The cart object containing an array of products.
 * @param productId - The ID of the product to check.
 * @returns True if the product is in the cart, false otherwise.
 */
export const isProductInCart = (
  cart: IAppState["cart"],
  productId: number
): boolean => {
  return cart.products.some((product) => product.id === productId);
};

export const getNumberOfProductsInCart = (cart: IAppState["cart"]) => {
  return cart.products.length;
};

export const getTotalAmountDiscountInCart = (
  cart: IAppState["cart"]
): ICartTotals => {
  return cart.products.reduce(
    (acc, product) => {
      const discountAmount = (product.price * product.discountPercentage) / 100;
      acc.originalTotal += product.price * product.quantity;
      acc.discountedTotal +=
        (product.price - discountAmount) * product.quantity;
      return acc;
    },
    { originalTotal: 0, discountedTotal: 0 }
  );
};
