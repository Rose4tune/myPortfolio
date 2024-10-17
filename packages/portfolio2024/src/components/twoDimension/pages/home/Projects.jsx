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
      <StickyFrame className="stickyFrame">
        <Wrap className="projcetWrap">
          <PictureBox>
            {projects.map(({ img }, i) => (
              <img
                key={i}
                src={`/images/projects/${img}.jpg`}
                alt={img}
                className={i === activeIndex ? "active" : ""}
              />
            ))}
            <div className="font_rampartOne">Project</div>
          </PictureBox>
          <DoubleLineBox
            contents={projects.map(({ key, value }, i) => ({
              key,
              value,
              isActive: i === activeIndex,
            }))}
            style={{ position: "static", marginTop: "5vh" }}
          />
          <ProjectDetail>
            <div className="tripleLayered">
              {projects.map(({ title, period, role, des, link }, i) => (
                <div
                  key={`project${i}`}
                  className={`projectDetail-wrap ${
                    i === activeIndex ? "active" : ""
                  }`}
                >
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

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    object-fit: cover;
  }

  img.active {
    opacity: 1;
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
      display: none;
      padding-bottom: 2rem;
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.3s ease, transform 0.3s ease;

      &.active {
        display: block;
        width: 100%;
        height: 100%;
        opacity: 1;
        transform: translateY(0);
      }
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
