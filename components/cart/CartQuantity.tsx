import { updateQuantity } from "@/context/appAction";
import { cn } from "@/lib/utils";
import { ICartProduct } from "@/types";
import { Minus, Plus } from "lucide-react";
import React from "react";

const CartQuantity = ({
  product,
  dispatch,
}: {
  product: ICartProduct;
  dispatch: any;
}) => {
  return (
    <td>
      <div className="flex gap-1">
        <button
          className="w-6 h-6 text-center border-2 border-solid border-gray-500 rounded-md"
          onClick={() => {
            updateQuantity(dispatch, product.id, -1);
          }}
          disabled={product.quantity === 1}
        >
          <Minus
            className={cn("w-5 h-5 text-gray-600", {
              "text-gray-400": product.quantity === 1,
            })}
          />
        </button>
        <div className="w-4 h-6 flex-center">{product.quantity}</div>
        <button
          className="w-6 h-6 text-center border-2 border-solid border-gray-500 rounded-md"
          onClick={() => {
            updateQuantity(dispatch, product.id, 1);
          }}
          disabled={product.quantity === product.stock}
        >
          <Plus
            className={cn("w-5 h-5 text-gray-600", {
              "text-gray-400": product.quantity === product.stock,
            })}
          />
        </button>
      </div>
    </td>
  );
};

export default CartQuantity;
