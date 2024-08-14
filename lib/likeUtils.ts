import { IAppState } from "@/types";

export const isProductLiked = (
  likedProducts: IAppState["likedProducts"],
  productId: number
) => likedProducts.includes(productId);
