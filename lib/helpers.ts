import config from "@/config";
import { IFetchProductsParams, IProduct } from "@/types";

/**
 * Fetch and filter products recursively until the length of filtered products is equal to the limit or maxRequests or maxEmptyRequests is reached.
 *
 * @param {FetchProductsParams} params - Parameters for fetching products.
 * @param {string} params.category - The category to filter products by.
 * @param {number} [params.page=1] - The current page to fetch.
 * @param {number} [params.limit=100] - The number of products to fetch per request.
 * @param {number} [params.maxRequests=5] - The maximum number of requests to make.
 * @param {number} [params.requestCount=0] - The current number of requests made.
 * @param {number} [params.maxEmptyRequests=2] - The maximum number of additional requests to make if the products array is empty.
 * @param {number} [params.emptyRequestCount=0] - The current number of consecutive empty requests made.
 * @param {IProduct[]} [params.currentFilteredProducts=[]] - Accumulator for filtered products.
 * @returns {Promise<IProduct[]>} The filtered products.
 * @throws {Error} If fetching the products fails.
 */
export const fetchAndFilterProducts = async ({
  category,
  page = 1,
  limit = 100,
  maxRequests = 5,
  requestCount = 0,
  maxEmptyRequests = 2,
  emptyRequestCount = 0,
  currentFilteredProducts = [],
}: IFetchProductsParams): Promise<IProduct[]> => {
  try {
    // Check if the max number of requests has been reached
    if (requestCount >= maxRequests) {
      console.warn("Maximum number of requests reached.");
      return currentFilteredProducts;
    }

    // Check if the max number of empty requests has been reached
    if (emptyRequestCount > maxEmptyRequests) {
      console.warn("Maximum number of empty requests reached.");
      return currentFilteredProducts;
    }

    // Construct the fetch URL
    const fetchUrl = `${config.productsAPIUrl}?limit=${limit}&skip=${
      (page - 1) * limit
    }`;
    console.log(`Fetching URL: ${fetchUrl}`);

    // Fetch products from the API
    const productResponse = await fetch(fetchUrl);

    // Check for network errors
    if (!productResponse.ok) {
      throw new Error(
        `Failed to fetch products: ${productResponse.statusText}`
      );
    }

    // Parse the response JSON
    const productsData = await productResponse.json();
    // console.log(`Fetched data: ${JSON.stringify(productsData)}`);

    const { products } = productsData as { products: IProduct[] };

    // If products are empty, increment the empty request count
    if (products.length === 0) {
      console.warn("No products found in this request.");
      emptyRequestCount += 1;
    } else {
      emptyRequestCount = 0; // Reset the empty request count if products are found
    }

    // Filter products by category
    const loweredCategory = category.toLowerCase();
    const filteredProducts = products.filter((product) => {
      return (
        product.category.toLowerCase().includes(loweredCategory) ||
        product.tags.some((tag) => tag.toLowerCase().includes(loweredCategory))
      );
    });

    // Accumulate filtered products
    currentFilteredProducts = [...currentFilteredProducts, ...filteredProducts];

    // Check if the desired number of filtered products is reached
    if (currentFilteredProducts.length >= limit) {
      return currentFilteredProducts.slice(0, limit);
    }

    // Increment the request count and fetch the next page recursively
    return fetchAndFilterProducts({
      category,
      page: page + 1,
      limit,
      maxRequests,
      requestCount: requestCount + 1,
      maxEmptyRequests,
      emptyRequestCount,
      currentFilteredProducts,
    });
  } catch (error: any) {
    console.error(`Error fetching and filtering products: ${error?.message}`);
    throw error; // Re-throw the error to be handled by the caller
  }
};

/**
 * Updates the search parameters in the URL with the specified type and value.
 *
 * @param {string} type - The parameter type to set in the URL search params.
 * @param {string} value - The value to set for the specified parameter type.
 * @returns {string} The new URL with the updated search parameters.
 *
 * @example
 * // Assuming the current URL is 'http://example.com/page?category=books'
 * const newURL = updateSearchParams('category', 'electronics');
 * console.log(newURL); // Outputs: 'http://example.com/page?category=electronics'
 */
export const updateSearchParams = (type: string, value: string): string => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPathName = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathName;
};
