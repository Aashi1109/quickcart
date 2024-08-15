import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const DesktopAuthActions: FC<{ session: Session; providers: any }> = ({
  session,
  providers,
}) => {
  return (
    <div className="sm:flex hidden">
      {session?.user ? (
        <div className="flex-center gap-3 md:gap-5">
          <Link href="/liked-products" className="black_btn">
            Wishlist
          </Link>
          <button
            className="outline-button"
            type="button"
            onClick={() => signOut()}
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
                onClick={() => signIn(provider?.id)}
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
