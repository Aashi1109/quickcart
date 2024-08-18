"use client";

import { useAppState } from "@/hooks";
import { IProduct } from "@/types";
import CartAction from "./CartAction";
import CartButtonActionComponent from "./CartAction/ButtonBased";

const ProductDetailActions = ({ productData }: { productData: IProduct }) => {
  const { state, dispatch } = useAppState();

  return (
    <div className="flex-start gap-4 mb-6 lg:mb-0">
      <CartAction
        state={state}
        dispatch={dispatch}
        RenderComponent={CartButtonActionComponent}
        productData={productData}
      />
    </div>
  );
};

export default ProductDetailActions;
