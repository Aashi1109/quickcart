"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

const SearchBar = () => {
  const router = useRouter();

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // @ts-ignore
    const elements = e.target.elements;
    const search = elements?.search;
    if (search) {
      router.push(`/search/${search?.value || ""}`);
    }
  };

  return (
    <div className="flex-1 flex-center">
      <form
        className="relative text-black w-full md:w-4/5 xl:w-2/5"
        onSubmit={handleFormSubmit}
      >
        <input
          type="text"
          className="px-8 py-2 w-full rounded-full "
          placeholder="Search products"
          id="search"
          name="search"
        />
        <label htmlFor="search">
          <Search className="absolute top-[50%] left-3 translate-y-[-50%] z-10 h-4 w-4 text-2xl " />
        </label>
      </form>
    </div>
  );
};

export default SearchBar;
