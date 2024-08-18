import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";

const MobileAuthActions: FC<{
  session?: Session | null;
  providers: any;
  signoutHandler: () => void;
  signInHandler: (providerId: any) => void;
}> = ({ session, providers, signoutHandler, signInHandler }) => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  return (
    <div className="sm:hidden flex relative">
      {session?.user ? (
        <div className="flex">
          <Image
            src={session?.user?.image || ""}
            width={37}
            height={37}
            className="rounded-full cursor-pointer"
            alt="profile"
            onClick={() => setToggleDropdown((prev) => !prev)}
          ></Image>

          {toggleDropdown && (
            <div className="dropdown">
              <Link
                href={"/cart"}
                className="dropdown_link"
                onClick={() => setToggleDropdown(false)}
              >
                Cart
              </Link>
              <Link
                href={"/liked-products"}
                className="dropdown_link"
                onClick={() => setToggleDropdown(false)}
              >
                Wishlist
              </Link>
              <button
                type="button"
                className="button"
                onClick={() => {
                  setToggleDropdown(false);
                  signoutHandler();
                }}
              >
                Sign out
              </button>
            </div>
          )}
        </div>
      ) : (
        <>
          {providers &&
            Object.values(providers).map((provider: any) => {
              return (
                <button
                  className="black_btn"
                  type="button"
                  key={provider.name}
                  onClick={() => signInHandler(provider.id)}
                >
                  Sign in
                </button>
              );
            })}
        </>
      )}
    </div>
  );
};

export default MobileAuthActions;
