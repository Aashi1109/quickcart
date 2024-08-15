import { addToCart, removeFromCart } from "@/context/appAction";
import { isProductInCart } from "@/lib/cartUtils";
import { IProduct } from "@/types";
import { IAppDispatch, IAppState } from "@/types/context";
import { ComponentType } from "react";
import { IRenderProps } from "./types";

interface IProps {
  RenderComponent: ComponentType<IRenderProps>;
  productData: IProduct;
  state: IAppState;
  dispatch: IAppDispatch;
}
const CartAction = ({
  productData,
  RenderComponent,
  dispatch,
  state,
}: IProps) => {
  const isProductAddedToCart = isProductInCart(state.cart, productData.id);

  const handleCartButtonAction = () => {
    if (isProductAddedToCart) {
      removeFromCart(dispatch, productData.id);
    } else {
      addToCart(dispatch, productData);
    }
  };

  return (
    <RenderComponent
      handleClick={handleCartButtonAction}
      isProductAddedToCart={isProductAddedToCart}
    />
  );
};

export default CartAction;
