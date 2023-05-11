"use client";

import { Info, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { KPButton } from "@/ui/KPButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/ui/DropdownMenu";

const MobileMenu = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className="md:hidden fixed z-50 bottom-20 right-0 left-0 flex justify-center">
      <div className="shadow-2xl rounded-md outline outline-2 outline-white dark:outline-zinc-900">
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger asChild onClick={() => setOpen((prev) => !prev)}>
            <KPButton variant="outline" size="lg">
              Menu
            </KPButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuGroup onClick={() => setOpen(false)}>
              <DropdownMenuItem asChild>
                <Link
                  className="w-full flex items-center gap-1.5"
                  href="https://linktr.ee/baselkhalifa"
                  rel="noreferrer"
                  target="_blank"
                >
                  <LayoutDashboard className="mr-2 h-5 w-5" />
                  <span>Contact</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link
                  className="w-full flex items-center gap-1.5"
                  href="/portfolio"
                >
                  <Info className="mr-2 h-5 w-5" />
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
