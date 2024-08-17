import { ICartProduct } from "..";

export interface IAppState {
  cart: { products: ICartProduct[] };
  likedProducts: number[];
  settings: { currency: string };
}
// Define the type for the cart actions
export type IAppActions =
  | { type: "ADD_TO_CART"; product: ICartProduct }
  | { type: "REMOVE_FROM_CART"; productId: number }
  | { type: "UPDATE_QUANTITY"; productId: number; quantity: number }
  | { type: "TOGGLE_PRODUCT_LIKE"; productId: number };

export type IAppDispatch = React.Dispatch<IAppActions>;
