import { IProduct } from "@/types";
import { IAppDispatch } from "@/types/context";

const toggleProductLike = (dispatch: IAppDispatch, product: IProduct) => {
  dispatch({ type: "TOGGLE_PRODUCT_LIKE", product });
};

export { toggleProductLike };
