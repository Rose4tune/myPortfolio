import { useEffect } from "react";
import { debounce } from "lodash";
import { useRecoilState } from "recoil";
import { windowSizeAtom } from "../../stores";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useRecoilState(windowSizeAtom);

  const handleResize = debounce(() => {
    const { innerWidth: width, innerHeight: height } = window;
    let device =
      width <= 360
        ? "mobileS"
        : width <= 420
        ? "mobile"
        : width <= 600
        ? "mobileL"
        : width <= 760
        ? "tabletS"
        : width <= 960
        ? "tablet"
        : width <= 1024
        ? "tabletL"
        : width <= 1300
        ? "laptop"
        : width <= 1800
        ? "laptopL"
        : "desktop";

    setWindowSize({
      width: width,
      height: height,
      device,
      orientation: height > width ? "portrait" : "landscape",
    });
  }, 1000);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  console.log(windowSize);
};

export default useWindowSize;
