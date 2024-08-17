"use server";

import config from "@/config";

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
