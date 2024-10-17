import { forwardRef, useEffect, useState } from "react";
import styled from "styled-components";
import DoubleLineBox from "./elements/DoubleLineBox";
import { useRecoilValue } from "recoil";
import { LanguageAtom } from "../../../../stores";
import TripleLayeredBox from "./elements/TripleLayeredBox";
import Caption from "./elements/Caption";

const projectList = [
  {
    key: "Scheduling Service",
    value: "DATE LEAF",
    title: {
      ko: "DATE LEAF 스케쥴링 서비스",
      en: "DATE LEAF scheduling service",
    },
    period: "24.3~5",
    role: "Design / UXUI / React / TypeScript",
    des: {
      ko: "",
      en: "",
    },
    link: "https://www.date-leaf.com/",
    img: "dateleaf",
  },
  {
    key: "Homepage",
    value: "mendel’s",
    title: {
      ko: "MENDEL'S 홈페이지",
      en: "MENDEL'S homepage",
    },
    period: "21~24",
    role: "JavaScript / Sass / Data Visualization",
    des: {
      ko: "",
      en: "",
    },
    link: "https://service.mendels.me/",
    img: "mendels",
  },
  {
    key: "portfolio page",
    value: "ROES'S PORTFOLIO",
    title: {
      ko: "포트폴리오 2024",
      en: "PORTFOLIO 2024",
    },
    period: "24.9~10",
    role: "Design / UXUI / React / R3F / Supabase",
    des: {
      ko: "",
      en: "",
    },
    link: "http://dlfly.seoul.kr/",
    img: "portfolio2024",
  },
  {
    key: "Shopping Mall Page",
    value: "UNKNOWN",
    title: {
      ko: "UNKNOWN 쇼핑몰 페이지",
      en: "UNKNOWN shopping mall page",
    },
    period: "20.10",
    role: "Design / UXUI / JavaScript",
    des: {
      ko: "",
      en: "",
    },
    link: "",
    img: "unknown",
  },
  {
    key: "Advertising Page",
    value: "O-MANAGER",
    title: {
      ko: "",
      en: "",
    },
    period: "20.01",
    role: "",
    des: {
      ko: "",
      en: "",
    },
    link: "http://www.omanager.kr/",
    img: "omanager",
  },
];

const Projects = forwardRef((props, ref) => {
  const language = useRecoilValue(LanguageAtom);

  return (
    <Section
      ref={ref}
      style={{ height: `${(projectList.length + 1) * 100}vh` }}
    >
      <StickyFrame>
        <Wrap>
          <PictureBox>
            <img src="/images/projects/danceweb.jpg" alt="dance web" />
            <div className="font_rampartOne">Project</div>
          </PictureBox>
          <DoubleLineBox
            contents={projectList}
            style={{ position: "static", marginTop: "5vh" }}
          />
          <ProjectDetail>
            <div className="tripleLayered">
              {projectList.map(({ title, period, role, des, link }, i) => (
                <div key={`project${i}`} className="projectDetail-wrap">
                  <h3 className="projectDetail-title">
                    {title[language]}
                    <span className="projectDetail-period">'{period}</span>
                  </h3>
                  <p className="projectDetail-role">{role}</p>
                  <div className="projectDetail-des">{des[language]}</div>
                  <Caption type="more" link={link} />
                </div>
              ))}
            </div>
          </ProjectDetail>
        </Wrap>
      </StickyFrame>
    </Section>
  );
});

const Section = styled.section`
  position: relative;
  width: 100vw;
  background: linear-gradient(
    180deg,
    hsl(var(--gray-back-100)) 0%,
    hsla(var(--pink-back-090),.8) 30%,
    hsla(var(--pink-back-080),.6) 60%,
    hsl(var(--pink-back-080)) 100%
  );
`;

const StickyFrame = styled.div`
  position: sticky;
  top: 11vh;
  margin: 11vh 0 16.7vh;
`;

const Wrap = styled.div`
  display: flex;
  gap: 3rem;
  align-items: flex-start;
  justify-content: center;
  position: relative;

`;

const PictureBox = styled.div`
  position: relative;
  width: 60vw;
  height: 70vh;
  outline: 2rem solid hsla(var(--pink-back-060), .3);
  border: 2px solid hsl(var(--white));
  z-index: -2;
  overflow: hidden;

  &::after {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: hsla(var(--gray-fore-080), .1);
    background-blend-mode: multiply;
  }

  .font_rampartOne {
    position: absolute;
    bottom: 3rem;
    left: 2rem;
    font-size: 9rem;
    color: hsl(var(--white));
    z-index: 10;
  }
`;

const ProjectDetail = styled.div`
  position: absolute;
  bottom: -9.4vh;
  left: 34vw;

  .tripleLayered,
  .tripleLayered::before,
  .tripleLayered::after {
    background: linear-gradient(
      250deg,
      hsla(var(--gray-back-100), 0.1) 0%,
      hsl(var(--gray-back-100), 0.8) 40%
    );
  }

  .tripleLayered {
    width: 52vw;
    height: 39.8vh;
    padding: 4rem;
  }

  .projectDetail {
    &-wrap {
      position: relative;
      width: 100%;
      height: 100%;
      padding-bottom: 2rem;
    }
    &-title {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      font-size: 2.8rem;
      font-weight: 600;
    }
    &-period {
      font-size: 2rem;
      font-weight: 400;
      color: hsl(var(--gray-fore-040));
    }
    &-role {
      margin: 1rem 0;
    }
    &-des {
      column-count: 2;
      column-gap: 3rem;
    }
  }

  .caption {
    bottom: 0;
    left: 0;
  }
`;

export default Projects;
