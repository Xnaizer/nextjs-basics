import MouseMove from "@/components/MouseMove";
import "./globals.css";

import {Readex_Pro} from 'next/font/google';

const readex = Readex_Pro({
  subsets: ['latin'], // subset wajib
  weight: ['300', '400','500','600', '700'], 
  variable: '--font-readex',     // untuk dipakai di Tailwind
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={readex.variable}>
      <body>
        <MouseMove />
        {children}
      </body>
    </html>
  );
}
