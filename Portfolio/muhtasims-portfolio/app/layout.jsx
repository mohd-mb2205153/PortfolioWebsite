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
  description: "Senior CS Student at Qatar University, passionate about AI, Deep Learning, Data Science, and Web Development",
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="50%" x="50%" dominant-baseline="middle" text-anchor="middle" font-size="80">👋</text></svg>',
        type: 'image/svg+xml',
      },
    ],
    shortcut: [
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="50%" x="50%" dominant-baseline="middle" text-anchor="middle" font-size="80">👋</text></svg>',
        type: 'image/svg+xml',
      },
    ],
    apple: [
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="50%" x="50%" dominant-baseline="middle" text-anchor="middle" font-size="80">👋</text></svg>',
        type: 'image/svg+xml',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geist.className} overflow-x-hidden`}>
      <body className="overflow-x-hidden">
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
