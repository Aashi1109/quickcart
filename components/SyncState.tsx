import { updateOrCreateCart } from "@/actions/cart";
import { updateUserData } from "@/actions/user";
import { useAppState } from "@/hooks";
import { getTotalAmountDiscountInCart } from "@/lib/cartUtils";
import { debounce } from "@/lib/likeUtils";
import { IAppState } from "@/types/context";
import { useEffect } from "react";

const syncWithDatabase = async (state: IAppState) => {
  try {
    if (state.user) {
      const userId = state.user._id;
      const { originalTotal, discountedTotal } = getTotalAmountDiscountInCart(
        state.cart
      );
      const cartResult = await updateOrCreateCart(userId!!, {
        products: state.cart.products,
        originalTotal,
        discountedTotal,
      });

      const userUpdateResult = await updateUserData(userId!!, {
        settings: state.settings,
        likedProducts: state.likedProducts,
      });
    }
  } catch (error) {
    console.error("Error syncing state with database:", error);
  }
};

const debouncedSync = debounce(syncWithDatabase, 1000);

const SyncState = () => {
  const { state } = useAppState();

  // useeffect to sync our state changes with database
  useEffect(() => {
    debouncedSync(state);
  }, [state]);
  return null;
};

export default SyncState;
