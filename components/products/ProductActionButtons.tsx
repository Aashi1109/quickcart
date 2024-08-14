"use client";
import { addToCart, removeFromCart } from "@/context/appAction";
import { useAppState } from "@/hooks";
import { isProductInCart } from "@/lib/cartUtils";
import { IProduct } from "@/types";
import { Check, ShoppingCart } from "lucide-react";

const ProductActionButtons = ({ productData }: { productData: IProduct }) => {
  const { state, dispatch } = useAppState();

  const isProductAddedToCart = isProductInCart(state.cart, productData.id);

  const handleCartButtonAction = () => {
    if (isProductAddedToCart) {
      removeFromCart(dispatch, productData.id);
    } else {
      addToCart(dispatch, productData);
    }
  };

  return (
    <div className="flex-start gap-4 mb-6 lg:mb-0">
      <button
        type="button"
        className="flex-center gap-2 button"
        onClick={handleCartButtonAction}
      >
        {!isProductAddedToCart ? (
          <>
            <ShoppingCart className="w-4 h-4" /> Add to cart
          </>
        ) : (
          <>
            <Check className="w-4 h-4" /> Added to cart
          </>
        )}
      </button>
    </div>
  );
};

export default ProductActionButtons;
