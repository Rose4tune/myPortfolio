import React, { forwardRef, useState } from "react";
import Caption from "./elements/Caption";
import { skills } from "../../../../data/skills";
import { useRecoilValue } from "recoil";
import { LanguageAtom } from "../../../../stores";

const Skills = forwardRef((props, ref) => {
  const language = useRecoilValue(LanguageAtom);
  const [selectedTab, setSelectedTab] = useState("front");
  const [flippedCards, setFlippedCards] = useState(
    Array(skills[selectedTab]).fill(false)
  );

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const handleCardClick = (i) => {
    setFlippedCards((prevState) => {
      const newFlippedState = [...prevState];
      newFlippedState[i] = !newFlippedState[i];
      return newFlippedState;
    });
  };

  return (
    <div ref={ref} className="skills">
      <ul className="frameShadow_left skills-board">
        {skills[selectedTab].map(({ title, des }, i) => (
          <li
            key={i}
            className={`${flippedCards[i] ? "flipped" : ""}`}
            onClick={() => handleCardClick(i)}
          >
            <div className="front">
              <div className="imgWrap">
                <img src={`/icons/skills/${title}.png`} alt={title} />
              </div>
            </div>
            <div className="back">
              <div className="title">{`${title} /`}</div>
              <div className="des">{des[language]}</div>
            </div>
          </li>
        ))}
      </ul>
      <div className="tripleLayered skills-menubar">
        <ul className="skills-menus">
          {Object.keys(skills).map((key, i) => {
            console.log(key);
            return (
              <li
                key={`skillMenu${i}`}
                className={selectedTab === key ? "active" : ""}
                onClick={() => handleTabClick(key)}
              >
                {key}
              </li>
            );
          })}
        </ul>
        <Caption type="code" />
      </div>
    </div>
  );
});

export default Skills;
