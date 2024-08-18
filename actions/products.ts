"use server";

import config from "@/config";

export const getProducts = async (limit: number) => {
  const request = await fetch(`${config.productsAPIUrl}?limit=${limit}`);
  const data = await request.json();
  return data;
};
