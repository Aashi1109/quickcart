"use client";

import { AppProvider } from "@/context";
import { ReactNode } from "react";
import Footer from "./Footer";
import Nav from "./Nav";

const AppProviderWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <AppProvider>
      <Nav />
      <main className="px-4 sm:px-10 md:px-16 py-2 sm:py-5 md:py-8">
        {children}
      </main>
      <Footer />
    </AppProvider>
  );
};

export default AppProviderWrapper;
