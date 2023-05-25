import SubNavbar from "@/components/SubNavbar";
import KPSection from "@/components/ui/KPSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Investors",
  description: "Coming soon...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <KPSection>
      <SubNavbar />
      {children}
    </KPSection>
  );
}
