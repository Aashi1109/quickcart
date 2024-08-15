import { FC, ReactNode } from "react";
import { AppProviderWrapper } from "./AppProviderWrapper";
import { NextAuthProvider } from "./NextAuthProvider";

const RootProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <NextAuthProvider>
      <AppProviderWrapper>{children}</AppProviderWrapper>
    </NextAuthProvider>
  );
};

export default RootProvider;
