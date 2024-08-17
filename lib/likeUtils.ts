import { IAppState } from "@/types/context";

export const isProductLiked = (
  likedProducts: IAppState["likedProducts"],
  productId: number
) => likedProducts.some((prod) => prod.id === productId);
