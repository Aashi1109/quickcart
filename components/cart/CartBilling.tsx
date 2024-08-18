import { getTotalAmountDiscountInCart } from "@/lib/cartUtils";
import { IAppState } from "@/types/context";
import DynamicPrice from "../DynamicPrice";

const CartBilling = ({ cart }: { cart: IAppState["cart"] }) => {
  const { originalTotal, discountedTotal } = getTotalAmountDiscountInCart(cart);
  const salesTax = originalTotal * 0.1;

  const grandTotal = discountedTotal + salesTax;

  return (
    <div className="flex flex-col gap-4 w-80 self-center lg:self-end">
      <div className="flex-between">
        <p>Subtotal:</p>
        <DynamicPrice price={originalTotal} makeBold={false} />
      </div>
      <div className="flex-between">
        <p>Sales tax:</p>
        <DynamicPrice price={salesTax} makeBold={false} />
      </div>
      <div className="flex-between">
        <p>Discount:</p>
        <DynamicPrice
          price={originalTotal - discountedTotal}
          makeBold={false}
        />
      </div>
      <div className="flex-between text-xl">
        <p>Grand Total:</p>
        <DynamicPrice price={grandTotal} />
      </div>

      <button type="button" className="button">
        Check out
      </button>
    </div>
  );
};

export default CartBilling;
