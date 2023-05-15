import dynamic from "next/dynamic";
import MobileMenu from "@/components/MobileMenu";
const Navbar = dynamic(() => import("@/components/Navbar"));

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // offset navbar height
  return (
    <section>
      <Navbar showLink currentRoute="/portfolio" />
      <MobileMenu currentRoute="/portfolio" />
      {children}
    </section>
  );
}
