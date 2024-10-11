import { forwardRef } from "react";
import styled from "styled-components";
import OverlapBoxes from "./elements/OverlapBoxes";
import { useRecoilValue } from "recoil";
import { LanguageAtom } from "../../../../stores";
import DoubleLIneBox from "./elements/DoubleLIneBox";

const About = forwardRef((props, ref) => {
  const language = useRecoilValue(LanguageAtom);

  const introduce =
    language === "kor"
      ? [
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
        ]
      : [
          { key: "Goals", value: "brand value growth" },
          { key: "Aim", value: "harmony of tech and design" },
          { key: "Passion", value: "Provides optimal user experience" },
          { key: "Effort", value: "Good code for maintenance" },
          { key: "interests", value: "Web 3D Interactive" },
          {
            key: "Hobbies",
            value: "Bouldering, Reading, \nExhibitions, Movies, Travel",
          },
          {
            key: "favorites",
            value: "\nDesign, Discussion,\nWater play, Boyfriend",
          },
        ];

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
        <p>Halo</p>
        <div className="caption">
          i want to stick to the basics
          <div className="caption-link">my resume is here</div>
        </div>
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

      <OverlapBoxes
        style={{
          top: "9vh",
          left: "50%",
        }}
      >
        {language === "kor" ? (
          <Greetings>
            보다 효율적인 <span className="boldUpper">개발</span>과{" "}
            <span className="boldUpper">소통</span>을 위해{"\n"}
            끊임없이 <span className="boldUpper">고민하고 생각하는</span>
            {"\n"}
            <span className="boldUpper">개발자 이예서</span>입니다.
          </Greetings>
        ) : (
          <Greetings>
            I’m <span className="boldUpper">Rose</span>, who is constantly
            thinking about
            {"\n"}
            for <span className="boldUpper">more efficient development</span>
            {"\n"}
            and <span className="boldUpper">communication</span>
          </Greetings>
        )}
      </OverlapBoxes>

      <DoubleLIneBox
        list={introduce}
        even={true}
        style={{
          top: "48vh",
          left: "65%",
          transform: "translateX(-50%)",
        }}
      ></DoubleLIneBox>
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
    font-family: "Rampart One";
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

const Greetings = styled.p`
  color: hsl(var(--red-fore-030));
`;

export default About;
