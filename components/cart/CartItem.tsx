import React from "react";
import CartProduct from "./CartProduct";
import CartQuantity from "./CartQuantity";
import { useAppState } from "@/hooks";
import { ICartProduct } from "@/types";

const CartItem = ({
  product,
  index,
}: {
  product: ICartProduct;
  index: number;
}) => {
  const { dispatch } = useAppState();

  return (
    <tr className="">
      <td>#{index + 1}</td>
      <CartProduct product={product} />
      <td>${product.price}</td>
      <CartQuantity product={product} dispatch={dispatch} />
      <td>
        <p className="font-medium">
          ${(product.price * product.quantity).toFixed(2)}
        </p>
      </td>
    </tr>
  );
};

export default CartItem;
