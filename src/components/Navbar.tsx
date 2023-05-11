import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/ThemeToggle";
import { kpButtonVariants } from "@/ui/KPButton";

import { FC } from "react";

interface NavbarProps {
  showLink?: boolean;
}

const Navbar: FC<NavbarProps> = ({ showLink = false }) => {
  return (
    <div className="fixed backdrop-blur-sm bg-white/75 dark:bg-zinc-900/75 z-50 top-0 left-0 right-0 h-20 border-b border-zinc-300 dark:border-zinc-700 shadow-sm flex items-center justify-between">
      <div className="container max-w-6xl mx-auto w-full flex justify-between items-center">
        {showLink ? (
          <Link href="/" className={kpButtonVariants({ variant: "link" })}>
            Khalifa Partners | Home
          </Link>
        ) : (
          <>
            <div className="relative w-full max-w-[105px] lg:max-w-[135px] aspect-square dark:hidden">
              <Image
                priority
                quality={100}
                style={{ objectFit: "contain" }}
                fill
                src="/logos/kp-logo-dark.png"
                alt="kp-logo"
              />
            </div>
            <div className="relative w-full max-w-[105px] lg:max-w-[135px] aspect-square hidden dark:block">
              <Image
                priority
                quality={100}
                style={{ objectFit: "contain" }}
                fill
                src="/logos/kp-logo-light.png"
                alt="kp-logo"
              />
            </div>
          </>
        )}

        <div className="md:hidden">
          <ThemeToggle />
        </div>

        <div className="hidden md:flex gap-4">
          <ThemeToggle />
          <Link
            className={kpButtonVariants({ variant: "ghost" })}
            href="https://linktr.ee/baselkhalifa"
            rel="noreferrer"
            target="_blank"
          >
            Contact
          </Link>
          <Link
            className={kpButtonVariants({ variant: "outline" })}
            href="/portfolio"
          >
            Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
