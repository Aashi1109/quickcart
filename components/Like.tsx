"use client";

import { toggleProductLike } from "@/context/appAction";
import { useAppState } from "@/hooks";
import { isProductLiked } from "@/lib/likeUtils";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import { useState } from "react";

const Like = ({ productId }: { productId: number }) => {
  const { state, dispatch } = useAppState();
  const isLiked = isProductLiked(state.likedProducts, productId);

  return (
    <Heart
      className={cn("h-5 w-5 text-gray-600 cursor-pointer like-button", {
        "border-0": isLiked,
      })}
      fill={isLiked ? "red" : "white"}
      onClick={(e) => {
        toggleProductLike(dispatch, productId);
      }}
    />
  );
};

export default Like;
