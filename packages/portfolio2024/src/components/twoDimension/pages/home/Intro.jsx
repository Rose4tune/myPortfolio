import { forwardRef, useEffect, useRef } from "react";
import styled from "styled-components";
import { introTexts } from "../../../../data/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRecoilValue } from "recoil";
import { windowSizeAtom } from "../../../../stores";

gsap.registerPlugin(ScrollTrigger);

const Intro = forwardRef((props, ref) => {
  const textRefs = useRef([]);
  const textDurations = [12, 9, 14, 24];
  const windowSize = useRecoilValue(windowSizeAtom);
  const fontSize =
    windowSize.height < 400
      ? 3
      : windowSize.height < 490
      ? 4
      : windowSize.height < 570
      ? 5
      : windowSize.height < 670
      ? 6
      : windowSize.height < 810
      ? 7
      : 10;

  useEffect(() => {
    if (!textRefs.current[0]) return;

    textRefs.current.forEach((textRef, i) => {
      if (textRef) {
        const anim = gsap.fromTo(
          textRef,
          { x: "130%" },
          {
            duration: textDurations[i],
            repeat: -1,
            ease: "linear",
            x: "-100%",
          }
        );

        ScrollTrigger.create({
          trigger: ref.current,
          start: "top top",
          end: "10% 30%",
          onLeave: () => anim.pause(),
          onEnterBack: () => anim.play(),
        });
      }
    });
  }, [textRefs.current, ref]);

  return (
    <Section ref={ref} className="font_rammettoOne" fontSize={fontSize}>
      {introTexts.map((text, i) => {
        return (
          <IntroTextBox
            key={`introTextKey${i}`}
            ref={(el) => (textRefs.current[i] = el)}
            className="introTextBox"
          >
            {text}
          </IntroTextBox>
        );
      })}
      <MyChracter>
        <img src="/icons/mainCharacter.svg" alt="rose's fortune cookie" />
      </MyChracter>
    </Section>
  );
});

const Section = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  white-space: nowrap;
  font-size: ${(props) => props.fontSize}px;
`;

const IntroTextBox = styled.p`
  position: absolute;
  color: hsl(var(--pink-fore-030));
  text-shadow: .25em .25em 0 hsl(var(--pink-fore-020));

  &:nth-child(1){
    font-size: 18em;
    top: 3vh;//30
  }
  &:nth-child(2){
    font-size: 10em;
    opacity: 0.6;
    top: 27vh;//280
  }
  &:nth-child(3){
    font-size: 10em;
    opacity: 0.7;
    bottom: 30vh;//310
  }
  &:nth-child(4){
    font-size: 18em;
    opacity: 0.6;
    bottom: 5.6vh;//60
  }
`;

const MyChracter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 15vw;
  max-width: 195px;
  min-width: 10rem;
  transform: translate(-50%, -50%);
`;

export default Intro;
