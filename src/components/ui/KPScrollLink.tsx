"use client";

import Link from "next/link";
import { AnchorHTMLAttributes, FC } from "react";

interface KPScrollLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  sectionId: string;
}

const KPScrollLink: FC<KPScrollLinkProps> = ({
  sectionId,
  children,
  className,
  ...props
}) => {
  const scrollToSection = (_sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      [console.log("succes")];
    }
  };

  return (
    <Link
      href={"/"}
      className={className}
      onClick={() => {
        scrollToSection(sectionId);
      }}
      {...props}
    >
      {children}
    </Link>
  );
};

export default KPScrollLink;
