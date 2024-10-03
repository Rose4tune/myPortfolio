import { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { introTexts } from "../../data/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
  const boxRef2 = useRef(null);
  const textRefs = useRef([]);

  const textDurations = [8, 6, 9, 16];

  useEffect(() => {
    if (!textRefs.current[0]) return;
    textRefs.current.forEach((starRef, i) => {
      if (starRef) {
        gsap.fromTo(
          starRef,
          { x: "100%" },
          {
            duration: textDurations[i],
            repeat: -1,
            ease: "linear",
            x: "-100%",
          }
        );
      }
    });
  }, [textRefs.current]);

  useEffect(() => {
    const boxItems = gsap.context((self) => {
      const boxes = self.selector(".introTextBox");
      boxes.forEach((box) => {
        gsap.to(box, {
          opacity: 0,
          y: -100,
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
              ref={(el) => (textRefs.current[i] = el)}
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

const IntroTextWrap = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  font-family: "Rammetto One";
  white-space: nowrap;
`;

const IntroTextBox = styled.p`
  position: absolute;
  color: var(--pink-fore-030);

  &:nth-child(1){
    font-size: 18rem;
    top: 3rem;
  }
  &:nth-child(2){
    font-size: 10rem;
    opacity: 0.6;
    top: 28rem;
  }
  &:nth-child(3){
    font-size: 10rem;
    opacity: 0.7;
    bottom: 31rem;
  }
  &:nth-child(4){
    font-size: 18rem;
    opacity: 0.6;
    bottom: 6rem;
  }
`;
