import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import styled from "styled-components";

// gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// 섹션 배열 정의
// const sections = ["Home", "About"];

export default function Nav() {
  // const navRefs = useRef([]); // 네비게이션 항목 레퍼런스 저장
  // const sectionRefs = useRef([]); // 섹션 레퍼런스 저장

  // // 네비게이션 항목 활성화 함수
  // const setActiveNav = (index) => {
  //   navRefs.current.forEach((nav, i) => {
  //     if (i === index) {
  //       nav.classList.add("active"); // 활성화 클래스 추가
  //     } else {
  //       nav.classList.remove("active"); // 다른 항목은 비활성화
  //     }
  //   });
  // };

  // useEffect(() => {
  //   // 스크롤 트리거 및 활성 네비게이션 설정
  //   gsap.utils.toArray(sectionRefs.current).forEach((section, index) => {
  //     ScrollTrigger.create({
  //       trigger: section,
  //       start: "top center", // 섹션의 top이 화면 중앙에 오면 트리거
  //       end: "bottom center",
  //       onEnter: () => setActiveNav(index), // 섹션 진입 시 활성화
  //       onLeaveBack: () => setActiveNav(index - 1), // 이전 섹션으로 돌아갈 때
  //       onEnterBack: () => setActiveNav(index), // 위로 스크롤할 때도 활성화
  //       scrub: 1, // 부드러운 스크롤 효과
  //       snap: 1 / sections.length, // 각 섹션별로 스냅(멈춤) 설정
  //     });
  //   });

  //   // 스크롤 스냅 설정
  //   ScrollTrigger.create({
  //     trigger: ".container",
  //     start: "top top",
  //     end: "bottom bottom",
  //     snap: {
  //       snapTo: 1 / sections.length, // 섹션별 스냅
  //       duration: 0.8, // 스냅되는 시간
  //       ease: "power2.inOut", // 부드러운 ease 효과
  //       inertia: false, // 스크롤 관성 제거
  //     },
  //   });
  // }, []);

  let panels = gsap.utils.toArray(".section"),
    observer = ScrollTrigger.normalizeScroll(true),
    scrollTween;

  // on touch devices, ignore touchstart events if there's an in-progress tween so that touch-scrolling doesn't interrupt and make it wonky
  document.addEventListener(
    "touchstart",
    (e) => {
      if (scrollTween) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    },
    { capture: true, passive: false }
  );

  function goToSection(i) {
    scrollTween = gsap.to(window, {
      scrollTo: { y: i * innerHeight, autoKill: false },
      onStart: () => {
        observer.disable(); // for touch devices, as soon as we start forcing scroll it should stop any current touch-scrolling, so we just disable() and enable() the normalizeScroll observer
        observer.enable();
      },
      duration: 1,
      onComplete: () => (scrollTween = null),
      overwrite: true,
    });
  }

  panels.forEach((panel, i) => {
    ScrollTrigger.create({
      trigger: panel,
      start: "top bottom",
      end: "+=199%",
      onToggle: (self) => self.isActive && !scrollTween && goToSection(i),
    });
  });

  // just in case the user forces the scroll to an inbetween spot (like a momentum scroll on a Mac that ends AFTER the scrollTo tween finishes):
  ScrollTrigger.create({
    start: 0,
    end: "max",
    snap: 1 / (panels.length - 1),
  });

  return (
    <>
      {/* <Parallax__nav id="parallax__nav">
        <ul>
          <li>
            <a href="#intro" className="active">
              intro
            </a>
          </li>
          <li>
            <a href="#about">about</a>
          </li>
        </ul>
      </Parallax__nav> */}

      {/* <nav className="navbar">
        {sections.map((section, i) => (
          <a
            key={section}
            ref={(el) => (navRefs.current[i] = el)} // 각 네비게이션 항목에 ref 할당
            href={`#${section.toLowerCase()}`} // 앵커 링크 설정
            className="nav-link"
          >
            {section}
          </a>
        ))}
      </nav> */}
    </>
  );
}

const Parallax__nav = styled.nav`
  position: fixed;
  right: 20px;
  top: 20px;
  z-index: 1000;
  background-color: var(--pink-back-090);
  padding: 1rem;
  border-radius: 10rem;
  
  li {
    list-style: none;
    display: inline;
  }
  li a {
    display: inline-block;
    padding: 0 0.5rem;
    text-align: center;
    color: var(--gray-fore-020);
  }
  li a.active {
    color: var(--pink-fore-040);
    border-radius: 5rem;
  }
`;
