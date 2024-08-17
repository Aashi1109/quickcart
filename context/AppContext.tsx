import { IAppDispatch, IAppState } from "@/types/context";
import { createContext } from "react";

export const initialState: IAppState = {
  cart: { products: [] },
  likedProducts: [],
  settings: { currency: { name: "USD", value: 1 } },
};

const AppContext = createContext<{
  state: IAppState;
  dispatch: IAppDispatch;
}>({ state: initialState, dispatch: () => null });

export default AppContext;
