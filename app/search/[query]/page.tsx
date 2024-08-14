import { ProductList } from "@/components/products";
import config from "@/config";
import { IProduct } from "@/types";

const page = async ({ params }: { params: { query: string } }) => {
  const { query } = params;

  const productsResp = await fetch(
    config.productsAPIUrl + `/search?q=${query}`
  );

  const productsData = await productsResp.json();
  const { products = [] } = (productsData || {}) as { products: IProduct[] };
  return (
    <div className="flex flex-col gap-6 min-h-[40vh]">
      <p className="heading-1">Search results for : {query}</p>

      <ProductList products={products} classes="flex-wrap" />
    </div>
  );
};

export default page;
