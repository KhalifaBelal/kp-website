import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // offset navbar height
  return (
    <section>
      <Navbar showLink />
      {children}
    </section>
  );
}
