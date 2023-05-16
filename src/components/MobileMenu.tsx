"use client";

import Link from "next/link";
import { useState, FC, HTMLAttributes } from "react";
import { KPButton } from "@/ui/KPButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/ui/DropdownMenu";
import Icons from "@/components/Icons";

interface MobileMenuProps extends HTMLAttributes<HTMLElement> {
  currentRoute?: string;
}

const MobileMenu: FC<MobileMenuProps> = ({ currentRoute = "/" }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className="md:hidden fixed z-50 bottom-20 right-0 left-0 flex justify-center">
      <div className="shadow-2xl rounded-md outline outline-2 outline-white dark:outline-zinc-900">
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger asChild onClick={() => setOpen((prev) => !prev)}>
            <KPButton size="lg">Menu</KPButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuGroup onClick={() => setOpen(false)}>
              <DropdownMenuItem asChild>
                <Link
                  className="w-full flex items-center gap-1.5"
                  href="/privacy-policy"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Icons.ShieldCheckIcon className="mr-2 h-5 w-5" />
                  <span>Privacy Policy</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link
                  className={`w-full flex items-center gap-1.5 ${
                    currentRoute === "/imprint" ? "hidden" : ""
                  }`}
                  href="/imprint"
                >
                  <Icons.TextIcon className="mr-2 h-5 w-5" />
                  <span>Imprint</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator
                className={`${currentRoute === "/imprint" ? "hidden" : ""}`}
              />
              <DropdownMenuItem asChild>
                <Link
                  className="w-full flex items-center gap-1.5"
                  href="https://linktr.ee/baselkhalifa"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Icons.LinkIcon className="mr-2 h-5 w-5" />
                  <span>Contact</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator
                className={`${currentRoute === "/portfolio" ? "hidden" : ""}`}
              />
              <DropdownMenuItem asChild>
                <Link
                  className={`w-full flex items-center gap-1.5 ${
                    currentRoute === "/portfolio" ? "hidden" : ""
                  }`}
                  href="/portfolio"
                >
                  <Icons.LayoutDashboardIcon className="mr-2 h-5 w-5" />
                  <span>Portfolio</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default MobileMenu;
