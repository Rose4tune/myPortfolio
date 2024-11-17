import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

export default function useDrawCallDebugger() {
  const { gl } = useThree(); // renderer에 접근

  useEffect(() => {
    const logDrawCalls = () => {
      console.log("Draw Calls:", gl.info.render.calls);
    };

    // 애니메이션 프레임마다 draw call 출력
    const interval = setInterval(logDrawCalls, 1000);

    return () => clearInterval(interval); // 클린업
  }, [gl]);

  return null; // UI에 아무 것도 렌더링하지 않음
}
