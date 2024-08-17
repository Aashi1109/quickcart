import { ICartProduct, IProduct } from "..";

export interface IAppState {
  cart: { products: ICartProduct[] };
  likedProducts: IProduct[];
  settings: { currency: ICurrencyItem };
}
// Define the type for the cart actions
export type IAppActions =
  | { type: "ADD_TO_CART"; product: ICartProduct }
  | { type: "REMOVE_FROM_CART"; productId: number }
  | { type: "UPDATE_QUANTITY"; productId: number; quantity: number }
  | { type: "TOGGLE_PRODUCT_LIKE"; product: IProduct }
  | { type: "UPDATE_CURRENCY"; currency: ICurrencyItem };

export type IAppDispatch = React.Dispatch<IAppActions>;

export type ICurrencyItem = {
  name: string;
  value: number;
};
