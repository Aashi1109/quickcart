import { Types } from "mongoose";

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

export type IStringKeyObject = {
  [key: string]: string;
};

export type IUser = {
  _id?: string;
  name: string;
  username: string;
  email: string;
  image?: string;
  settings: { currency: ICurrencyItem };
  likedProducts: Array<any>;
};

export type ICurrencyItem = {
  name: string;
  value: number;
};

export type ICart = {
  userId?: string | Types.ObjectId;
  products: ICartProduct[];
  originalTotal: number;
  discountedTotal: number;
};

export type ISettings = {
  currency: ICurrencyItem;
};
