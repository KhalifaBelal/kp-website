"use client";

import { Info, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/ui/Button";
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
      <div className="shadow-2xl rounded-md outline outline-2 outline-white dark:outline-slate-900">
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger asChild onClick={() => setOpen((prev) => !prev)}>
            <Button variant="outline" size="lg">
              Menu
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuGroup onClick={() => setOpen(false)}>
              <DropdownMenuItem asChild>
                <Link
                  href="https://linktr.ee/baselkhalifa"
                  className="w-full flex items-center gap-1.5"
                >
                  <LayoutDashboard className="mr-2 h-5 w-5" />
                  <span>Contact</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link
                  href="/portfolio"
                  className="w-full flex items-center gap-1.5"
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
