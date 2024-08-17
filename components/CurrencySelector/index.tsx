import { useAppState } from "@/hooks";
import React from "react";

const CurrencySelector = () => {
  const { state } = useAppState();

  const currentCurrency = state.settings.currency;
  return <div>CurrencySelector</div>;
};

export default CurrencySelector;
