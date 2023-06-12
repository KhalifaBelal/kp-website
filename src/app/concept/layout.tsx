import SubNavbar from "@/components/SubNavbar";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Concept",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SubNavbar />
      {children}
    </>
  );
}
