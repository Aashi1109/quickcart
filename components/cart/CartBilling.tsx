import { getTotalAmountDiscountInCart } from "@/lib/cartUtils";
import { IAppState } from "@/types";
import React from "react";

const CartBilling = ({ cart }: { cart: IAppState["cart"] }) => {
  const { originalTotal, discountedTotal } = getTotalAmountDiscountInCart(cart);
  const salesTax = originalTotal * 0.1;

  const grandTotal = discountedTotal + salesTax;

  console.log(cart.products);

  return (
    <div className="flex flex-col gap-4 w-80 self-center lg:self-end">
      <div className="flex-between">
        <p>Subtotal:</p>
        <p>${originalTotal.toFixed(2)}</p>
      </div>
      <div className="flex-between">
        <p>Sales tax:</p>
        <p>${salesTax.toFixed(2)}</p>
      </div>
      <div className="flex-between">
        <p>Discount:</p>
        <p>${(originalTotal - discountedTotal).toFixed(2)}</p>
      </div>
      <div className="flex-between  text-xl">
        <p>Grand Total:</p>
        <p>${grandTotal.toFixed(2)}</p>
      </div>

      <button type="button" className="button">
        Check out
      </button>
    </div>
  );
};

export default CartBilling;
