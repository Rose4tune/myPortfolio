import { forwardRef, useEffect, useState } from "react";
import styled from "styled-components";
import DoubleLineBox from "./elements/DoubleLineBox";
import { useRecoilValue } from "recoil";
import { LanguageAtom } from "../../../../stores";
import TripleLayeredBox from "./elements/TripleLayeredBox";

const projectList = [
  {
    key: "Scheduling Service",
    value: "DATE LEAF",
    bg: "/images/projects/dateleaf.jpg",
  },
  { key: "Homepage", value: "mendel’s", bg: "/images/projects/mendels.jpg" },
  { key: "My Music Page", value: "RECODE", bg: "/images/projects/recode.jpg" },
  {
    key: "Dashboard Page",
    value: "DASHBOARD",
    bg: "/images/projects/dashboard.jpg",
  },
  {
    key: "Shopping Mall Page",
    value: "UNKNOWN",
    bg: "/images/projects/unknown.jpg",
  },
  {
    key: "Advertising Page",
    value: "O-MANAGER",
    bg: "/images/projects/omanager.jpg",
  },
];

const Projects = forwardRef((props, ref) => {
  const language = useRecoilValue(LanguageAtom);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  // 스크롤 이벤트로 프로젝트 탭과 배경 이미지 변경
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const projectIndex = Math.min(
      projectList.length - 1,
      Math.floor(scrollY / (window.innerHeight / projectList.length))
    );
    setActiveProjectIndex(projectIndex);
  };

  useEffect(() => {
    // 스크롤 이벤트 리스너 추가
    window.addEventListener("scroll", handleScroll);
    return () => {
      // 컴포넌트 언마운트 시 이벤트 리스너 제거
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Section ref={ref}>
      <StickyFrame>
        <Wrap>
          <PictureBox />
          <div className="font_rampartOne">Project</div>
          <DoubleLineBox
            contents={projectList}
            style={{ position: "static", marginTop: "5vh" }}
          />
          <TripleLayeredBox
            contents={
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores aspernatur, vero maiores deleniti, ullam laborum magni odit nemo illum alias expedita molestias consequatur, veniam ut mollitia libero fugit? Sed, facere."
            }
            position={{
              bottom: "-7.4vh",
              left: "34vw",
              transform: "none",
            }}
            style={{
              width: "52vw",
              height: "39.8vh",
              padding: "5rem 4rem",
            }}
            classNames=""
          />
        </Wrap>
      </StickyFrame>
    </Section>
  );
});

const Section = styled.section`
  position: relative;
  width: 100vw;
  height: 600vh;
  background: linear-gradient(
    180deg,
    hsl(var(--gray-back-100)) 10%,
    hsl(var(--pink-back-080)) 100%
  );
`;

const StickyFrame = styled.div`
  position: sticky;
  top: 9vh;
  margin-bottom: 16.7vh;
`;

const Wrap = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  position: relative;

  .font_rampartOne {
    position: absolute;
    bottom: 5rem;
    left: 12.5vw;
    font-size: 9rem;
    color: hsl(var(--white))
  }
`;

const PictureBox = styled.div`
  width: 62vw;
  height: 74vh;
  padding: 2px;
  background: url(/images/projects/danceweb.jpg) no-repeat center center content-box;
  background-size: cover;
  border: 2rem solid hsla(var(--pink-back-060), .3);
  z-index: -2;
`;

export default Projects;
