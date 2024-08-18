import { useAppState } from "@/hooks";
import { ICartProduct } from "@/types";
import DynamicPrice from "../DynamicPrice";
import CartProduct from "./CartProduct";
import CartQuantity from "./CartQuantity";

const CartItem = ({
  product,
  index,
}: {
  product: ICartProduct;
  index: number;
}) => {
  const { dispatch } = useAppState();

  return (
    <tr className="">
      <td>#{index + 1}</td>
      <CartProduct product={product} />
      <td>
        <DynamicPrice price={product.price} />
      </td>
      <td>
        <CartQuantity product={product} dispatch={dispatch} />
      </td>
      <td>
        <DynamicPrice price={product.price * product.quantity} />
      </td>
    </tr>
  );
};

export default CartItem;
