import React, { forwardRef, useState } from "react";
import styled from "styled-components";
import Caption from "./elements/Caption";

const skills = [
  {
    title: "react",
    des: "UX/UI를 고려한 개발이 가능합니다.",
  },
  {
    title: "react",
    des: "UX/UI를 고려한 개발이 가능합니다.",
  },
  {
    title: "react",
    des: "UX/UI를 고려한 개발이 가능합니다.",
  },
  {
    title: "react",
    des: "UX/UI를 고려한 개발이 가능합니다.",
  },
  {
    title: "react",
    des: "UX/UI를 고려한 개발이 가능합니다.",
  },
];

const Skills = forwardRef((props, ref) => {
  const [flippedCards, setFlippedCards] = useState(
    // Array(6).fill(false) // 6개의 카드가 모두 초기 상태에서 뒤집히지 않음
    Array(skills.length).fill(false)
  );

  const handleCardClick = (index) => {
    setFlippedCards((prevState) => {
      const newFlippedState = [...prevState];
      newFlippedState[index] = !newFlippedState[index]; // 토글 기능 구현
      return newFlippedState;
    });
  };

  return (
    <Wrap ref={ref}>
      <Board className="frameShadow_left">
        {skills.map((skill, i) => (
          <li
            key={i}
            className={`${flippedCards[i] ? "flipped" : ""}`}
            onClick={() => handleCardClick(i)}
          >
            <div className="front">
              <div className="imgWrap">
                <img src="/icons/skills/react.svg" alt="react" />
              </div>
            </div>
            <div className="back">
              <div className="title">{`${skill.title} /`}</div>
              <div className="des">{skill.des}</div>
            </div>
          </li>
        ))}
      </Board>
      <SkillBoard className="tripleLayered">
        <SkillList>
          <li>Front-end</li>
          <li>Back-end</li>
          <li>Design</li>
        </SkillList>
        <Caption type="code" />
      </SkillBoard>
    </Wrap>
  );
});

const Wrap = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4vw;
`;

const Board = styled.ul`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 3vw;
  width: 70vw;
  height: 47vw;
  padding: 15rem 20rem;
  margin: 0 0 4rem 4rem;
  background: hsl(var(--gray-back-100));
  perspective: 50rem;
  overflow-y: auto;
  scrollbar-width: thin;
  border: 1px solid hsl(var(--pink-back-070));
  z-index: 50;

  li {
    width: 13vw;
    height: 13vw;
    background: hsl(var(--pink-back-090));
    border: 1px solid hsl(var(--pink-back-070));
    word-break: break-all;

    position: relative;
    transform-style: preserve-3d;
    transform: rotateY(0deg);
    transition: .5s;

    .front {
      width: 100%;
      height: 100%;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      backface-visibility: hidden;

      &:hover {
        background: hsl(var(--pink-back-070));
      }
    }

    .imgWrap {
      width: 70%;
      height: 70%;
    }

    .back {
      width: 100%;
      height: 100%;
      position: absolute;
      padding: 1.5rem;
      backface-visibility: hidden;
      transform: rotateY(180deg);

      .title {
        padding-bottom: 1rem;
        margin-bottom: 1rem;
        border-bottom: 2px solid hsl(var(--pink-back-070));
        font-family: 'Noto Sans';
        font-weight: 800;
        text-transform: uppercase;

        &::before {
          display: inline-block;
          content: url(/icons/arrow_black.svg);
          transform: translate(-2px, 2px);
        }
        &::after {
          display: inline-block;
          content: url(/icons/arrow_black.svg);
          transform: translate(2px, 2px) rotateY(180deg);
        }
      }
      .des {
        padding: .5rem;
        font-size: 1.8rem;
        line-height: 1.2;
      }
    }

    &.flipped {
      transform: rotateY(-180deg) translateZ(-15rem);
      filter: none;
      z-index: 100;
      box-shadow: 1rem 1rem 1.5rem hsla(var(--pink-back-070), .5);
      background: hsl(var(--gray-back-100));

      &:hover {
        background: hsl(var(--pink-back-100));
      }
    }
  }
`;

const SkillBoard = styled.div`
  width: 15vw;
  height: 20vw;
  margin-bottom: 5rem;
  background: url(/images/skill-bg.svg)no-repeat center center;
  background-size: contain;
  border: none;

  &::before {
    width: 90%;
    height: 90%;
    top: 6rem;
    left: -2rem;
    background: hsl(var(--pink-back-100));
  }
  &::after {
    width: 90%;
    height: 90%;
    top: 7.5rem;
    left: -3.5rem;
    background: hsl(var(--pink-back-100));
  }

  .caption {
    position: absolute;
    text-align: left;
    bottom: -9rem;
    left: -3rem;
    
    &-link {
      margin-left: 0;
    }
  }
`;

const SkillList = styled.ul`
  width: calc(100% - 6rem);
  height: 78%;
  margin: 19% 3rem;
  line-height: 1.6;
  font-size: 3rem;
  font-weight: 600;
  color: hsl(var(--pink-fore-030));

  li {
    cursor: pointer;
    
    &::before {
      display: inline-block;
      content: "*";
      margin-right: .5rem;
      transform: translateY(.5rem);
    }
  }
`;

export default Skills;
