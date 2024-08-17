import { getLatestConversionRates } from "@/actions/currency";
import { CURRENCY_LABEL } from "@/constants";
import { udpateCurrency } from "@/context/actions/settings/currency";
import { useAppState } from "@/hooks";
import { cn } from "@/lib/utils";
import { IStringKeyObject } from "@/types";
import { ChangeEvent, useEffect, useState } from "react";

const CurrencySelector = () => {
  const { state, dispatch } = useAppState();
  const [currenciesConvesionList, setCurrenciesConvesionList] =
    useState<IStringKeyObject>({});

  const { name: currentCurrency } = state.settings.currency;

  useEffect(() => {
    const fetchConversionRates = async () => {
      const conversionRates = await getLatestConversionRates(currentCurrency);
      if (conversionRates?.conversion_rates) {
        setCurrenciesConvesionList(conversionRates.conversion_rates);
      }
    };

    fetchConversionRates();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value: selectedCurrencyCode } = e.target as HTMLSelectElement;
    const conversionRate = e.target.selectedOptions?.[0]?.dataset?.value;
    udpateCurrency(dispatch, {
      name: selectedCurrencyCode,
      value: +(conversionRate || 1), // default is USD so currency multiplier factor will be 1
    });
  };

  return (
    <select
      name="currencyConversion"
      id="currencyConversion"
      className={cn("rounded-lg p-1 w-20 bg-gray-200 text-gray-600")}
      defaultValue={currentCurrency}
      onChange={handleChange}
    >
      {Object.entries(currenciesConvesionList).map(([key, value]) => {
        const { name, symbol } =
          CURRENCY_LABEL[key as keyof typeof CURRENCY_LABEL];
        return (
          <option
            key={key}
            value={key}
            className="p-1 inline-block"
            selected={key === currentCurrency}
            data-value={value}
          >
            {symbol && <span className="text-lg">({symbol})</span>} {name}
          </option>
        );
      })}
    </select>
  );
};

export default CurrencySelector;
