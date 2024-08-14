import {
  ProductDetails,
  ProductImages,
  ProductReviews,
} from "@/components/products";
import config from "@/config";
import { IProduct } from "@/types";

const ProductPage = async ({ params }: { params: { id: number } }) => {
  const { id } = params;
  const productResp = await fetch(`${config.productsAPIUrl}/${id}`);
  const productData: IProduct = await productResp.json();

  return (
    <div className="">
      <div className="flex flex-col md:flex-row">
        <ProductImages images={productData.images} title={productData.title} />
        <ProductDetails productData={productData} />
      </div>
      <ProductReviews reviews={productData.reviews} />
    </div>
  );
};

export default ProductPage;
