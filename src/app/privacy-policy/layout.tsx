import MobileMenu from "@/components/MobileMenu";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="py-32">
      {children}
    </section>
  );
}
