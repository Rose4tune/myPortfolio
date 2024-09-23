import { useRecoilValue } from "recoil";
import { IsEnteredAtom } from "../stores";
import { Box, Points, Text3D, useScroll, useTexture } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import Loader from "./Loader";
import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";

const colors = {
  boxMaterialColor: "#ff80ae",
};

export default function Space() {
  const three = useThree();
  const isEntered = useRecoilValue(IsEnteredAtom);

  const boxRef = useRef(null);
  const starGroupRef01 = useRef(null);
  const starGroupRef02 = useRef(null);
  const starGroupRef03 = useRef(null);
  const rectAreaLightRef = useRef(null);
  const hemisphereLightRef = useRef(null);

  const texture = useTexture("texture/star.png");
  const { positions } = useMemo(() => {
    const count = 15000;
    const positions = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i] = (Math.random() - 0.5) * 118;
    }
    return { positions };
  }, []);

  useEffect(() => {
    if (!isEntered) return;
    gsap.fromTo(
      three.camera.position,
      { x: 0, y: 0, z: 25 },
      { x: 0, y: 0, z: 3, duration: 1.5 }
    );

    gsap.fromTo(
      colors,
      { boxMaterialColor: "#0c0400" },
      {
        duration: 2.5,
        boxMaterialColor: "#dc4f00",
      }
    );

    gsap.to(starGroupRef01.current, {
      yoyo: true,
      duration: 2,
      repeat: -1, // 무한적으로 재샐
      ease: "linear", // 선형적으로 재생
      size: 0.08,
    });

    gsap.to(starGroupRef02.current, {
      yoyo: true,
      duration: 3,
      repeat: -1,
      ease: "linear",
      size: 0.05,
    });

    gsap.to(starGroupRef03.current, {
      yoyo: true,
      duration: 4,
      repeat: -1,
      ease: "linear",
      size: 0.05,
    });
  }, [
    isEntered,
    three.camera.position,
    starGroupRef01,
    starGroupRef02,
    starGroupRef03,
  ]);

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
      const radius = 5 + angle;
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
        <ambientLight intensity={10} />
        <rectAreaLight
          ref={rectAreaLightRef}
          position={[0, 10, 0]}
          intensity={30}
          color={"#ff80ae"}
        />
        <pointLight
          position={[0, 30, 0]}
          intensity={45}
          color={"#ff80ae"}
          castShadow
          receiveShadow
        />
        <hemisphereLight
          ref={hemisphereLightRef}
          position={[0, 5, 0]}
          intensity={0}
          groundColor={"#ff80ae"}
          color={"#ff80ae"}
        />

        <Box ref={boxRef} position={[0, 0, 0]} args={[500, 500, 500]}>
          <meshStandardMaterial color={"#fff"} side={THREE.DoubleSide} />
        </Box>
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

        <Points positions={positions.slice(0, positions.length / 3)}>
          <pointsMaterial
            ref={starGroupRef01}
            size={0.8}
            color={new THREE.Color("#ff80ae")}
            sizeAttenuation
            depthWrite
            alphaMap={texture}
            transparent
            alphaTest={0.001}
          />
        </Points>
        <Points
          positions={positions.slice(
            positions.length / 3,
            (positions.length * 2) / 3
          )}
        >
          <pointsMaterial
            ref={starGroupRef02}
            size={1.3}
            color={new THREE.Color("#ff80ae")}
            sizeAttenuation
            depthWrite
            alphaMap={texture}
            transparent
            alphaTest={0.001}
          />
        </Points>
        <Points positions={positions.slice((positions.length * 2) / 3)}>
          <pointsMaterial
            ref={starGroupRef03}
            size={1.8}
            color={new THREE.Color("#ff80ae")}
            sizeAttenuation
            depthWrite
            alphaMap={texture}
            transparent
            alphaTest={0.001}
          />
        </Points>
      </>
    );
  }
  return <Loader isCompleted />;
}
