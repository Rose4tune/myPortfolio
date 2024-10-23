import { useEffect, useState } from "react";
import { debounce } from "lodash";
import { useRecoilState, useSetRecoilState } from "recoil";
import { WindowDirectionAtom, ResponsiveWindowSizeAtom } from "../../stores";

const useWindowSize = () => {
  const [currentWindowSize, setCurrentWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const setWindowDirection = useSetRecoilState(WindowDirectionAtom);
  const [ResponsiveWindowSize, setResponsiveWindowSize] = useRecoilState(
    ResponsiveWindowSizeAtom
  );

  const handleResize = debounce(() => {
    setCurrentWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, 1000);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    const {width, height} = currentWindowSize;
    setWindowDirection(width > height ? "hor" : "ver");
    setResponsiveWindowSize(
      width <= 320 ? "xSmall" :
      width <= 380 ? "small" :
      width <= 480 ? "regular" :
      width <= 600 ? "semiMedium" :
      width <= 768 ? "medium" :
      width <= 1300 ? "large" :
      width <= 1600 ? "xLarge" :
      "max"
    );

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return ResponsiveWindowSize;
};

export default useWindowSize;
