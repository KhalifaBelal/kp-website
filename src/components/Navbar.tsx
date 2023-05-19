import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/ThemeToggle";
import { kpButtonVariants } from "@/ui/KPButton";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <div className="fixed backdrop-blur-sm bg-white/75 dark:bg-zinc-900/75 z-50 top-0 left-0 right-0 h-20 border-b border-zinc-300 dark:border-zinc-700 shadow-sm flex items-center justify-between">
      <div className="container max-w-6xl mx-auto w-full flex justify-between items-center">
        <div className="dark:hidden">
          <Link href="/">
            <Image
              priority
              quality={100}
              typeof="image"
              rel="preload"
              unoptimized={false}
              width={120}
              height={120}
              src="/logos/kp-logo-dark.png"
              alt="kp-logo"
              className="aspect-square"
            />
          </Link>
        </div>
        <div className="hidden dark:block">
          <Link href="/">
            <Image
              typeof="image"
              rel="preload"
              unoptimized={false}
              width={120}
              height={120}
              src="/logos/kp-logo-light.png"
              alt="kp-logo"
              className="aspect-square"
            />
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <MobileMenu />
        </div>

        <div className="hidden md:flex gap-4">
          <ThemeToggle />
          <Link className={kpButtonVariants({ variant: "ghost" })} href="/">
            Home
          </Link>
          <Link
            className={kpButtonVariants({ variant: "ghost" })}
            href="/privacy-policy"
          >
            Privacy Policy
          </Link>
          <Link
            className={kpButtonVariants({ variant: "ghost" })}
            href="/imprint"
          >
            Imprint
          </Link>
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
}
