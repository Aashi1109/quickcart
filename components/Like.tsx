"use client";

import { toggleProductLike } from "@/context/actions/like";
import { isProductLiked } from "@/lib/likeUtils";
import { cn } from "@/lib/utils";
import { IProduct } from "@/types";
import { IAppDispatch, IAppState } from "@/types/context";
import { Heart } from "lucide-react";

interface IProps {
  product: IProduct;
  state: IAppState;
  dispatch: IAppDispatch;
}
const Like = ({ product, state, dispatch }: IProps) => {
  const isLiked = isProductLiked(state.likedProducts, product.id);

  return (
    <Heart
      className={cn("h-5 w-5 text-gray-600 cursor-pointer like-button", {
        "border-0": isLiked,
      })}
      fill={isLiked ? "red" : "white"}
      onClick={(e) => {
        toggleProductLike(dispatch, product);
      }}
    />
  );
};

export default Like;
