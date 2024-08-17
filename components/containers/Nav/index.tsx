"use client";

import CartIcon from "@/components/CartIcon";
import CurrencySelector from "@/components/CurrencySelector";
import { SearchBar } from "@/components/reviews";
import { useMediaQuery } from "@/hooks";
import AuthActions from "./AuthActions";
import NavHeader from "./NavHeader";

const Nav = () => {
  const isTabletOrGreater = useMediaQuery("(min-width: 768px)");

  return (
    <header className="flex-between bg-black text-white py-3 flex-col sm:flex-row rounded-b-xl px-2 gap-4">
      {isTabletOrGreater ? (
        <>
          <NavHeader />
          <SearchBar />
          <CurrencySelector />
          <CartIcon />
          <AuthActions />
        </>
      ) : (
        <div className="flex flex-col w-full p-2 sm:p-0">
          <div className="flex-between mb-4">
            <NavHeader />
            <div className="flex-center gap-4">
              <CurrencySelector />
              <CartIcon />
              <AuthActions />
            </div>
          </div>
          <SearchBar />
        </div>
      )}
    </header>
  );
};

export default Nav;
