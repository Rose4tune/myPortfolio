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
                className={`project-picture-img ${
                  i === activeIndex ? " active" : ""
                }`}
              />
            ))}
            <div className="font_rampartOne">Project</div>
          </div>
          <img
            className="sparkle_double"
            src="/icons/sparkle_double.svg"
            alt="+"
          />
          <DoubleLineWrap>
            <DoubleLineBox
              contents={projects.map(({ key, value }, i) => ({
                key,
                value,
                isActive: i === activeIndex,
              }))}
              style={{
                position: "relative",
              }}
            >
              <img
                className="arrow_curved"
                src="/icons/arrow_curved.svg"
                alt="pointing"
              />
            </DoubleLineBox>
          </DoubleLineWrap>
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
              <Sparkle className="sparkle" src="/icons/sparkle.svg" alt="+" />
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
    hsla(var(--pink-back-090), .8) 30%,
    hsla(var(--pink-back-080), .6) 60%,
    hsl(var(--pink-back-080), .8) 100%
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

  .sparkle_double {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate(100%, 100%);
    width: 5.5vw; //105
  }

`;

const DoubleLineWrap = styled.div`
  position: static;
  margin-top: 5vh;

  .doubleLine {
    .arrow_curved {
      width: 14.6vh; //158
      position: absolute;
      bottom: 0;
      right: 0;
      transform: translate(-30%, 110%);
    }
  }
`;

const Sparkle = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 2.24vw; //43
  transform: translate(-150%, 50%);
`;

export default Projects;
