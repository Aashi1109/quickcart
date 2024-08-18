"use server";

import { jnstringify } from "@/lib/utils";
import { User } from "@/models";
import { IProduct, ISettings } from "@/types";

export const updateUserData = async (
  userId: string,
  updateData: { settings: ISettings; likedProducts: Array<IProduct> }
) => {
  const user = await User?.findById(userId);

  if (user) {
    const { settings, likedProducts } = updateData;
    if (!!settings) user.settings = settings;
    if (!!likedProducts) user.likedProducts = likedProducts;
    await user?.save();
  }
};

export const getUserByEmail = async (email: string) => {
  const user = await User?.findOne({ email: email });
  return jnstringify(user);
};
