import { ICartProduct } from "@/types";
import CartItem from "./CartItem";

const CartTable = ({ cartProducts }: { cartProducts: ICartProduct[] }) => {
  return (
    <div className="max-w-3xl overflow-auto">
      <table className="table-auto border-separate border-spacing-4 md:border-spacing-x-10">
        <thead>
          <tr className="">
            <th>No.</th>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartProducts.map((product, index) => (
            <CartItem key={product.id} product={product} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
