import Image from "next/image";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import Experiences from "./components/Experiences";

export default function Home() {
  return (
    <>
      <Hero/>
      <Experiences/>
      <Projects/>
      <Skills/>
      <ContactMe/>
    </>
  );
}
