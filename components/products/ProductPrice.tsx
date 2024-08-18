import React from "react";

interface ProductPriceProps {
  discount: number;
  price: number;
}

const ProductPrice: React.FC<ProductPriceProps> = ({ discount, price }) => (
  <div className="flex items-end gap-2">
    <p className="text-red-600 font-light tracking-wide">-{discount}</p>
    <div className="flex-center gap-0">
      <p className="text-sm self-start">$</p>
      <p className="heading-1">{price}</p>
    </div>
  </div>
);

export default ProductPrice;
