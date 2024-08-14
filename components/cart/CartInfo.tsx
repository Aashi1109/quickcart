import React from "react";
import CartBilling from "./CartBilling";
import CartTable from "./CartTable";
import { IAppState } from "@/types";

const CartInfo = ({ cart }: { cart: IAppState["cart"] }) => {
  return (
    <div className="w-full flex flex-col gap-6 ">
      <CartTable cartProducts={cart.products} />
      <CartBilling cart={cart} />
    </div>
  );
};

export default CartInfo;
