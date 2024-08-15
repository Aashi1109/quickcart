"use client";

import { CartInfo } from "@/components/cart";
import { useAppState } from "@/hooks";
import { getNumberOfProductsInCart } from "@/lib/cartUtils";

const Cart = () => {
  const { state } = useAppState();
  const productsInCart = getNumberOfProductsInCart(state.cart);

  return (
    <div className="flex flex-col gap-6 py-10">
      <p className="heading-1 text-center">Your cart({productsInCart} items)</p>

      {/* render all products if present */}
      <div className="flex-center overflow-auto">
        {productsInCart === 0 ? (
          <p>No products in cart</p>
        ) : (
          <CartInfo cart={state.cart} />
        )}
      </div>
    </div>
  );
};

export default Cart;
