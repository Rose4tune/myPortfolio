import { forwardRef, useRef, useEffect } from "react";
import styled from "styled-components";
import Caption from "./elements/Caption";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = forwardRef((props, ref) => {
  const milkRef = useRef(null);
  const coffeeRef = useRef(null);
  const milkTextRef = useRef(null);
  const coffeeTextRef = useRef(null);

  const setupAnimation = (elementRef, textRef) => {
    const delay = 2;
    gsap.fromTo(
      elementRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: delay,
        scrollTrigger: {
          trigger: elementRef.current,
          start: "top 75%",
          toggleActions: "play none none reset",
          onEnter: () => {
            gsap.delayedCall(delay, () => {
              textRef.current.style.display = "none";
            });
          },
          onLeaveBack: () => {
            textRef.current.style.display = "block";
          },
        },
      }
    );
  };

  useEffect(() => {
    setupAnimation(milkRef, milkTextRef);
    setupAnimation(coffeeRef, coffeeTextRef);
  }, []);

  return (
    <Section ref={ref}>
      <Wrap>
        <Energe className="font_rampartOne">
          E =&nbsp;
          <MilkCoffee>
            <div className="milk">
              <div className="milk-text" ref={milkTextRef}>
                m
              </div>
              <div className="milk-icon" ref={milkRef}>
                <div className="milk-imgWrap">
                  <img src="/icons/milk.svg" alt="milk" />
                </div>
                <p>milk</p>
              </div>
            </div>
            <div className="xIcon" />
            <div className="coffee">
              <div className="coffee-text" ref={coffeeTextRef}>
                c
              </div>
              <div className="coffee-icon" ref={coffeeRef}>
                <div className="coffee-imgWrap">
                  <img src="/icons/coffee.svg" alt="coffee" />
                </div>
                <p>coffee</p>
              </div>
            </div>
          </MilkCoffee>
          <sup>2</sup>
        </Energe>
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

const Energe = styled.div`
  display: flex;
  height: 26.4rem;
  font-size: 18rem;
  color: hsl(var(--gray-back-100));
  filter: drop-shadow(.4rem .4rem 0 hsla(var(--pink-back-050), .5));

  sup {
    font-size: 9rem;
    transform: translateY(-2rem);
  }
`;

const MilkCoffee = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 2rem;
  text-align: center;

  .milk, .coffee {
    width: 16.5rem;
    [class$=-icon] {
      line-height: .8;
      font-size: 4rem;
      p::first-letter {
        font-size: 9rem;
      }
    }
    [class$=-imgWrap] {
      width: 11rem;
      margin: 0 auto;
    }
  }

  .xIcon {
    width: 4rem;
    height: 6rem;
    background: url(/icons/X.svg) no-repeat center center;
    transform: translateX(1rem);
  }
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
