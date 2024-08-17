"use client";

import { CartInfo } from "@/components/cart";
import { useAppState } from "@/hooks";
import { getNumberOfProductsInCart } from "@/lib/cartUtils";

const Cart = () => {
  const { state } = useAppState();
  const productsInCart = getNumberOfProductsInCart(state.cart);

  return (
    <div className="flex flex-col gap-6 min-h-[40vh]">
      <p className="heading-1">
        Your cart {productsInCart !== 0 && `(${productsInCart} items)`}
      </p>

      {/* render all products if present */}
      <div className="flex-center overflow-auto flex-1">
        {productsInCart === 0 ? (
          <p>No products in cart yet.</p>
        ) : (
          <CartInfo cart={state.cart} />
        )}
      </div>
    </div>
  );
};

export default Cart;
