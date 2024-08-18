import React from "react";

import { StarRating } from "@/components/reviews";
import { IProduct } from "@/types";
import ProductDetailActions from "./ProductActions/ProductDetailActions";
import ProductDescription from "./ProductDescription";
import ProductInfo from "./ProductInfo";
import ProductPrice from "./ProductPrice";

interface ProductDetailsProps {
  productData: IProduct;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ productData }) => (
  <div className="flex-1 flex flex-col gap-3">
    <p className="text-wrap heading-1">{productData.title}</p>
    <div className="flex gap-2 items-center">
      <p>{productData.rating}</p>
      <StarRating rating={productData.rating} />
      <p>{productData.reviews.length} ratings</p>
    </div>
    <div className="separator" />
    <ProductPrice
      discount={productData.discountPercentage}
      price={productData.price}
    />
    <div className="separator" />
    <ProductInfo productData={productData} />
    <div className="separator" />
    <ProductDescription description={productData.description || ""} />

    <ProductDetailActions productData={productData} />
  </div>
);

export default ProductDetails;
