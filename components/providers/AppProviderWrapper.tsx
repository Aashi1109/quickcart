"use client";

import { AppProvider } from "@/context";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Footer, Nav } from "../containers";
import SyncState from "../SyncState";

const AppProviderWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <AppProvider>
      <Nav />
      <SyncState />
      <main className={cn("px-4 sm:px-10 md:px-16 py-4 pb-8 sm:py-8")}>
        {children}
      </main>
      <Footer />
    </AppProvider>
  );
};

export { AppProviderWrapper };
