import Pagination from "@/components/Pagination";
import { ProductList } from "@/components/products";
import { fetchAndFilterProducts } from "@/lib/helpers";
import { capitalize } from "@/lib/utils";

const page = async ({
  params,
  searchParams,
}: {
  params: { category: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  let { page = 1, limit = 20 } = searchParams;

  if (+page <= 0) page = 1;

  const { category } = params;

  // approach 1: use pagination with fetchAndFilterProducts function
  // filter products by category
  const filteredProducts = await fetchAndFilterProducts({
    category: category,
    limit: Math.min(+limit * 3, 50),
    page: +page,
  });

  // approach 2 doesn't work with pagination
  // const productResp = await fetch(
  //   config.productsAPIUrl +
  //     `/category/${category}?limit=${limit}&skip=${+page - 1 * +limit}`
  // );

  // const productsData = await productResp.json();

  // const filteredProducts =
  //   (productsData as { products: IProduct[] })?.products || [];
  const formattedCategory = category.replace("-", " ");

  return (
    <div className="flex flex-col gap-6 min-h-[40vh]">
      <p className="heading-1">
        Results for category: {capitalize(formattedCategory)}
      </p>
      {filteredProducts && filteredProducts.length ? (
        <ProductList products={filteredProducts} classes="flex-wrap" />
      ) : (
        <div className="flex-1 flex-center">
          <h1>
            {+page === 1
              ? "No products found in this category."
              : "No more products found in this category"}
          </h1>
        </div>
      )}

      {/* pagination buttons */}
      <Pagination
        page={+page}
        isProductsAvailable={!!filteredProducts.length}
      />
    </div>
  );
};

export default page;
