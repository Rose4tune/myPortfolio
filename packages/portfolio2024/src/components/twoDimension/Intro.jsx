import styled, { keyframes } from "styled-components";
import { introTexts } from "../../data/constants";

export default function Intro() {
  return (
    <>
      <IntroTextWrap>
        {introTexts.map((text, i) => {
          return <IntroTextBox key={`introTextKey${i}`}>{text}</IntroTextBox>;
        })}
      </IntroTextWrap>
    </>
  );
}

const sliding1 = keyframes`
  from {transform: translateX(120%)}
  to {transform: translateX(-100%)}
`;
const sliding2 = keyframes`
  from {transform: translateX(150%)}
  to {transform: translateX(-100%)}
`;
const sliding3 = keyframes`
  from {transform: translateX(120%)}
  to {transform: translateX(-100%)}
`;
const sliding4 = keyframes`
  from {transform: translateX(50%)}
  to {transform: translateX(-100%)}
`;

const IntroTextWrap = styled.div`
  position: relative;
  width: 100vw;
  height: 120vw;
  overflow: hidden;
  font-family: "Rammetto One";
  white-space: nowrap;
`;

const IntroTextBox = styled.div`
  position: absolute;
  color: var(--pink-fore-030);
  filter: drop-shadow(4rem 4rem var(--pink-fore-010));

  &:nth-child(1){
    font-size: 18rem;
    animation: ${sliding1} 10s linear infinite;
    top: 3rem;
  }
  &:nth-child(2){
    font-size: 10rem;
    animation: ${sliding2} 8s linear infinite;
    opacity: 0.6;
    top: 28rem;
  }
  &:nth-child(3){
    font-size: 10rem;
    animation: ${sliding3} 8s linear infinite;
    opacity: 0.7;
    top: 58vh;
  }
  &:nth-child(4){
    font-size: 18rem;
    animation: ${sliding4} 16s linear infinite;
    opacity: 0.6;
    top: 75vh;
  }
`;
