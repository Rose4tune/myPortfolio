import { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { introTexts } from "../../data/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
  const boxRef2 = useRef(null);

  useEffect(() => {
    const boxItems = gsap.context((self) => {
      const boxes = self.selector(".introTextBox");
      boxes.forEach((box) => {
        gsap.to(box, {
          opacity: 0,
          y: -200,
          z: 100,
          rotationX: 90,
          scrollTrigger: {
            trigger: box,
            start: "40% 10%",
            end: "300% 10%",
            scrub: true,
            // markers: true,
            toggleActions: "restart pause reverse pause",
          },
        });
      });
    }, boxRef2);
    return () => boxItems.revert();
  }, []);

  return (
    <>
      <IntroTextWrap ref={boxRef2}>
        {introTexts.map((text, i) => {
          return (
            <IntroTextBox
              key={`introTextKey${i}`}
              className="introTextBox frame-shadow-right"
            >
              {text}
            </IntroTextBox>
          );
        })}
      </IntroTextWrap>
    </>
  );
}

const sliding1 = keyframes`
  from {transform: translateX(100%)}
  to {transform: translateX(-100%)}
`;
const sliding2 = keyframes`
  from {transform: translateX(120%)}
  to {transform: translateX(-100%)}
`;
const sliding3 = keyframes`
  from {transform: translateX(100%)}
  to {transform: translateX(-100%)}
`;
const sliding4 = keyframes`
  from {transform: translateX(30%)}
  to {transform: translateX(-100%)}
`;

const IntroTextWrap = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  font-family: "Rammetto One";
  white-space: nowrap;
	perspective: 31.25rem;
`;

const IntroTextBox = styled.div`
  position: absolute;
  color: var(--pink-fore-030);
  /* transform: rotateX(90deg); */

  &:nth-child(1){
    font-size: 18rem;
    /* animation: ${sliding1} 10s linear infinite; */
    top: 3rem;
  }
  &:nth-child(2){
    font-size: 10rem;
    /* animation: ${sliding2} 8s linear infinite; */
    opacity: 0.6;
    top: 28rem;
  }
  &:nth-child(3){
    font-size: 10rem;
    /* animation: ${sliding3} 8s linear infinite; */
    opacity: 0.7;
    top: 58vh;
  }
  &:nth-child(4){
    font-size: 18rem;
    /* animation: ${sliding4} 16s linear infinite; */
    opacity: 0.6;
    top: 75vh;
  }
`;
