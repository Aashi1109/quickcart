"use client";

import { footerLinks, socialLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer
      className={cn(
        "flex bg-black text-white p-4 md:p-16 footer pt-24 lg:pt-28 pb-8 flex-col md:flex-row gap-16"
      )}
    >
      <div className="flex flex-col items-center sm:items-start gap-4 font-light flex-1">
        <p className="text-3xl text-center tracking-widest uppercase">
          QuickCart
          <Image
            src={"/assets/images/logo2.png"}
            alt="QuickCart Logo"
            width={28}
            height={28}
            className="object-contain inline-block bg-gray-100 rounded-full mb-1"
          />
        </p>

        <p className="text-sm text-wrap">
          Your awesome place to get quality products at reasonable price. This
          website is dummy and all the products are being fetched from
          dummyjson.org. Also the links here are dummy in footer don&apos;t open
          them.
        </p>
        <p className="mt-auto">© 2024 QuickCart. All rights reserved.</p>
      </div>

      {/* navigation links */}
      <div className="flex flex-1">
        <div className="flex justify-center flex-1">
          <div className="flex flex-col gap-6">
            <p className="font-bold ">Quick Links</p>
            <ul className="flex flex-col gap-4">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  className={cn("font-light", {
                    "font-bold": pathname == link.url,
                  })}
                >
                  {link.name}
                </Link>
              ))}
            </ul>
          </div>
        </div>

        {/* social links */}
        <div className="flex justify-center flex-1">
          <div className="flex flex-col gap-6">
            <p className="font-bold ">Social Links</p>
            <ul className="flex flex-col gap-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  className={cn("font-light")}
                >
                  {link.name}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
