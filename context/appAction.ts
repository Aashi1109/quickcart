import { IAppActions, IProduct } from "@/types";

// Action creators
const addToCart = (
  dispatch: React.Dispatch<IAppActions>,
  product: IProduct
) => {
  dispatch({ type: "ADD_TO_CART", product: { ...product, quantity: 1 } });
};

const removeFromCart = (
  dispatch: React.Dispatch<IAppActions>,
  productId: number
) => {
  dispatch({ type: "REMOVE_FROM_CART", productId });
};

const updateQuantity = (
  dispatch: React.Dispatch<IAppActions>,
  productId: number,
  quantity: number
) => {
  dispatch({ type: "UPDATE_QUANTITY", productId, quantity });
};

const toggleProductLike = (
  dispatch: React.Dispatch<IAppActions>,
  productId: number
) => {
  dispatch({ type: "TOGGLE_PRODUCT_LIKE", productId });
};

export { addToCart, removeFromCart, toggleProductLike, updateQuantity };
