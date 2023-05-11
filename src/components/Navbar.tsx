import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { KPButton, kpButtonVariants } from "@/ui/KPButton";

const Navbar = () => {
  return (
    <div className="fixed backdrop-blur-sm bg-white/75 dark:bg-zinc-900/75 z-50 top-0 left-0 right-0 h-20 border-b border-zinc-300 dark:border-zinc-700 shadow-sm flex items-center justify-between">
      <div className="container max-w-7xl mx-auto w-full flex justify-between items-center">
        <Link href="/" className={kpButtonVariants({ variant: "link" })}>
          Khalifa Partners | Home
        </Link>

        

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
