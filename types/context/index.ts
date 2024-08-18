import { ISettings, IUser } from "@/types";
import { ICartProduct, IProduct } from "..";

export interface IAppState {
  cart: {
    products: ICartProduct[];
  };
  likedProducts: IProduct[];
  settings: ISettings;
  user: IUser | null;
}

// Define the type for the cart actions
export type IAppActions =
  | { type: "ADD_TO_CART"; product: ICartProduct }
  | { type: "REMOVE_FROM_CART"; productId: number }
  | { type: "UPDATE_QUANTITY"; productId: number; quantity: number }
  | { type: "TOGGLE_PRODUCT_LIKE"; product: IProduct }
  | { type: "UPDATE_SETTINGS"; settings: ISettings }
  | { type: "SET_USER"; user: IUser }
  | { type: "REMOVE_USER" }
  | {
      type: "INIT_STATE";
      payload: IAppState;
    };

export type IAppDispatch = React.Dispatch<IAppActions>;
