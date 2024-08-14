import { cn } from "@/lib/utils";
import { IProduct } from "@/types";
import { forwardRef } from "react";
import ProductCard from "./ProductCard";

interface IProps {
  products: IProduct[];

  classes?: string;
}

const ProductList = forwardRef<HTMLDivElement, IProps>(
  ({ products, classes }, ref) => {
    return (
      <div className={cn("flex gap-4", classes)} ref={ref}>
        {products.map((product) => (
          <div className="flex-1" key={product.id}>
            <ProductCard
              company={product.brand}
              discount={product.discountPercentage}
              id={product.id}
              imageUrl={product.thumbnail}
              price={product.price}
              title={product.title}
            />
          </div>
        ))}
      </div>
    );
  }
);

ProductList.displayName = "ProductList";

export default ProductList;
