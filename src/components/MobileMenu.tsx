"use client";

import Link from "next/link";
import { useState } from "react";
import { KPButton, kpButtonVariants } from "@/ui/KPButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/ui/DropdownMenu";
import Icons from "@/components/Icons";

export default function MobileMenu() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild onClick={() => setOpen((prev) => !prev)}>
        <KPButton className={kpButtonVariants({ variant: "outline" })}>
          <span>Menu</span>
          <Icons.LucideMenu className="ml-2 h-5 w-5" />
        </KPButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mr-6">
        <DropdownMenuGroup onClick={() => setOpen(false)}>
          <DropdownMenuItem asChild>
            <Link
              className="w-full flex items-center gap-1.5"
              href="/kp-entrepreneurs"
              replace
              onClick={() =>
                document.getElementById("concept")?.scrollIntoView()
              }
            >
              <Icons.TriangleIcon className="mr-2 h-5 w-5" />
              <span>Concept</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link
              className="w-full flex items-center gap-1.5"
              href="/kp-entrepreneurs"
              replace
              onClick={() =>
                document.getElementById("solutions")?.scrollIntoView()
              }
            >
              <Icons.KeyIcon className="mr-2 h-5 w-5" />
              <span>Solutions</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link
              className="w-full flex items-center gap-1.5"
              href="/kp-entrepreneurs"
              replace
              onClick={() =>
                document.getElementById("portfolio")?.scrollIntoView()
              }
            >
              <Icons.LayoutDashboardIcon className="mr-2 h-5 w-5" />
              <span>Portfolio</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link
              className="w-full flex items-center gap-1.5"
              href="/kp-entrepreneurs"
              replace
              onClick={() =>
                document.getElementById("philosophy")?.scrollIntoView()
              }
            >
              <Icons.BrainIcon className="mr-2 h-5 w-5" />
              <span>Philosophy</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link
              className="w-full flex items-center gap-1.5"
              href="https://linktr.ee/baselkhalifa"
              rel="noreferrer"
              target="_blank"
            >
              <Icons.LinkIcon className="mr-2 h-5 w-5" />
              <span>Get in Touch</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
