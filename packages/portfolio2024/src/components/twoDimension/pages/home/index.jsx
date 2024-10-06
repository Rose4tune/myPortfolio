import { useRef } from "react";
import Intro from "./Intro";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contect from "./Contect";

const sections = ["Intro", "About", "Skills", "Projects", "Contect"];

export default function Home() {
  const sectionRef = useRef([]);

  const scrollToSection = (ref) => {
    ref.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <nav className="navbar">
        <ul>
          {sections.map((title, i) => {
            return (
              <li key={`navItem${i}`}>
                <button onClick={() => scrollToSection(sectionRef.current[i])}>
                  {title}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <Intro ref={(el) => (sectionRef.current[0] = el)} />
      <About ref={(el) => (sectionRef.current[1] = el)} />
      <Skills ref={(el) => (sectionRef.current[2] = el)} />
      <Projects ref={(el) => (sectionRef.current[3] = el)} />
      <Contect ref={(el) => (sectionRef.current[4] = el)} />
    </div>
  );
}
