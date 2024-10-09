import { useRef } from "react";
import Intro from "./Intro";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contect from "./Contect";
import NavBar from "../../../nav/NavBar";

export default function Home() {
  const sectionRefs = useRef([]);

  return (
    <>
      <NavBar ref={sectionRefs} />
      <Intro ref={(el) => (sectionRefs.current[0] = el)} />
      <About ref={(el) => (sectionRefs.current[1] = el)} />
      <Skills ref={(el) => (sectionRefs.current[2] = el)} />
      <Projects ref={(el) => (sectionRefs.current[3] = el)} />
      <Contect ref={(el) => (sectionRefs.current[4] = el)} />
    </>
  );
}
