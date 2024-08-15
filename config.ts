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
};

export default config;
