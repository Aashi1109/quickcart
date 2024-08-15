import { IProduct } from "@/types";
import { CategoryList } from "../category";
import { HorizontalProductScrollList } from "../scrolllist";

const Home = async ({}) => {
  const productsResp = await fetch("https://dummyjson.com/products?limit=60");
  const productsData = await productsResp.json();

  const { products = [] } = (productsData || {}) as { products: IProduct[] };
  // sort products by discount price
  const bestDiscountProducts = products.sort(
    (a, b) => b.discountPercentage - a.discountPercentage
  );

  // get all furnitures products
  const furnitureProducts = (
    products.length > 15 ? products.slice(15) : []
  ).filter((product) => product.category.toLowerCase().includes("furniture"));

  // get all grocery products
  const groceryProducts = (
    products.length > 15 ? products.slice(15) : []
  ).filter((product) => product.category.toLowerCase().includes("groceries"));

  return (
    <div className="flex flex-col w-full gap-4 sm:gap-8">
      <CategoryList numberOfCardsToShow={8} />

      <HorizontalProductScrollList
        products={bestDiscountProducts.slice(0, 15)}
        title="Deals of the day"
      />
      <HorizontalProductScrollList
        products={furnitureProducts}
        title="Deals on furnitures"
      />
      <HorizontalProductScrollList
        products={groceryProducts}
        title="Great savings on grocery"
      />
    </div>
  );
};

export default Home;
