import { forwardRef } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { LanguageAtom } from "../../../../stores";
import DoubleLIneBox from "./elements/DoubleLIneBox";
import TripleLayeredBox from "./elements/TripleLayeredBox";
import Caption from "./elements/Caption";

const getGreetings = (language) =>
  ({
    kor: (
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
    kor: [
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
    kor: <p className="font_cafe24Supermagic">안녕하세요</p>,
    en: <p className="font_rampartOne">Hello</p>,
  }[language]);

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
      <ProfileBox2 className="frameShadow_left">
        <img src="/images/profile2.jpg" alt="flower picture" />
      </ProfileBox2>

      <ImgBox2>
        <img src="/images/flower-img2.jpg" alt="flower picture" />
      </ImgBox2>
      <ImgBox3>
        <img src="/images/flower-img3.jpg" alt="flower picture" />
      </ImgBox3>

      <TripleLayeredBox
        contents={greetings}
        style={{
          top: "17vh",
          left: "50%",
        }}
        redText={true}
      />

      <DoubleLIneBox
        contents={introduce}
        even={true}
        style={{
          top: "48vh",
          left: "65%",
          transform: "translateX(-50%)",
        }}
      />
    </Wrap>
  );
});

const Wrap = styled.section`
  position: relative;
  width: 100vw;
  height: 238vh;
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
  }
  
  .caption {
    bottom: -8rem;
    right: -4rem;
  }
`;
const ProfileBox2 = styled.div`
  position: absolute;
  width: 31.3vw;
  min-width: 21rem;
  top: 138vh;
  right: 0;
`;

const ImgBox1 = styled.div`
  position: absolute;
  width: 25vw;
  top: 0;
  right: 0;
  opacity: 0.6;
`;
const ImgBox2 = styled.div`
  position: absolute;
  width: 15.6vw;
  top: 50%;
  right: 22.8vw;
  transform: translateY(-50%);
  opacity: 0.6;
`;
const ImgBox3 = styled.div`
  position: absolute;
  width: 41.7vw;
  top:50%;
  left: 0;
  transform: translateY(50%);
  opacity: 0.6;
`;

export default About;
