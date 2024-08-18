"use server";

import config from "@/config";
import { User } from "@/models";
import { ICurrencyItem } from "@/types";

export const getLatestConversionRates = async (baseCurrency: string) => {
  try {
    const fetchUrl =
      config.exchangeRateAPI.baseUrl +
      `/${config.exchangeRateAPI.apiKey}/latest/${baseCurrency}`;

    const request = await fetch(fetchUrl);
    const result = await request.json();
    return result;
  } catch (error) {
    console.error(`Error fetching currency rates ${error}`);
    throw error;
  }
};

export const updateCurrency = async (
  userId: string,
  currency: ICurrencyItem
) => {
  try {
    const updatedResult = await User.findByIdAndUpdate(userId, {
      settings: { currency },
    });
    return updatedResult;
  } catch (error) {
    console.error(`Error updating currency for user ${userId}: ${error}`);
    throw error;
  }
};
