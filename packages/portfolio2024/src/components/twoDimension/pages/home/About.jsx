import { forwardRef } from "react";
import { useRecoilValue } from "recoil";
import { LanguageAtom } from "../../../../stores";
import DoubleLineBox from "./elements/DoubleLineBox";
import TripleLayeredBox from "./elements/TripleLayeredBox";
import Caption from "./elements/Caption";
import { introduction, keywords, information } from "../../../../data/about";
import { getGreetings, getSayHello } from "../../../../data/getAbout";

const About = forwardRef((props, ref) => {
  const language = useRecoilValue(LanguageAtom);

  return (
    <section className="about" ref={ref}>
      <div className="about-bgimg_top">
        <img src="/images/flower-img1.jpg" alt="flower picture" />
      </div>

      <div className="about-profileBox1">
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
      </div>

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

      <div
        className="about-keywords"
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
      </div>

      <div className="about-profileBox2">
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
      </div>

      <div className="about-bgimg_bottom">
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
          <img
            className="parkle_roseS"
            src="/icons/sparkle_roseS.svg"
            alt="rose icon"
          />
          <Caption type="study" />
          <TripleLayeredBox
            classNames="about-infoBox"
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
            }}
            style={{
              padding: "4rem 3rem",
            }}
          />
        </div>
      </div>
    </section>
  );
});

export default About;
