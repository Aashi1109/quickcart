"use server";

import { jnstringify } from "@/lib/utils";
import { Cart } from "@/models";
import { ICart } from "@/types";

export const updateOrCreateCart = async (userId: string, cartData: ICart) => {
  const existingCart = await Cart.findOne({ userId });
  const { products, originalTotal, discountedTotal } = cartData;

  if (!existingCart) {
    const newCart = await Cart.create({
      userId,
      products,
      originalTotal,
      discountedTotal,
    });

    return jnstringify(newCart);
  } else {
    existingCart.originalTotal = originalTotal;
    existingCart.discountedTotal = discountedTotal;
    existingCart.products = products;
    await existingCart?.save();
    return jnstringify(existingCart);
  }
};

export const getUserCartData = async (userId: string) => {
  const cartData = await Cart.findOne({ userId: userId });
  return jnstringify(cartData);
};
