"use client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { FC, ReactNode } from "react";

const Provider: FC<{
  children: ReactNode;
  session?: Session | null | undefined;
}> = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export { Provider as NextAuthProvider };
