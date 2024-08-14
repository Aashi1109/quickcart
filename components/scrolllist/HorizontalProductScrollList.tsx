"use client";

import { IProduct } from "@/types";
import { useEffect, useRef, useState } from "react";
import { ProductList } from "../products";
import ScrollActionButtons from "./ScrollActionButtons";

interface IProps {
  products: IProduct[];
  title: string;
}

const HorizontalProductScrollList = ({ products, title }: IProps) => {
  const actionButtonClass = "h-5 w-5 text-red-400";
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -scrollContainerRef.current.clientWidth * 0.9,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollContainerRef.current.clientWidth * 0.9,
        behavior: "smooth",
      });
    }
  };

  const checkScrollPosition = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setIsLeftDisabled(scrollLeft === 0);
    setIsRightDisabled(scrollLeft + clientWidth >= scrollWidth);
    setIsButtonDisabled(clientWidth >= scrollWidth);
  };

  useEffect(() => {
    const checkScrollPosition = () => {
      if (!scrollContainerRef.current) return;

      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;

      setIsLeftDisabled(scrollLeft === 0);
      setIsRightDisabled(scrollLeft + clientWidth >= scrollWidth);
    };

    const scrollHandler = () => {
      checkScrollPosition();
    };

    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener("scroll", scrollHandler);
      checkScrollPosition(); // Initial check
    }

    return () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener("scroll", scrollHandler);
      }
    };
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {/* header with buttons */}
      <div className="flex-between ">
        <p className="heading-1">{title}</p>
        {!isButtonDisabled && (
          <ScrollActionButtons
            {...{
              scrollLeft,
              isLeftDisabled,
              actionButtonClass,
              scrollRight,
              isRightDisabled,
            }}
          />
        )}
      </div>

      <ProductList
        products={products}
        ref={scrollContainerRef}
        classes="overflow-x-auto whitespace-nowrap scrollbar-hidden"
      />
    </div>
  );
};

export default HorizontalProductScrollList;
