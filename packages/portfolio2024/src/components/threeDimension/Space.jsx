import { Box, Points, useTexture } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import IntroText from "./IntroText";
import Loader from "../loader/Loader";
import { useRecoilValue } from "recoil";
import { IsEnteredAtom } from "../../stores";

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
      { x: 0, y: 0, z: 1, duration: 1.5 }
    );

    gsap.to(starGroupRef01.current, {
      yoyo: true,
      duration: 2,
      repeat: -1,
      ease: "linear",
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
  }, [three.camera.position, starGroupRef01, starGroupRef02, starGroupRef03]);

  const textRef1_1 = useRef(null);
  const textRef1_2 = useRef(null);
  const textRef2_1 = useRef(null);
  const textRef2_2 = useRef(null);
  const textRef3 = useRef(null);
  const textRef4 = useRef(null);

  useFrame(() => {
    if (!textRef1_1.current) return;
    if (!textRef2_1.current) return;
    textRef1_1.current.rotation.y += 0.0015;
    textRef1_2.current.rotation.y += 0.0015;
    textRef2_1.current.rotation.y += 0.002;
    textRef2_2.current.rotation.y += 0.002;
    textRef3.current.rotation.y += 0.0025;
    textRef4.current.rotation.y += 0.003;
  });

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
        <Box ref={textRef1_1} position={[0, 5, 0]} args={[0, 0, 0]}>
          <meshStandardMaterial />
          <IntroText text={`ROSE'S PORTFOLIO`} distance={15} />
        </Box>
        <Box
          ref={textRef1_2}
          position={[0, 5, 0]}
          args={[0, 0, 0]}
          rotation-y={Math.PI / 2}
        >
          <meshStandardMaterial />
          <IntroText text={`ROSE'S PORTFOLIO`} distance={15} />
        </Box>
        <Box ref={textRef2_1} position={[0, 3, 0]} args={[0, 0, 0]}>
          <meshStandardMaterial />
          <IntroText text={`FRONT-END DEVELOPER`} distance={25} />
        </Box>
        <Box
          ref={textRef2_2}
          position={[0, 3, 0]}
          args={[0, 0, 0]}
          rotation-y={Math.PI / 2}
        >
          <meshStandardMaterial />
          <IntroText text={`FRONT-END DEVELOPER`} distance={25} />
        </Box>
        <Box ref={textRef3} position={[0, -2, 0]} args={[0, 0, 0]}>
          <meshStandardMaterial />
          <IntroText text={`WHO CONSTANTLY THINK AND THINK`} distance={25} />
        </Box>
        <Box ref={textRef4} position={[0, -6, 0]} args={[0, 0, 0]}>
          <meshStandardMaterial />
          <IntroText
            text={`FOR MORE EFFICIENT DEVELOPMENT AND COMMUNICATION`}
            distance={5}
          />
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
