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
    gsap.to(".project", {
      scrollTrigger: {
        trigger: ".project",
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
    <section
      ref={ref}
      className="project"
      style={{ height: `${(projects.length + 1) * 100}vh` }}
    >
      <div className="project-stickyFrame">
        <div className="project-wrap">
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
            className="project-sparkle_double"
            src="/icons/sparkle_double.svg"
            alt="+"
          />
          <div className="project-nav">
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
                className="project-arrow_curved"
                src="/icons/arrow_curved.svg"
                alt="pointing"
              />
            </DoubleLineBox>
          </div>
          <div className="section-title font_rampartOne">Projects</div>
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
              <img
                className="project-sparkle"
                src="/icons/sparkle.svg"
                alt="+"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Projects;
