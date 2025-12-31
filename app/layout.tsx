import "./globals.css";
import {Open_Sans} from 'next/font/google';
import Banner from "@/components/Banner"

const openSans = Open_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${openSans.variable} font-sans h-screen flex flex-col`}>
       <Banner />
        <main className="flex-1 overflow-hidden">{children}</main>
      </body>
    </html>
  );
}
