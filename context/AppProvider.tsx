import { ReactNode, useReducer } from "react";
import AppContext, { initialState } from "./AppContext";
import appReducer from "./appReducer";

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
