"use client";

import { updateSearchParams } from "@/lib/helpers";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

const Pagination = ({
  page,
  isProductsAvailable,
}: {
  page: number;
  isProductsAvailable: boolean;
}) => {
  const router = useRouter();
  const handleSearchParams = (newPageValue: number) => {
    const newPathName = updateSearchParams("page", newPageValue.toString());
    router.push(newPathName);
  };
  return (
    <div className="flex-between">
      {+page !== 1 && (
        <button
          type="button"
          className={cn("button flex-center gap-1 pl-2 text-sm")}
          onClick={() => handleSearchParams(page - 1)}
        >
          <ChevronLeft className="w-4" /> Page {+page - 1}
        </button>
      )}
      {isProductsAvailable && (
        <button
          type="button"
          className={cn("button flex-center gap-1 pr-2 text-sm", {
            "ml-auto": +page === 1,
          })}
          onClick={() => handleSearchParams(page + 1)}
        >
          Page {+page + 1} <ChevronRight className="w-4" />
        </button>
      )}
    </div>
  );
};

export default Pagination;
