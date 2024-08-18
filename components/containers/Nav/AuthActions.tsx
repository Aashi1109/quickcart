import { getUserCartData } from "@/actions/cart";
import { getUserByEmail } from "@/actions/user";
import { useAppState } from "@/hooks";
import { jnparse } from "@/lib/utils";
import { getProviders, signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import DesktopAuthActions from "./DesktopAuthActions";
import MobileAuthActions from "./MobileAuthActions";

const AuthActions = () => {
  const { data: session } = useSession();
  const { dispatch } = useAppState();

  const [providers, setProviders] = useState<any>(null);

  useEffect(() => {
    const providersSet = async () => {
      const resp = await getProviders();
      setProviders(resp);
    };

    providersSet();
  }, []);

  useEffect(() => {
    const _func = async () => {
      if (session?.user) {
        const promiseResults = await Promise.allSettled([
          getUserByEmail(session?.user?.email!!),
          // @ts-ignore
          getUserCartData(session?.user?.id!!),
        ]);

        if (promiseResults.length) {
          const parsedResults = promiseResults.map(
            (_res: {
              status: "fulfilled" | "rejected";
              value?: string;
              reason?: string;
            }) => jnparse(_res?.value)
          );
          const parsedUser = parsedResults?.[0];
          // @ts-ignore
          dispatch({
            type: "INIT_STATE",
            payload: {
              user: parsedUser,
              likedProducts: parsedUser?.likedProducts,
              settings: parsedUser?.settings,
              cart: { products: parsedResults?.[1]?.products || [] },
            },
          });
        }
      } else {
        dispatch({ type: "REMOVE_USER" });
      }
    };
    _func();
  }, [session]);

  const signOutHandler = () => {
    signOut();
  };

  const signInHandler = (providerId: any) => {
    signIn(providerId);
  };

  return (
    <>
      <DesktopAuthActions
        session={session}
        providers={providers}
        signoutHandler={signOutHandler}
        signInHandler={signInHandler}
      />
      <MobileAuthActions
        session={session}
        providers={providers}
        signoutHandler={signOutHandler}
        signInHandler={signInHandler}
      />
    </>
  );
};

export default AuthActions;
