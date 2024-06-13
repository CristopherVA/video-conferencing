import React from "react";
import Image from "next/image";
import Link from "next/link";

import MobileNav from "@/components/mobile-nav";
import { UserButton } from "@clerk/nextjs";
const Navbar = () => {
  return (
    <nav className="flex justify-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className=" items-center gap-1 hidden md:flex">
        <Image
          src="/icons/yoom-logo.svg"
          width={100}
          height={100}
          alt="Logo"
          className="max-sm:size-10"
        />
      </Link>
      <MobileNav />

      <div className="flex-between gap-5">
        <UserButton />
      </div>
    </nav>
  );
};

export default Navbar;
