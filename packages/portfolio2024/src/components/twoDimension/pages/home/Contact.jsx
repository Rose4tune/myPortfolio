import { forwardRef, useRef, useEffect } from "react";
import Caption from "./elements/Caption";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FortuneCoffee from "./icons/FortuneCoffee";

gsap.registerPlugin(ScrollTrigger);

const Contact = forwardRef((props, ref) => {
  const milkRef = useRef(null);
  const coffeeRef = useRef(null);
  const milkTextRef = useRef(null);
  const coffeeTextRef = useRef(null);
  const supRef = useRef(null);

  const hideText = (textRef, delay) => {
    gsap.to(textRef.current, {
      x: "-20%",
      y: "40%",
      scale: 0.5,
      opacity: 0.1,
      duration: delay,
      onComplete: () => {
        textRef.current.style.display = "none";
      },
    });
  };

  const animateElements = () => {
    const delay = 1;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: milkRef.current,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    tl.add(() => hideText(milkTextRef, delay), delay)
      .add(() => hideText(coffeeTextRef, delay), delay)
      .fromTo(
        milkRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.5, delay }
      )
      .fromTo(
        coffeeRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.5 },
        "<"
      )
      .fromTo(supRef.current, { y: 0 }, { y: "-40%", duration: 1 }, "<");
  };

  useEffect(() => {
    animateElements();
  }, []);

  return (
    <section className="contact" ref={ref}>
      <div className="contact-wrap">
        <div className="energe font_rampartOne">
          E =&nbsp;
          <div className="milkCoffee">
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
          </div>
          <sup ref={supRef} className="energe-sup">
            2
          </sup>
        </div>
        <div className="connect">
          <div className="connect-title">
            C&nbsp;O&nbsp;N&nbsp;T&nbsp;A&nbsp;C&nbsp;T
          </div>
          <Caption type="email" lang="en" />
          <Caption type="git" lang="en" />
          <Caption type="blog" lang="en" />
          <p className="connect-closeGreeting">I LOVE ALL THE CONVERSATIONS.</p>
        </div>
      </div>
      <FortuneCoffee />
    </section>
  );
});

export default Contact;
