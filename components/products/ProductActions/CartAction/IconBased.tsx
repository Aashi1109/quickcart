import { Check, ShoppingCart } from "lucide-react";
import { IRenderProps } from "./types";

const IconBased = ({ handleClick, isProductAddedToCart }: IRenderProps) => {
  const className = "h-5 w-5 text-gray-600 cursor-pointer";
  return !isProductAddedToCart ? (
    <ShoppingCart className={className} onClick={handleClick} />
  ) : (
    <div className="relative cursor-pointer" onClick={handleClick}>
      <ShoppingCart className={className} />
      <div className="bg-green-600 absolute top-[-2px] right-[-2px] flex-center rounded-full text-white w-3 h-3">
        <Check className="h-2 w-2" />
      </div>
    </div>
  );
};

export default IconBased;
