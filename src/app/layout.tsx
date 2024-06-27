import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'], // Optionally specify the font weights
});

export const metadata: Metadata = {
  title: "Framer Motion",
  description:"frame motion POC"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-gradient-to-tl from-hotPink via-yellow-100 to-sky-300`}>
        {children}</body>
    </html>
  );
}
