export interface IProduct {
  id: number;
  title: string;
  description?: string;
  category: string;
  price: number;
  discountPercentage: number;
  brand: string;
  thumbnail: string;
  images: string[];
  rating: number;
  reviews: IReview[];
  warrantyInformation: string;
  shippingInformation: string;
  tags: string[];
  stock: number;
}

export interface IReview {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface IFetchProductsParams {
  category: string;
  page?: number;
  limit?: number;
  maxRequests?: number;
  requestCount?: number;
  maxEmptyRequests?: number;
  emptyRequestCount?: number;
  currentFilteredProducts?: IProduct[];
}

export interface ICartTotals {
  originalTotal: number;
  discountedTotal: number;
}

// types for global store
export interface ICartProduct extends IProduct {
  quantity: number;
}

export interface IAppState {
  cart: { products: ICartProduct[] };
  likedProducts: number[];
}
// Define the type for the cart actions
export type IAppActions =
  | { type: "ADD_TO_CART"; product: ICartProduct }
  | { type: "REMOVE_FROM_CART"; productId: number }
  | { type: "UPDATE_QUANTITY"; productId: number; quantity: number }
  | { type: "TOGGLE_PRODUCT_LIKE"; productId: number };
