import { IProduct } from "@/types";
import { IAppDispatch } from "@/types/context";

// Action creators
const addToCart = (dispatch: IAppDispatch, product: IProduct) => {
  dispatch({ type: "ADD_TO_CART", product: { ...product, quantity: 1 } });
};

const removeFromCart = (dispatch: IAppDispatch, productId: number) => {
  dispatch({ type: "REMOVE_FROM_CART", productId });
};

const updateQuantity = (
  dispatch: IAppDispatch,
  productId: number,
  quantity: number
) => {
  dispatch({ type: "UPDATE_QUANTITY", productId, quantity });
};

const toggleProductLike = (dispatch: IAppDispatch, productId: number) => {
  dispatch({ type: "TOGGLE_PRODUCT_LIKE", productId });
};

export { addToCart, removeFromCart, toggleProductLike, updateQuantity };
