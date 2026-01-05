export default function RatingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-screen w-screen flex">
      {children}
    </main>
  );
}