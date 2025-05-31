import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <Hero/>
      {/* <About/> */}
      <Projects/>
      <Skills/>
    </>
  );
}
