import { IAppDispatch, ICurrencyItem } from "@/types/context";

// action creators
export const udpateCurrency = (
  dispatch: IAppDispatch,
  currency: ICurrencyItem
) => {
  dispatch({ type: "UPDATE_CURRENCY", currency });
};
