import Image from "next/image";
import Link from "next/link";

const NavHeader = () => {
  return (
    <Link href={"/"} className="flex-center">
      <Image
        className="object-contain rounded-full mr-4 bg-gray-100"
        alt="QuickCart Logo"
        height={40}
        width={40}
        src={"/assets/images/logo2.png"}
      />

      <p className="text-xl font-light tracking-widest uppercase ">QuickCart</p>
    </Link>
  );
};

export default NavHeader;
