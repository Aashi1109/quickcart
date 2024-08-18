import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { FC } from "react";
import WishList from "./WishList";

const DesktopAuthActions: FC<{
  session?: Session | null;
  providers: any;
  signoutHandler: () => void;
  signInHandler: (providerId: any) => void;
}> = ({ session, providers, signoutHandler, signInHandler }) => {
  return (
    <div className="sm:flex hidden">
      {session?.user ? (
        <div className="flex-center gap-3 md:gap-5">
          <WishList />
          <button
            className="outline-button"
            type="button"
            onClick={signoutHandler}
          >
            Signout
          </button>

          <Image
            src={session?.user?.image || ""}
            width={37}
            height={37}
            className="rounded-full"
            alt="profile"
          ></Image>
        </div>
      ) : (
        <>
          {providers &&
            Object.values(providers).map((provider: any) => (
              <button
                className="outline-button"
                type="button"
                key={provider?.name}
                onClick={() => signInHandler(provider?.id)}
              >
                Sign in
              </button>
            ))}
        </>
      )}
    </div>
  );
};

export default DesktopAuthActions;
