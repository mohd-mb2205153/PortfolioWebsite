import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { Space_Grotesk } from 'next/font/google';
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '700'],  // Or whatever weights you need
});

import { Geist } from 'next/font/google';
const geist = Geist({
  subsets: ['latin'],
  // weight: ['400','700']  // Or whatever weights you need
});

export const metadata = {
  title: "Muhtasim Bashar's Portfolio",
  description: "Generated by Next App"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geist.className}>
      <body>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
