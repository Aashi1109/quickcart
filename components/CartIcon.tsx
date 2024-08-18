"use client";

import { useAppState } from "@/hooks";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

const CartIcon: React.FC = () => {
  const { state } = useAppState();

  const productCount = state.cart.products.length;

  return (
    <Link className="relative mr-0 last:md:mr-4 hidden sm:block" href={"/cart"}>
      <ShoppingCart className="text-2xl" />
      {productCount > 0 && (
        <span className="absolute top-[-10px] right-[-10px] bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
          {productCount}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;
