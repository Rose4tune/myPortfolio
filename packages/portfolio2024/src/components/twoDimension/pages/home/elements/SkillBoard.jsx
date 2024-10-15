import React from "react";
import styled from "styled-components";

const SkillBoard = () => {
  return (
    <Wrap className="tripleLayered">
      <SkillWrap>
        <SkillHeader>
          <img src="/icons/white_queen.svg" alt="queen" />
          Main Skill
        </SkillHeader>
        <SkillContent>
          <li>
            <div className="title">REACT /</div>
            <div className="des">
              <img src="/icons/skills/react.svg" alt="react" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ab ad
              nesciunt, vel autem maxime! Quidem voluptate ducimus perspiciatis
              earum? Asperiores aliquid deserunt dicta quas nostrum recusandae
              odio reiciendis dolores.
            </div>
          </li>
        </SkillContent>
      </SkillWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 27vw;
  height: 40vw;
  margin-bottom: 5rem;
  background: url(/images/skill-bg.svg)no-repeat center center;
  background-size: contain;
  border: none;

  &::before {
    height: 90%;
    top: 10rem;
    left: -5rem;
    background: hsl(var(--pink-back-100));
  }
  &::after {
    height: 90%;
    top: 11.5rem;
    left: -6.5rem;
    background: hsl(var(--pink-back-100));
  }
`;

const SkillWrap = styled.div`
  width: calc(100% - 6rem);
  height: 78%;
  margin: 22% 3rem;
`;

const SkillHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-bottom: 2rem;
  margin-bottom: 3rem;
  font-size: 3rem;
  font-weight: 600;
  color: hsl(var(--pink-fore-030));
  border-bottom: 2px solid hsl(var(--red-back-040));

  img {
    width: 5rem;
  }
`;

const SkillContent = styled.ul`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  overflow-y: auto;
  scrollbar-width: thin;

  li {
    margin-right: .5rem;
  }

  .title {
    font-family: "Noto Sans";
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
    margin-top: 1rem;
    word-break: break-all;

    img {
      width: 5rem;
      margin-right: 1rem;
      float: left;
    }
  }
`;

export default SkillBoard;
