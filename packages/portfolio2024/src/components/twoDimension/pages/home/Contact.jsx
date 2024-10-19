import { forwardRef } from "react";
import styled from "styled-components";
import Caption from "./elements/Caption";

const Contact = forwardRef((props, ref) => {
  return (
    <Section ref={ref}>
      <Wrap>
        <MilkCoffee className="font_rampartOne">E = m x c</MilkCoffee>
        <Connect>
          <div className="contact-title">
            C &nbsp;O &nbsp;N &nbsp;T &nbsp;A &nbsp;C &nbsp;T
          </div>
          <Caption type="email" lang="en" />
          <Caption type="git" lang="en" />
          <Caption type="blog" lang="en" />
          <p className="contact-closeGreeting font_ruslanDisplay">
            I LOVE ALL THE CONVERSATIONS.
          </p>
        </Connect>
      </Wrap>
    </Section>
  );
});

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    180deg,
    hsl(var(--pink-back-080)) 0%,
    hsl(var(--gray-back-100)) 100%
  ), url(/images/contact-bg.png) no-repeat center center;
  background-size: cover;
  background-blend-mode: hard-light;
`;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`;

const MilkCoffee = styled.div`
  color: hsl(var(--gray-back-100));
`;

const Connect = styled.div`
  padding: 8.3vh 5.2vw;
  background: hsla(var(--gray-back-100), .6);
  text-align: center;

  .contact {
    &-title {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      width: fit-content;
      margin-bottom: 5rem;
      font-size: 4.8rem;
      text-transform: uppercase;
      
      &::before, &::after {
        display: block;
        content: "";
        width: 7rem;
        border-top: 2px solid hsl(var(--gray-fore-100));
      }
    }
    &-closeGreeting {
      margin-top: 5rem;
      font-family: "Ruslan Display";
      font-size: 1.5rem;
    }
  }

  .caption {
    position: static;
    margin: .8rem 0;
    font-size: 2rem;
    text-align: center;
  }
`;

export default Contact;
