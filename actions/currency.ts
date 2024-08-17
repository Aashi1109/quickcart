"use server";

import config from "@/config";

export const getLatestConversionRates = async (
  baseCurrency: "USD" | "INR" | string
) => {
  try {
    const fetchUrl =
      config.exchangeRateAPI.baseUrl +
      `/${process.env.EXCHANGE_RATE_API_KEY || ""}/${baseCurrency}`;

    const request = await fetch(fetchUrl);
    const result = await request.json();
    return result;
  } catch (error) {
    console.error(`Error fetching currency rates ${error}`);
    throw error;
  }
};
