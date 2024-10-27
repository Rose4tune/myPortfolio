import { forwardRef } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { LanguageAtom, windowSizeAtom } from "../../../../stores";
import DoubleLineBox from "./elements/DoubleLineBox";
import TripleLayeredBox from "./elements/TripleLayeredBox";
import Caption from "./elements/Caption";
import { introduction, keywords, information } from "../../../../data/about";
import { getGreetings, getSayHello } from "../../../../data/getAbout";

const About = forwardRef((props, ref) => {
  const language = useRecoilValue(LanguageAtom);
  const windowSize = useRecoilValue(windowSizeAtom);
  const infoSize =
    windowSize.width < 1300 ? 35 : windowSize.width < 1600 ? 33 : 27;
  const isPortrait = windowSize.orientation === "portrait";

  return (
    <Section ref={ref}>
      <ImgBox1>
        <img src="/images/flower-img1.jpg" alt="flower picture" />
      </ImgBox1>

      <ProfileBox1>
        <img
          className="frameShadow_right"
          src="/images/profile1.jpg"
          alt="flower picture"
        />
        {getSayHello(language)}
        <Caption type="resume" />
        <img
          className="icon_smile"
          src="/icons/sparkle_smile.svg"
          alt="smile"
        />
        <img className="sparkle_hello" src="/icons/sparkle.svg" alt="+" />
      </ProfileBox1>

      <TripleLayeredBox
        contents={getGreetings(language)}
        position={{
          top: "17vh",
          left: "50%",
        }}
        style={{
          padding: "2rem 4rem",
        }}
        redText={true}
      />

      <DoubleLineBox
        contents={introduction[language]}
        even={true}
        style={{
          top: "28%",
          left: "66vw",
          transform: "translate(-50%, -50%)",
        }}
      />

      <Keywords
        style={
          language === "ko"
            ? {
                transform: "scale(.9)",
                transformOrigin: "top right",
              }
            : {}
        }
      >
        {keywords[language]}
      </Keywords>

      <ProfileBox2>
        <img
          className="frameShadow_left"
          src="/images/profile2.jpg"
          alt="flower picture"
        />
        <img
          className="bgImg"
          src="/images/flower-img2.jpg"
          alt="flower picture"
        />
        <img className="fyi" src="/images/FYI.svg" alt="for your information" />
        <img
          className="sparkle_roseL"
          src="/icons/sparkle_roseL.svg"
          alt="rose icon"
        />
      </ProfileBox2>

      <ImgBox3>
        <div
          style={{
            position: "relative",
          }}
        >
          <img
            className="bgImg"
            src="/images/flower-img3.jpg"
            alt="flower picture"
          />
          <Caption type="study" />
          <TripleLayeredBox
            classNames="infoBox"
            contents={information.map(({ title, content }, i) => (
              <div className="infoBox-item" key={`info${i}`}>
                <div className="boldUpper">{title}</div>
                <p className="infoBox-content">{content[language]}</p>
              </div>
            ))}
            position={{
              top: "100%",
              right: "-14vw",
              transform: "translate(0, -40%)",
              width: `${infoSize}vw`,
            }}
            style={{
              padding: "4rem 3rem",
            }}
          />
        </div>
        <img
          className="parkle_roseS"
          src="/icons/sparkle_roseS.svg"
          alt="rose icon"
        />
      </ImgBox3>
    </Section>
  );
});

const Section = styled.section`
  position: relative;
  width: 100vw;
  padding-bottom: 11rem;
  background: linear-gradient(
    180deg,
    hsl(var(--gray-back-100)) 20%,
    hsl(var(--pink-back-090)) 60%,
    hsl(var(--gray-back-100)) 100%
  );
  perspective: 30rem;
`;

const ProfileBox1 = styled.div`
  position: relative;
  width: 42.5vw;
  min-width: 28rem;
  padding-top: 21vh;
  margin-left: 6vw;

  p {
    position: absolute;
    bottom: -2rem;
    right: -2rem;
    font-size: 18rem;
    color: hsl(var(--white));
    word-break: keep-all;
  }
  
  .caption {
    bottom: -8rem;
    right: -4rem;
  }

  .icon_smile {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 18.75vw; //360
    transform: translate(-20%, 105%);
  }

  .sparkle_hello {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 2.7vw; //50
    transform: translate(150%, 0%);
    
  }
`;
const ProfileBox2 = styled.div`
  position: relative;
  width: 31.3vw;
  min-width: 21rem;
  margin-left: auto;

  .bgImg {
    position: absolute;
    width: 15.6vw;
    top: -45%;
    left: -22%;
    opacity: 0.6;
  }

  .fyi {
    position: absolute;
    width: 20vw;
    bottom: -5%;
    left: -22%;
  }

  .sparkle_roseL {
    position: absolute;
    top: 0;
    left: 0;
    width: 19vw; // 364
    transform: translate(-80%, -100%);
  }
`;

const ImgBox1 = styled.div`
  position: absolute;
  width: 25vw;
  top: 0;
  right: 0;
  opacity: 0.6;
`;

const ImgBox3 = styled.div`
  position: absolute;
  width: 41.7vw;
  top: 50%;
  left: 0;
  transform: translateY(15%);

  .caption {
    top: 35%;
    right: 55%;
    transform: translateY(-50%);
  }

  .bgImg {
    opacity: 0.6;
  }

  .parkle_roseS {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 23.5vw; //450
    transform: translate(4vw, 120%);
  }

  .infoBox {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    &-content {
      margin-left: 4rem;
      @include font($ln: 1.4);

      &::before, &::after {
        display: inline-block;
        content: "";
        width: 1rem;
        height: 1.6rem;
        background: url(../icons/arrow_red.svg) no-repeat center center;
        background-size: contain;
      }

      &::before {
        transform: translateX(-1rem);
      }
      &::after {
        transform: translateX(1rem) rotateY(180deg);
      }
    }
  }
`;

const Keywords = styled.div`
  width: fit-content;
  margin: 0 6vw 0 auto;
  font-size: 4rem;
  text-align: right;
  line-height: 1.5;
  color: hsl(var(--red-fore-030));
  text-transform: uppercase;
  white-space: pre-line;
  text-shadow: 4px 0 0 hsl(var(--white));
  transform: translateY(-3vw);
`;

export default About;
