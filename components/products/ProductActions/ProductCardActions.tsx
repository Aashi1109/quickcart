"use client";

import Like from "@/components/Like";
import { useAppState } from "@/hooks";
import { IProduct } from "@/types";
import CartAction from "./CartAction";
import CartButtonActionComponent from "./CartAction/ButtonBased";
import IconBased from "./CartAction/IconBased";

const ProductCardActions = ({ productData }: { productData: IProduct }) => {
  const { state, dispatch } = useAppState();

  return (
    <div className="flex-start gap-4 mb-6 lg:mb-0">
      <CartAction
        state={state}
        dispatch={dispatch}
        RenderComponent={IconBased}
        productData={productData}
      />
      <Like state={state} dispatch={dispatch} productId={productData.id} />
    </div>
  );
};

export default ProductCardActions;
