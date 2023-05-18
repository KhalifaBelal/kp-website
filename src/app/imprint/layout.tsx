export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="py-32">{children}</section>;
}
