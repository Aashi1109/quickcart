import Image from "next/image";
import Link from "next/link";
import Badge from "../Badge";
import Like from "../Like";

interface IProps {
  imageUrl: string;
  title: string;
  price: number;
  company: string;
  id: number;
  discount: number;
}

const ProductCard = ({
  imageUrl,
  company,
  price,
  title,
  id,
  discount,
}: IProps) => {
  return (
    <div className="card bg-gray-100 p-2 block min-w-[250px] max-w-[600px]">
      <Link
        className="px-12 py-4 card bg-gray-200 flex-center relative"
        href={`/products/${id}`}
      >
        <Image
          src={imageUrl}
          alt={title || "Product"}
          width={200}
          height={60}
          className="object-contain"
        />
        <Badge
          text={`${Math.floor(discount)}% off`}
          classes="absolute top-2 right-2"
        />
      </Link>

      <div className="mt-2 p-1">
        <p className="text-sm font-light">{title}</p>

        <p className="text-lg tracking-wider font-extralight uppercase">
          {company}
        </p>

        <div className="flex-between">
          <p className="t font-medium">${price}</p>
          <Like productId={id} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
