import { forwardRef, useEffect, useState } from "react";
import DoubleLineBox from "./elements/DoubleLineBox";
import { useRecoilValue } from "recoil";
import { LanguageAtom } from "../../../../stores";
import Caption from "./elements/Caption";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import getData from "../../../../api/getData";
import ProjectFeature from "./elements/ProjectFeature";

gsap.registerPlugin(ScrollTrigger);

const Projects = forwardRef((props, ref) => {
  const language = useRecoilValue(LanguageAtom);
  const [activeIndex, setActiveIndex] = useState(0);
  const projects = getData("projects");

  useEffect(() => {
    if (projects.length === 0) return;

    const trigger = ScrollTrigger.create({
      trigger: ".project",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      onUpdate: (self) => {
        let index = Math.floor(self.progress * projects.length);
        if (self.progress === 1) {
          index = projects.length - 1;
        }
        setActiveIndex(index);
      },
    });

    return () => {
      trigger.kill();
      setActiveIndex(0);
    };
  }, [projects, ref]);

  return (
    <section
      ref={ref}
      className="project"
      style={{ height: `${projects.length * 100}vh` }}
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
              isBold={false}
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
                (
                  { title, sub_title, period, stack, des, link, features },
                  i
                ) => (
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
                    <div className="project-detail-desWrap">
                      <div className="project-detail-des">
                        {des[language].split(`\n`).map((para, i) => (
                          <p key={`projectDesPara${i}`}>{para}</p>
                        ))}
                        {ProjectFeature(features[language])}
                      </div>
                    </div>
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
