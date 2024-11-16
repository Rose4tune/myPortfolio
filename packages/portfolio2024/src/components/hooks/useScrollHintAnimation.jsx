import { useEffect } from "react";
import gsap from "gsap";

const useScrollHintAnimation = () => {
  useEffect(() => {
    const scrollHint = () => {
      if (window.scrollY === 0) {
        gsap.to(window, { scrollTo: 150, duration: 1 });
        gsap.to(window, { scrollTo: 0, duration: 0.5, delay: 0.5 });
      }
    };

    const intervalId = setInterval(scrollHint, 10000);

    return () => clearInterval(intervalId);
  }, []);
};

export default useScrollHintAnimation;
