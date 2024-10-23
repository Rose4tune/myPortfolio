import { useEffect, useState } from "react";
import { debounce } from "lodash";
import { useRecoilState, useSetRecoilState } from "recoil";
import { WindowDirectionAtom, WindowSizeAtom } from "../../stores";

const useWindowSize = () => {
  const setWindowDirection = useSetRecoilState(WindowDirectionAtom);
  const [windowSize, setWindowSize] = useRecoilState(WindowSizeAtom);

  const handleResize = debounce(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, 1000);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    setWindowDirection(windowSize.width > windowSize.height ? "hor" : "ver");

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
