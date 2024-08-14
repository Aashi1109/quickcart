import React from "react";

interface ProductDescriptionProps {
  description: string;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({
  description,
}) => (
  <div>
    <p>About this item</p>
    <p className="text-gray-500 text-sm">{description}</p>
  </div>
);

export default ProductDescription;
