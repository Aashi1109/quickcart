"use client";

import { CURRENCY_LABEL } from "@/constants";
import { useAppState } from "@/hooks";

const DynamicPrice = ({
  price,
  makeBold = true,
}: {
  price: number;
  makeBold?: boolean;
}) => {
  const { state } = useAppState();
  const { name, value } = state.settings.currency;

  const symbol = CURRENCY_LABEL[name as keyof typeof CURRENCY_LABEL]?.symbol;

  return (
    <p className="font-medium">
      {symbol ? symbol : name} {(price * value).toFixed(2)}
    </p>
  );
};

export default DynamicPrice;
