import { ISettings } from "@/types";
import { IAppDispatch } from "@/types/context";

// action creators
export const udpateCurrency = (dispatch: IAppDispatch, settings: ISettings) => {
  dispatch({ type: "UPDATE_SETTINGS", settings });
};
