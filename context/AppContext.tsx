import { IAppActions, IAppState } from "@/types";
import { createContext } from "react";

export const initialState: IAppState = {
  cart: { products: [] },
  likedProducts: [], // Array of product IDs that the user has liked
};

const AppContext = createContext<{
  state: IAppState;
  dispatch: React.Dispatch<IAppActions>;
}>({ state: initialState, dispatch: () => null });

export default AppContext;
