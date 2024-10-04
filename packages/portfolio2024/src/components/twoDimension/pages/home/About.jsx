import styled from "styled-components";

export default function About() {
  return (
    <Wrap id="about" className="section">
      <ProfileBox1 className="frame-shadow-right">
        <img src="/images/profile1.jpg" alt="flower picture" />
      </ProfileBox1>
      <ProfileBox2 className="frame-shadow-left">
        <img src="/images/profile2.jpg" alt="flower picture" />
      </ProfileBox2>
      <ImgBox1>
        <img src="/images/flower-img1.jpg" alt="flower picture" />
      </ImgBox1>
      <ImgBox2>
        <img src="/images/flower-img2.jpg" alt="flower picture" />
      </ImgBox2>
      <ImgBox3>
        <img src="/images/flower-img3.jpg" alt="flower picture" />
      </ImgBox3>

      <div
        style={{
          position: "absolute",
          top: "10rem",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <p
          className="overlapBox"
          style={{
            padding: "2rem 4rem",
            whiteSpace: "pre-line",
          }}
        >
          I’m Rose, who is constantly thinking about {"\n"}
          for more efficient development {"\n"}
          and communication
        </p>
      </div>
    </Wrap>
  );
}

const Wrap = styled.section`
  position: relative;
  width: 100vw;
  height: 238vh;
  background: linear-gradient(180deg, var(--gray-back-100) 20%, var(--pink-back-090) 60%, var(--gray-back-100) 100%);
  perspective: 30rem;
`;

const ProfileBox1 = styled.div`
  position: absolute;
  width: 42.5vw;
  min-width: 28rem;
  top: 100vh;
  left: 6vw;
  transform: translateY(-100%);
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
