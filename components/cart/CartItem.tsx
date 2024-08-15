import { useAppState } from "@/hooks";
import { ICartProduct } from "@/types";
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
      <td>${product.price}</td>
      <td>
        <CartQuantity product={product} dispatch={dispatch} />
      </td>
      <td>
        <p className="font-medium">
          ${(product.price * product.quantity).toFixed(2)}
        </p>
      </td>
    </tr>
  );
};

export default CartItem;
