import { forwardRef, useEffect, useState } from "react";
import DoubleLineBox from "./elements/DoubleLineBox";
import { useRecoilValue } from "recoil";
import { LanguageAtom } from "../../../../stores";
import Caption from "./elements/Caption";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import getData from "../../../../api/getData";

gsap.registerPlugin(ScrollTrigger);

const Projects = forwardRef((props, ref) => {
  const language = useRecoilValue(LanguageAtom);
  const [activeIndex, setActiveIndex] = useState(0);
  const projects = getData("projects");

  useEffect(() => {
    if (projects.length === 0) return;

    gsap.to(".project", {
      scrollTrigger: {
        trigger: ".project",
        start: "0% bottom",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          const index = Math.floor(self.progress * projects.length);
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
              contents={projects.map(({ title, sub_title }, i) => ({
                key: sub_title,
                value: title,
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
              {projects.map(
                ({ title, sub_title, period, stack, des, link }, i) => (
                  <div
                    key={`project${i}`}
                    className={`project-detail-wrap ${
                      i === activeIndex ? "active" : ""
                    }`}
                  >
                    <h3 className="project-detail-title">
                      {`${title} ${sub_title}`}
                      <span className="project-detail-period">'{period}</span>
                    </h3>
                    <p className="project-detail-stack">{stack}</p>
                    <div className="project-detail-des">{des[language]}</div>
                    <Caption type="more" getlink={link} />
                  </div>
                )
              )}
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
