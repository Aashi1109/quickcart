import Image from "next/image";
import Link from "next/link";
import Badge from "../Badge";
import ProductCardActions from "./ProductActions/ProductCardActions";
import { IProduct } from "@/types";

interface IProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
  return (
    <div className="card bg-gray-100 p-2 block min-w-[250px] max-w-[600px]">
      <Link
        className="px-12 py-4 card bg-gray-200 flex-center relative"
        href={`/products/${product.id}`}
      >
        <Image
          src={product.thumbnail}
          alt={product.title || "Product"}
          width={200}
          height={60}
          className="object-contain"
        />
        <Badge
          text={`${Math.floor(product.discountPercentage)}% off`}
          classes="absolute top-2 right-2"
        />
      </Link>

      <div className="mt-2 p-1">
        <p className="text-sm font-light">{product.title}</p>

        <p className="text-lg tracking-wider font-extralight uppercase">
          {product.brand}
        </p>

        <div className="flex-between">
          <p className="t font-medium">${product.price}</p>
          <ProductCardActions productData={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
