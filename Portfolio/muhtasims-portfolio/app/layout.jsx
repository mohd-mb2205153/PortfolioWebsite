import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// import { Space_Grotesk } from 'next/font/google';
// const spaceGrotesk = Space_Grotesk({
//   subsets: ['latin'],
//   weight: ['400', '700'],  // Or whatever weights you need
// });


export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
