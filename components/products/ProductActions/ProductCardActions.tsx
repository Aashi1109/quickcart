"use client";

import Like from "@/components/Like";
import { useAppState } from "@/hooks";
import { cn } from "@/lib/utils";
import { IProduct } from "@/types";
import { ClassValue } from "clsx";
import CartAction from "./CartAction";
import IconBased from "./CartAction/IconBased";

const ProductCardActions = ({
  productData,
  classes,
}: {
  productData: IProduct;
  classes?: ClassValue;
}) => {
  const { state, dispatch } = useAppState();

  return (
    <div className={cn("flex-start gap-4", classes)}>
      <CartAction
        state={state}
        dispatch={dispatch}
        RenderComponent={IconBased}
        productData={productData}
      />
      <Like state={state} dispatch={dispatch} product={productData} />
    </div>
  );
};

export default ProductCardActions;
