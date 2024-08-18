import { AppContext } from "@/context";
import { useContext } from "react";

const useAppState = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppState must be used within AppProvider");
  }
  return context;
};

export default useAppState;
