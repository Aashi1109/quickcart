import { ICartProduct, IProduct } from "@/types";
import Image from "next/image";
import React from "react";
import Badge from "../Badge";

const CartProduct = ({ product }: { product: ICartProduct }) => {
  return (
    <td className="flex gap-4 flex-start">
      <div className="w-20 h-20 flex-center flex-shrink-0 border border-gray-200 rounded-lg">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={80}
          height={50}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col items-start gap-2">
        <p>{product.title}</p>
        <Badge
          text={`${Math.floor(product.discountPercentage)}% off`}
          classes="border border-red-400 py-0"
        />
        <p className="text-sm font-light">&times;{product.quantity}</p>
      </div>
    </td>
  );
};

export default CartProduct;
