import { useFrame, useThree } from "@react-three/fiber";
// import { useRef } from "react";

function StarDrawCallMonitor({ starRefs }) {
  const { gl } = useThree();

  useFrame(() => {
    starRefs.current.forEach((starRef, i) => {
      if (starRef) {
        console.log(`Star ${i} draw call info:`, gl.info.render.calls);
      }
    });
  });

  return null;
}

export default StarDrawCallMonitor;
