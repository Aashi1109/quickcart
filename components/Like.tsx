"use client";

import { toggleProductLike } from "@/context/appAction";
import { isProductLiked } from "@/lib/likeUtils";
import { cn } from "@/lib/utils";
import { IAppDispatch, IAppState } from "@/types/context";
import { Heart } from "lucide-react";

interface IProps {
  productId: number;
  state: IAppState;
  dispatch: IAppDispatch;
}
const Like = ({ productId, state, dispatch }: IProps) => {
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
