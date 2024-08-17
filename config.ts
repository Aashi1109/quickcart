const config = {
  productsAPIUrl: process.env.NEXT_PUBLIC_PRODUCTS_API_URL,
  db: {
    name: "QuickCart",
    url: "mongodb://localhost:27017/quickcart",
  },
  nextAuth: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    },
  },
  exchangeRateAPI: {
    baseUrl: "https://v6.exchangerate-api.com/v6",
    apiKey: process.env.EXCHANGE_RATE_API_KEY,
  },
};

export default config;
