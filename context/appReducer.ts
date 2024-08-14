import { IAppActions, IAppState } from "@/types";

const appReducer = (state: IAppState, action: IAppActions): IAppState => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: {
          ...state.cart,
          products: [...state.cart.products, action.product],
        },
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: {
          ...state.cart,
          products: state.cart.products.filter(
            (product) => product.id !== action.productId
          ),
        },
      };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        cart: {
          ...state.cart,
          products: state.cart.products.map((product) =>
            product.id === action.productId
              ? { ...product, quantity: product.quantity + action.quantity }
              : product
          ),
        },
      };
    case "TOGGLE_PRODUCT_LIKE":
      const isProductLiked = state.likedProducts.includes(action.productId);
      const updatedLikedProducts = isProductLiked
        ? state.likedProducts.filter((pid) => pid !== action.productId)
        : [...state.likedProducts, action.productId];
      return {
        ...state,
        likedProducts: updatedLikedProducts,
      };
    default:
      return state;
  }
};

export default appReducer;
