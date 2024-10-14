import { forwardRef } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { LanguageAtom } from "../../../../stores";
import DoubleLIneBox from "./elements/DoubleLIneBox";
import TripleLayeredBox from "./elements/TripleLayeredBox";
import Caption from "./elements/Caption";

const getGreetings = (language) =>
  ({
    ko: (
      <>
        보다 효율적인 <span className="boldUpper">개발</span>과{" "}
        <span className="boldUpper">소통</span>을 위해{"\n"}
        <span className="boldUpper">끊임없이 고민하고 생각하는</span>
        {"\n"}
        개발자 <span className="boldUpper">이예서</span>입니다.
      </>
    ),
    en: (
      <>
        I’m <span className="boldUpper">Rose</span>, who is{" "}
        <span style={{ fontWeight: 600 }}>constantly thinking</span> about
        {"\n"}
        for <span className="boldUpper">more efficient development</span>
        {"\n"}
        and <span className="boldUpper">communication</span>
      </>
    ),
  }[language]);

const getIntroduction = (language) =>
  ({
    ko: [
      { key: "목표", value: "브랜드의 가치 상승" },
      { key: "지향점", value: "기술과 디자인의 융합" },
      { key: "열정 포인트", value: "최적의 사용자 경험 제공" },
      { key: "노력 포인트", value: "유지보수 좋은 코드 개발" },
      { key: "요즘 관심사", value: "웹 3D 인터렉티브" },
      {
        key: "요즘 취미",
        value: "클라이밍, 독서토론, \n전시회, 영화, 여행",
      },
      { key: "좋아하는 것", value: "\n디자인, 토론, 물놀이, 남친" },
    ],
    en: [
      { key: "Goals", value: "brand value growth" },
      { key: "Aim", value: "harmony of tech and design" },
      { key: "Passion", value: "Provides optimal user experience" },
      { key: "Effort", value: "Good code for maintenance" },
      { key: "Interests", value: "Web 3D Interactive" },
      {
        key: "Hobbies",
        value: "Bouldering, Reading, \nExhibitions, Movies, Travel",
      },
      {
        key: "Favorites",
        value: "\nDesign, Discussion,\nWater play, Boyfriend",
      },
    ],
  }[language]);

const getSayHello = (language) =>
  ({
    ko: (
      <p
        className="font_cafe24Supermagic"
        style={{ transform: "scale(.8) translate(15%, 20%)" }}
      >
        안녕하세요
      </p>
    ),
    en: <p className="font_rampartOne">Hello</p>,
  }[language]);

const getKeywords = (language) =>
  ({
    ko: "넘치는 열정과\n지치않는 에너지,\n끊임없는 호기심,\n단단한 체력과\n유연한 생각도\n능력이다",
    en: "PASSION\nENERGY\nCURIOSITY\nPHYSICAL\nMENTAL\nSTRENGTH",
  }[language]);

const information = [
  {
    title: "* DESIGN SYSTEM",
    content: {
      ko: "디자인과 개발간의 시스템을 체계화하여 팀간의 협력과 이후 코드의 유지보수까지 고려한 개발을 지향합니다.",
      en: "I aim to systematize the system between design and development, taking into account cooperation between teams and the maintenance of the code afterwards.",
    },
  },
  {
    title: "* OPTIMIZATION",
    content: {
      ko: "최적화 툴 Performance, lighthouse 등을 사용하여 렌더링 성능을 고려한 개발을 합니다. 다방면에서 사용자를 고려하여 최적의 경험을 제공하고자 합니다.",
      en: "I use optimization tools Performance and lighthouse to develop things that take into account rendering performance. And I want to provide the best experience in consideration of users in many ways.",
    },
  },
  {
    title: "* STUDY",
    content: {
      ko: "프론트 외에 디자인과 데이터에 대한 지식에도 관심이 많으며, 블로그나 노션에 정리하고 기록하여 성장하는 습관을 만들어가고 있습니다.",
      en: "In addition to the front, I am also interested in design and data knowledge, and I am creating a habit of growing by organizing and recording it in my blog or commentary.",
    },
  },
  {
    title: "* CO-WORK",
    content: {
      ko: "함께 일하는 동료 및 유관 부서와의 협업을 중요하게 생각합니다. 서로의 생각과 의도를 온전히 이해할 수 있도록 항상 소통하며 작업합니다.",
      en: "I value collaboration with colleagues and related departments I work with. Therefore, I always communicate and work so that I can fully understand each other's thoughts and intentions.",
    },
  },
];

const About = forwardRef((props, ref) => {
  const language = useRecoilValue(LanguageAtom);
  const greetings = getGreetings(language);
  const introduce = getIntroduction(language);
  const sayHello = getSayHello(language);

  return (
    <Wrap ref={ref}>
      <ImgBox1>
        <img src="/images/flower-img1.jpg" alt="flower picture" />
      </ImgBox1>

      <ProfileBox1>
        <img
          className="frameShadow_right"
          src="/images/profile1.jpg"
          alt="flower picture"
        />
        {sayHello}
        <Caption type="resume" />
      </ProfileBox1>

      <TripleLayeredBox
        contents={greetings}
        position={{
          top: "17vh",
          left: "50%",
        }}
        style={{
          padding: "2rem 4rem",
        }}
        redText={true}
      />

      <DoubleLIneBox
        contents={introduce}
        even={true}
        style={{
          top: "48vh",
          left: "66%",
          transform: "translateX(-50%)",
        }}
      />

      <Keywords
        style={
          language === "ko"
            ? {
                transform: "scale(.9) translateY(-7vh)",
                transformOrigin: "top right",
              }
            : {}
        }
      >
        {getKeywords(language)}
      </Keywords>

      <ProfileBox2>
        <img
          className="frameShadow_left"
          src="/images/profile2.jpg"
          alt="flower picture"
        />
        <img
          className="bgImg d"
          src="/images/flower-img2.jpg"
          alt="flower picture"
        />
        <img className="fyi" src="/images/FYI.svg" alt="for your information" />
      </ProfileBox2>

      <ImgBox3>
        <div
          style={{
            position: "relative",
          }}
        >
          <img src="/images/flower-img3.jpg" alt="flower picture" />
          <Caption type="study" />
          <TripleLayeredBox
            classNames="infoBox"
            contents={information.map(({ title, content }, i) => (
              <div className="infoBox-item" key={`info${i}`}>
                <div className="boldUpper">{title}</div>
                <p className="infoBox-content">
                  {content[language]}
                  {/* <img src="/icons/pArrow-right.svg" /> */}
                </p>
              </div>
            ))}
            position={{
              bottom: "-40vh",
              right: "-15vw",
              transform: "translate(0, 0)",
            }}
            style={{
              padding: "4rem 3rem",
            }}
          />
        </div>
      </ImgBox3>
    </Wrap>
  );
});

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
  transform: translateY(-8vh);
`;

const Wrap = styled.section`
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

  img {
    opacity: 0.6;
  }
`;

export default About;
