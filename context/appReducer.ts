import { isProductLiked } from "@/lib/likeUtils";
import { IAppActions, IAppState } from "@/types/context";

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
      // TODO remove this logic when proper db implementation is done
      const _isProductLiked = isProductLiked(
        state.likedProducts,
        action.product.id
      );
      const updatedLikedProducts = _isProductLiked
        ? state.likedProducts.filter(
            (product) => product.id !== action.product.id
          )
        : [...state.likedProducts, action.product];
      return {
        ...state,
        likedProducts: updatedLikedProducts,
      };
    case "UPDATE_CURRENCY":
      return {
        ...state,
        settings: { ...state.settings, currency: action.currency },
      };
    default:
      return state;
  }
};

export default appReducer;
