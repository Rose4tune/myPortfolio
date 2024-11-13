import React, { forwardRef, useEffect, useState } from "react";
import Caption from "./elements/Caption";
import { useRecoilValue } from "recoil";
import { LanguageAtom } from "../../../../stores";
import getData from "../../../../api/getData";

const Skills = forwardRef((props, ref) => {
  const skills = getData("skills");
  const language = useRecoilValue(LanguageAtom);
  const [selectedTab, setSelectedTab] = useState("frontend");
  const [flippedCards, setFlippedCards] = useState(
    Array(skills[selectedTab]).fill(false)
  );

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    setFlippedCards(Array(skills[selectedTab]).fill(false));
  };

  const handleCardClick = (i) => {
    setFlippedCards((prevState) => {
      const newFlippedState = [...prevState];
      newFlippedState[i] = !newFlippedState[i];
      return newFlippedState;
    });
  };

  if (skills.length === 0) return;

  return (
    <section ref={ref} className="skills">
      <ul className="frameShadow_left skills-board">
        {skills[selectedTab].map(({ title, des, per }, i) => {
          const Title = <div className="skills-item-title">{`${title} /`}</div>;
          const cardBg = {
            background: `
              linear-gradient(
              180deg,
              hsl(var(--gray-back-100)) ${100 - per}%,
              hsla(var(--pink-back-080), 0.7) ${100 - per + 10}%,
              hsla(var(--pink-back-080), 0.7) 100%)`,
          };

          return (
            <li
              key={i}
              className={`skills-item${flippedCards[i] ? " flipped" : ""}`}
              onClick={() => handleCardClick(i)}
            >
              <div className="skills-front" style={cardBg}>
                <div className="skills-front-imgWrap">
                  <img
                    src={`/icons/skills/${title.toLowerCase()}.png`}
                    alt={title}
                  />
                </div>
                {Title}
              </div>
              <div className="skills-back" style={cardBg}>
                {Title}
                <div className="skills-back-des">{des[language]}</div>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="skills-navWrap">
        <div className="section-title font_rampartOne">
          The skills{"\n"}I can handle
        </div>
        <ul className="tripleLayered skills-nav">
          {Object.keys(skills).map((key, i) => (
            <li
              key={`skillNavItem${i}`}
              className={`skills-nav-menu${
                selectedTab === key ? " active" : ""
              }`}
              onClick={() => handleTabClick(key)}
            >
              {key}
            </li>
          ))}
        </ul>
        <Caption type="code" isBlock={true} />
      </div>
    </section>
  );
});

export default Skills;
