"use client";

import { useAppState } from "@/hooks";
import { ProductList } from "../products";

const LikedProducts = () => {
  const {
    state: { likedProducts: products },
  } = useAppState();
  return products.length ? (
    <ProductList products={products} classes="flex-wrap" />
  ) : (
    <div className="flex-center flex-1">No liked products yet.</div>
  );
};

export default LikedProducts;
