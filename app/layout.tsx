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
      <body className={`${openSans.variable} font-sans`}>
       <Banner />
        <main>{children}</main>
      </body>
    </html>
  );
}
