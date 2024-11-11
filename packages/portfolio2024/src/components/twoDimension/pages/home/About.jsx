import { forwardRef } from "react";
import { useRecoilValue } from "recoil";
import { LanguageAtom } from "../../../../stores";
import DoubleLineBox from "./elements/DoubleLineBox";
import Caption from "./elements/Caption";
import { introduction, keywords, information } from "../../../../data/about";
import { getGreetings, getSayHello } from "./elements/getAbout";

const About = forwardRef((props, ref) => {
  const language = useRecoilValue(LanguageAtom);

  return (
    <section className="about" ref={ref}>
      <div className="about-bgimg_top">
        <img
          src="/images/flower-img1.jpg"
          width="480"
          height="460"
          alt="flower picture"
        />
      </div>

      <div className="about-profileBox1">
        <img
          className="frameShadow_right"
          src="/images/profile1.jpg"
          width="815"
          height="840"
          alt="flower picture"
        />
        {getSayHello(language)}
        <Caption type="resume" isBlock={true} />
        <img
          className="icon_smile"
          src="/icons/sparkle_smile.svg"
          alt="smile"
        />
        <img className="sparkle_hello" src="/icons/sparkle.svg" alt="+" />
      </div>

      <div className="about-greeting">
        <div
          className="tripleLayered"
          style={{
            padding: "2rem 4rem",
            color: "hsl(var(--red-fore-030))",
          }}
        >
          {getGreetings(language)}
        </div>
      </div>

      <DoubleLineBox contents={introduction[language]} even={true} />

      <div className="about-keywords">{keywords[language]}</div>

      <div className="about-profileBox2">
        <img
          className="frameShadow_left"
          src="/images/profile2.jpg"
          width="600"
          height="970"
          alt="flower picture"
        />
        <img
          className="bgImg"
          src="/images/flower-img2.jpg"
          width="300"
          height="485"
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
            width="800"
            height="640"
            alt="flower picture"
          />
          <img
            className="parkle_roseS"
            src="/icons/sparkle_roseS.svg"
            alt="rose icon"
          />
          <Caption type="study" isBlock={true} />

          <div className="about-infoWrap">
            <div className="about-infoBox tripleLayered">
              {information.map(({ title, content }, i) => (
                <div key={`info${i}`}>
                  <div className="boldUpper">{title}</div>
                  <p>{content[language]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;
