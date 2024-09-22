import { useRecoilValue } from "recoil";
import { IsEnteredAtom } from "../../stores";
import { Box, Text3D, useTexture } from "@react-three/drei";
import * as THREE from "three";
import Loader from "./Loader";
import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Space() {
  const isEntered = useRecoilValue(IsEnteredAtom);

  const texture = useTexture("texture/star.png");
  const { position } = useMemo(() => {
    const count = 500;
    const position = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      position[i] = (Math.random() - 0.5) * 25;
    }
    return { position };
  });

  const textRef1 = useRef(null);
  const textRef1_2 = useRef(null);
  const textRef1_3 = useRef(null);
  const textRef1_4 = useRef(null);
  const textRef2 = useRef(null);
  const fontUrl = "/src/assets/fonts/RammettoOne.json";
  const fontStyle = {
    font: fontUrl,
    size: 1,
    height: 1,
    lineHeight: 1,
    fontSize: 1,
  };

  useFrame(() => {
    if (!textRef1.current) return;
    if (!textRef2.current) return;
    textRef1.current.rotation.y += 0.003;
    textRef1_2.current.rotation.y += 0.003;
    textRef1_3.current.rotation.y += 0.003;
    textRef1_4.current.rotation.y += 0.003;
    textRef2.current.rotation.y += 0.0035;
  });

  const textGroup = (text) => {
    text = text.split("").reverse();
    return text.map((t, i) => {
      const angle = (i / text.length) * (Math.PI / 1.4) + 0.55;
      const radius = 5;
      const positionX = 20 + radius * Math.sin(angle).toFixed(2);
      const positionZ = (text.length / 2 - i) * 1.3;
      const rotationY = Math.PI / -2 + (angle - text.length * 0.1) / 2;
      return (
        <Text3D
          key={i + "textKey"}
          position={[positionX, 0, positionZ]}
          {...fontStyle}
          rotation-y={rotationY}
        >
          {t}
          <meshNormalMaterial />
        </Text3D>
      );
    });
  };
  if (isEntered) {
    return (
      <>
        <ambientLight intensity={2} color={0xff80ae} />
        <rectAreaLight position={[0, 10, 0]} intensity={10} />

        <Box ref={textRef1} position={[0, 2, 0]} args={[0, 0, 0]}>
          <meshStandardMaterial />
          <axesHelper args={[12]} />
          {textGroup(`ROSE'S PORTFOLIO`)}
        </Box>
        <Box
          ref={textRef1_2}
          position={[0, 2, 0]}
          args={[0, 0, 0]}
          rotation-y={Math.PI / 2}
        >
          <meshStandardMaterial />
          <axesHelper args={[12]} />
          {textGroup(`ROSE'S PORTFOLIO`)}
        </Box>
        <Box
          ref={textRef1_3}
          position={[0, 2, 0]}
          args={[0, 0, 0]}
          rotation-y={Math.PI}
        >
          <meshStandardMaterial />
          <axesHelper args={[12]} />
          {textGroup(`ROSE'S PORTFOLIO`)}
        </Box>
        <Box
          ref={textRef1_4}
          position={[0, 2, 0]}
          args={[0, 0, 0]}
          rotation-y={Math.PI / -2}
        >
          <meshStandardMaterial />
          <axesHelper args={[12]} />
          {textGroup(`ROSE'S PORTFOLIO`)}
        </Box>
        <Box ref={textRef2} position={[0, -2, 0]} args={[0, 0, 0]}>
          <meshStandardMaterial />
          <axesHelper args={[12]} />
          {textGroup(`FRONT-END DEVELOPER`)}
        </Box>
      </>
    );
  }
  return <Loader isCompleted />;
}
