import { getLatestConversionRates } from "@/actions/settings/currency";
import { CURRENCY_LABEL } from "@/constants";
import { udpateCurrency } from "@/context/actions/settings/currency";
import { useAppState } from "@/hooks";
import { cn } from "@/lib/utils";
import { IStringKeyObject } from "@/types";
import { ChangeEvent, useEffect, useState } from "react";

const PREF_CURRENCIES = ["USD", "INR", "EUR"];

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
  }, [currentCurrency]); // Include currentCurrency as a dependency to refetch on currency change

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value: selectedCurrencyCode } = e.target as HTMLSelectElement;
    const conversionRate = e.target.selectedOptions?.[0]?.dataset?.value;
    udpateCurrency(dispatch, {
      currency: {
        name: selectedCurrencyCode,
        value: +(conversionRate || 1),
      }, // default is USD so currency multiplier factor will be 1
    });
  };

  // Filter preferred currencies and other currencies
  const preferredCurrencies = Object.entries(currenciesConvesionList).filter(
    ([key]) => PREF_CURRENCIES.includes(key)
  );

  const otherCurrencies = Object.entries(currenciesConvesionList).filter(
    ([key]) => !PREF_CURRENCIES.includes(key)
  );

  return (
    <select
      name="currencyConversion"
      id="currencyConversion"
      className={cn("rounded-lg p-1 w-20 bg-gray-200 text-gray-600")}
      value={currentCurrency}
      onChange={handleChange}
    >
      <optgroup label="Popular Currencies">
        {preferredCurrencies.map(([key, value]) => {
          const { name, symbol } =
            CURRENCY_LABEL[key as keyof typeof CURRENCY_LABEL];

          return (
            <option key={key} value={key} data-value={value}>
              {symbol && `(${symbol})`} {name}
            </option>
          );
        })}
      </optgroup>

      <optgroup label="Other Currencies">
        {otherCurrencies.map(([key, value]) => {
          const { name, symbol } =
            CURRENCY_LABEL[key as keyof typeof CURRENCY_LABEL];

          return (
            <option key={key} value={key} data-value={value}>
              {symbol && `(${symbol})`} {name}
            </option>
          );
        })}
      </optgroup>
    </select>
  );
};

export default CurrencySelector;
