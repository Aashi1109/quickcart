import { Check, ShoppingCart } from "lucide-react";
import { IRenderProps } from "./types";

const CartButtonActionComponent = ({
  handleClick,
  isProductAddedToCart,
}: IRenderProps) => {
  return (
    <button
      type="button"
      className="flex-center gap-2 button"
      onClick={handleClick}
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
  );
};

export default CartButtonActionComponent;
