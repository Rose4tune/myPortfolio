import { forwardRef, useEffect, useState } from "react";
import styled from "styled-components";
import DoubleLineBox from "./elements/DoubleLineBox";
import { useRecoilValue } from "recoil";
import { LanguageAtom } from "../../../../stores";
import Caption from "./elements/Caption";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../../../../data/projects";

gsap.registerPlugin(ScrollTrigger);

const Projects = forwardRef((props, ref) => {
  const language = useRecoilValue(LanguageAtom);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    gsap.to(".projectSection", {
      scrollTrigger: {
        trigger: ".projectSection",
        start: "0% bottom",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          const index = Math.floor(self.progress * projects.length - 1);
          setActiveIndex(index);
        },
      },
    });
  }, [projects, setActiveIndex]);

  return (
    <Section
      ref={ref}
      className="projectSection"
      style={{ height: `${(projects.length + 1) * 100}vh` }}
    >
      <StickyFrame>
        <Wrap>
          <div className="project-picture">
            {projects.map(({ img }, i) => (
              <img
                key={i}
                src={`/images/projects/${img}.jpg`}
                alt={img}
                className={i === activeIndex ? "active" : ""}
              />
            ))}
            <div className="font_rampartOne">Project</div>
          </div>
          <DoubleLineBox
            contents={projects.map(({ key, value }, i) => ({
              key,
              value,
              isActive: i === activeIndex,
            }))}
            style={{ position: "static", marginTop: "5vh" }}
          />
          <div className="project-detail">
            <div className="tripleLayered">
              {projects.map(({ title, period, role, des, link }, i) => (
                <div
                  key={`project${i}`}
                  className={`project-detail-wrap ${
                    i === activeIndex ? "active" : ""
                  }`}
                >
                  <h3 className="project-detail-title">
                    {title[language]}
                    <span className="project-detail-period">'{period}</span>
                  </h3>
                  <p className="project-detail-role">{role}</p>
                  <div className="project-detail-des">{des[language]}</div>
                  <Caption type="more" link={link} />
                </div>
              ))}
            </div>
          </div>
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

export default Projects;
