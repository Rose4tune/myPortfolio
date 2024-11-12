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
          { x: "110vw" },
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
    <Section ref={ref} className="intro font_rammettoOne" fontSize={fontSize}>
      {introTexts.map((text, i) => {
        return (
          <p
            className="intro-item"
            key={`introTextKey${i}`}
            ref={(el) => (textRefs.current[i] = el)}
          >
            {text}
          </p>
        );
      })}
      <MyChracter>
        <img src="/icons/mainCharacter.svg" alt="rose's fortune cookie" />
      </MyChracter>
    </Section>
  );
});

const Section = styled.section`
  font-size: ${(props) => props.fontSize}px;
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
