"use client";

import { useAppState } from "@/hooks";
import { Heart } from "lucide-react";
import Link from "next/link";

const WishList = () => {
  const { state } = useAppState();

  const likedProductCount = state.likedProducts.length;

  return (
    <Link className="relative mr-0 last:md:mr-4" href={"/liked-products"}>
      <Heart className="text-2xl" />
      {likedProductCount > 0 && (
        <span className="absolute top-[-10px] right-[-10px] bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
          {likedProductCount}
        </span>
      )}
    </Link>
  );
};

export default WishList;
