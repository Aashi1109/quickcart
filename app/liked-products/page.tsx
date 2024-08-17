import { WishlistedProductsPage } from "@/components/pages";

const page = () => {
  return (
    <div className="flex flex-col gap-6 min-h-[40vh]">
      <p className="heading-1">Your wishlisted products</p>

      <WishlistedProductsPage />
    </div>
  );
};

export default page;
