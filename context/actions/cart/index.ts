import { IProduct } from "@/types";
import { IAppDispatch } from "@/types/context";

// Action creators
export const addToCart = (dispatch: IAppDispatch, product: IProduct) => {
  dispatch({ type: "ADD_TO_CART", product: { ...product, quantity: 1 } });
};

export const removeFromCart = (dispatch: IAppDispatch, productId: number) => {
  dispatch({ type: "REMOVE_FROM_CART", productId });
};

export const updateQuantity = (
  dispatch: IAppDispatch,
  productId: number,
  quantity: number
) => {
  dispatch({ type: "UPDATE_QUANTITY", productId, quantity });
};
