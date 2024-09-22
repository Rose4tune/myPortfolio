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
  const textRef2 = useRef(null);
  const fontUrl = "/src/assets/fonts/RammettoOne.json";
  const fontStyle = {
    font: fontUrl,
    size: 0.5,
    letterSpacing: 0.01,
    height: 1,
    lineHeight: 1,
    fontSize: 1,
  };

  const text = `ROSE'S PORTFOLIO`.split("");
  const x = 10;
  useFrame(() => {
    if (!textRef1.current) return;
    if (!textRef2.current) return;
    // textRef1.current.rotation.y -= 0.01;
    // textRef2.current.rotation.y -= 0.015;
  });

  if (isEntered) {
    return (
      <>
        <ambientLight intensity={2} color={0xff80ae} />
        <rectAreaLight position={[0, 10, 0]} intensity={10} />
        {/* <Box position={[0, 0, 0]} args={[100, 100, 100]}>
          <meshStandardMaterial color={"#fff"} side={THREE.DoubleSide} />
        </Box> */}

        <Box
          ref={textRef1}
          position={[0, 3, 0]}
          args={[0, 0, 0]}
          rotationY={Math.PI / 2}
        >
          <meshStandardMaterial />
          <axesHelper args={[12]} />
          {text.map((t, i) => {
            const angle = (i / (text.length - 1)) * (Math.PI / 1.5) + 0.55;
            const radius = 5;
            // const z = radius * Math.sin(angle).toFixed(2);
            const x = 10 + radius * Math.sin(angle).toFixed(2);
            const z = 10 + -i * 1.2;
            return (
              <Text3D
                key={i + "text1Key"}
                position={[x, 0, z]}
                {...fontStyle}
                rotation-y={Math.PI / 2}
              >
                {t}
                <meshNormalMaterial />
              </Text3D>
            );
          })}
          {/* <Text3D
            position={[10, 0, 3.5]}
            {...fontStyle}
            rotation-y={Math.PI / 2}
          >
            ROSE'S
            <meshNormalMaterial />
          </Text3D>
          <Text3D position={[10, 0, 0]} {...fontStyle} rotation-y={Math.PI / 2}>
            PORTFOLIO
            <meshNormalMaterial />
          </Text3D> */}
        </Box>
        <Box ref={textRef2} position={[0, 0, 0]} args={[0, 0, 0]}>
          <meshStandardMaterial />
          <axesHelper args={[12]} />
          <Text3D position={[10, 1, 5]} {...fontStyle} rotation-y={Math.PI / 2}>
            FRONT-END DEVELOPER
            <meshNormalMaterial />
          </Text3D>
        </Box>

        {/* <Text3D ref={textRef} position={[0, 0, 0]} {...fontStyle}>
          <meshNormalMaterial />
          <Text3D position={[10, 3, 0]} {...fontStyle} rotation-y={Math.PI / 2}>
            2222
            <meshNormalMaterial />
          </Text3D>
        </Text3D> */}
      </>
    );
  }
  return <Loader isCompleted />;
}
