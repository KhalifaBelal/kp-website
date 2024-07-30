"use client";

import Link from "next/link";
import Image from "next/image";
import { kpButtonVariants } from "@/ui/KPButton";
import MobileMenu from "@/components/MobileMenu";
import { usePathname } from "next/navigation";
import React from "react";
import { FC } from "react";

interface NavbarProps {
  investors: boolean;
}

const Navbar: FC<NavbarProps> = ({ investors }) => {
  const router = usePathname();
  const hideNavbar = !router.includes("weWorkWith" || "portfolio"); // Adjust the condition based on your specific routes
  const _href = investors ? "" : "kp-entrepreneurs";
  const hideInvestors = investors ? "text-zinc-900" : "hidden";
  const hideEntrepreneurs = investors ? "hidden" : "";

  if (!hideNavbar) {
    return null; // Don't render the Navbar on certain routes
  }

  return (
    <div
      className={`fixed backdrop-blur-sm ${
        investors ? "bg-zinc-100/75" : "bg-zinc-900/75"
      } z-50 top-0 left-0 right-0 h-20 border-b ${
        investors ? "border-zinc-300" : "border-zinc-700"
      } shadow-sm flex items-center justify-between`}
    >
      <div className="container max-w-6xl mx-auto w-full flex justify-between items-center">
        <Link href="/" replace className='mx-auto'>
          <Image
            typeof="image"
            rel="preload"
            unoptimized={false}
            width={120}
            height={120}
            src={`${
              investors ? "/logos/kp-logo-dark.png" : "/logos/kp-logo-light.png"
            }`}
            alt="kp-logo"
            priority
            className="aspect-square"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
