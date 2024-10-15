import React, { forwardRef } from "react";
import styled from "styled-components";
import Caption from "./elements/Caption";

const Skills = forwardRef((props, ref) => {
  return (
    <Wrap ref={ref}>
      <Board>
        <BoardItem className="frameShadow_left">
          <img src="/icons/skills/react.svg" alt="react" />
        </BoardItem>
        <BoardItem className="frameShadow_left">
          <img src="/icons/skills/react.svg" alt="react" />
        </BoardItem>
        <BoardItem className="frameShadow_left">
          <img src="/icons/skills/react.svg" alt="react" />
        </BoardItem>
        <BoardItem className="frameShadow_left">
          <img src="/icons/skills/react.svg" alt="react" />
        </BoardItem>
        <BoardItem className="frameShadow_left">
          <img src="/icons/skills/react.svg" alt="react" />
        </BoardItem>
        <BoardItem className="frameShadow_left">
          <img src="/icons/skills/react.svg" alt="react" />
        </BoardItem>
        <BoardItem className="frameShadow_left">
          <img src="/icons/skills/react.svg" alt="react" />
        </BoardItem>
        <BoardItem className="frameShadow_left">
          <img src="/icons/skills/react.svg" alt="react" />
        </BoardItem>
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
  gap: 8rem;
  width: 70vw;
  height: 36.5vw;
  padding-left: 4rem;
  background: hsl(var(--gray-back-100));
  overflow-y: auto;
  scrollbar-width: thin;
`;

const BoardItem = styled.li`
  width: 13vw;
  height: 13vw;
  background: hsl(var(--pink-back-090));
  border: 1px solid hsl(var(--pink-back-070));
  word-break: break-all;
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
    
    span {
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
    &::before {
      display: inline-block;
      content: "*";
      margin-right: .5rem;
      transform: translateY(.5rem);
    }

  }
`;

export default Skills;
