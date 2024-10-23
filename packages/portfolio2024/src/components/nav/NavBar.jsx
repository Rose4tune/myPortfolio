import { forwardRef, useEffect, useState } from "react";
import { sections } from "../../data/constants";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useRecoilState } from "recoil";
import { ShowNavAtom } from "../../stores";

gsap.registerPlugin(ScrollToPlugin);

const NavBar = forwardRef((props, ref) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNav, setShowNav] = useRecoilState(ShowNavAtom);

  const scrollToSection = (i) => {
    ref.current[i].scrollIntoView({ behavior: "smooth" });
    setCurrentSection(i);
    setActiveMenu(i);
  };

  const setActiveMenu = (i) => {
    const navBtns = document.querySelectorAll(".nav-menu-btn");
    navBtns.forEach((navBtns) => {
      navBtns.classList?.remove("active");
    });
    navBtns[i].classList.add("active");
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

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY || currentScrollY === 0) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.2,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = ref.current.indexOf(entry.target);
          if (!isScrolling) {
            setCurrentSection(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    ref.current.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [ref, isScrolling]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleScroll);
    setActiveMenu(currentSection);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentSection]);

  useEffect(() => {
    if (!ref.current[currentSection]) return;
    setIsScrolling(true);
    gsap.to(window, {
      duration: 1,
      scrollTo: ref.current[currentSection],
      onComplete: () => setIsScrolling(false),
    });
  }, [currentSection, ref]);

  return (
    <>
      <nav className={`nav ${showNav ? "show" : "hide"}`}>
        <ul className="nav-menu">
          {sections.map((title, i) => {
            return (
              <li key={`navItem${i}`}>
                <button
                  className={`nav-menu-btn ${i === 0 && "active"}`}
                  onClick={() => scrollToSection(i)}
                >
                  {title}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
});

export default NavBar;
