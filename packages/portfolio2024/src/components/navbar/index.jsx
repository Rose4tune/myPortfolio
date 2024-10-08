import { forwardRef, useEffect, useState } from "react";
import { sections } from "../../data/constants";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const NavBar = forwardRef((props, ref) => {
  const [currentSection, setCurrentSection] = useState(0);

  const scrollToSection = (i) => {
    ref.current[i].scrollIntoView({ behavior: "smooth" });
    setCurrentSection(i);
    setActiveMenu(i);
  };

  const setActiveMenu = (i) => {
    const navItems = document.querySelectorAll(".navItem");
    navItems.forEach((navItem) => {
      navItem.classList?.remove("active");
    });
    navItems[i].classList.add("active");
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      if (currentSection < ref.current.length - 1) {
        setCurrentSection(currentSection + 1);
      }
    } else if (e.key === "ArrowUp") {
      if (currentSection > 0) {
        setCurrentSection(currentSection - 1);
      }
    }
  };

  useEffect(() => {
    if (ref.current[currentSection]) {
      gsap.to(window, {
        duration: 1,
        scrollTo: ref.current[currentSection],
      });
    }
  }, [currentSection]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    setActiveMenu(currentSection);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSection]);

  return (
    <nav className="navbar">
      <ul>
        {sections.map((title, i) => {
          return (
            <li key={`navItem${i}`}>
              <button
                className={`navItem ${i === 0 && "active"}`}
                onClick={() => scrollToSection(i)}
              >
                {title}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
});

export default NavBar;
