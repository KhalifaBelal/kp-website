"use client";

import Link from "next/link";
import Image from "next/image";
import { kpButtonVariants } from "@/ui/KPButton";
import MobileMenu from "@/components/MobileMenu";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const router = usePathname();
  const hideNavbar = !router.includes("weWorkWith" || "portfolio"); // Adjust the condition based on your specific routes

  if (!hideNavbar) {
    return null; // Don't render the Navbar on certain routes
  }

  return (
    <div className="fixed backdrop-blur-sm bg-zinc-900/75 z-50 top-0 left-0 right-0 h-20 border-b border-zinc-700 shadow-sm flex items-center justify-between">
      <div className="container max-w-6xl mx-auto w-full flex justify-between items-center">
        <Link href="/" replace>
          <Image
            typeof="image"
            rel="preload"
            unoptimized={false}
            width={120}
            height={120}
            src="/logos/kp-logo-light.png"
            alt="kp-logo"
            priority
            className="aspect-square"
          />
        </Link>

        <div className="md:hidden flex items-center gap-3">
          <MobileMenu />
        </div>

        <div className="hidden md:flex gap-4">
          <Link
            href="/"
            replace
            className={kpButtonVariants({ variant: "link" })}
            onClick={() =>
              document
                .getElementById("concept")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Concept
          </Link>
          <Link
            href="/"
            replace
            className={kpButtonVariants({ variant: "link" })}
            onClick={() =>
              document
                .getElementById("solutions")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Solutions
          </Link>
          <Link
            href="/"
            replace
            className={kpButtonVariants({ variant: "link" })}
            onClick={() =>
              document
                .getElementById("portfolio")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Portfolio
          </Link>
          <Link
            href="/"
            replace
            className={kpButtonVariants({ variant: "link" })}
            onClick={() =>
              document
                .getElementById("philosophy")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Philosophy
          </Link>
          <Link
            className={kpButtonVariants({ variant: "outline" })}
            href="https://linktr.ee/baselkhalifa"
            rel="noreferrer"
            target="_blank"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}
