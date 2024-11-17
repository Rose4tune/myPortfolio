import { Box, Points, useScroll, useTexture } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import IntroText from "./IntroText";
import Loader from "../loader/Loader";
import { useRecoilValue } from "recoil";
import { IsEnteredAtom } from "../../stores";
import { introTexts } from "../../data/constants";
import { chunk } from "../../util/Calculate";
import useDrawCallDebugger from "../hooks/useDrawCallDebugger";
import InstancedStars from "./elements/InstancedStars";

let timeline;

export default function Space() {
  useDrawCallDebugger();
  const three = useThree();
  const isEntered = useRecoilValue(IsEnteredAtom);

  const boxRef = useRef(null);
  const textRefs = useRef([]);
  const starRefs = useRef([]);
  const rectAreaLightRef = useRef(null);
  const hemisphereLightRef = useRef(null);

  const texture = useTexture("texture/star.png");
  // const { positions } = useMemo(() => {
  //   const count = 5100;
  //   const positions = new Float32Array(count * 3);

  //   for (let i = 0; i < positions.length; i++) {
  //     let randomValue = (Math.random() - 0.5) * 118;
  //     if (isNaN(randomValue)) randomValue = 0;
  //     positions[i] = randomValue;
  //   }

  //   return { positions: chunk(positions, count) };
  // }, []);

  const scroll = useScroll();
  const starValues = [
    { size: 0.8, twinkleSize: 0.08, duration: 1 },
    { size: 1.3, twinkleSize: 0.05, duration: 1.5 },
    { size: 1.8, twinkleSize: 0.1, duration: 2.5 },
  ];
  const textValues = [
    {
      position: [0, 3.5, 0],
      rotationY: 0.5,
      distance: 20,
      repeat: 4,
      speed: 0.03,
    },
    {
      position: [0, 1.8, 0],
      rotationY: 0.1,
      distance: 27,
      repeat: 4,
      speed: 0.04,
    },
    {
      position: [0, -1.8, 0],
      rotationY: 0,
      distance: 24,
      repeat: 3,
      speed: 0.06,
    },
    {
      position: [0, -4.2, 0],
      rotationY: -1.2,
      distance: 20,
      repeat: 2,
      speed: 0.07,
    },
  ];

  useFrame((state, delta) => {
    if (!textRefs || !starRefs || !timeline) return;

    timeline.seek(scroll.offset * timeline.duration());

    textRefs.current.forEach((textRef, i) => {
      if (textRef) {
        const rotationSpeed = Math.PI * textValues[i].speed;
        textRef.rotation.y += delta * rotationSpeed;
      }
    });
  });

  useEffect(() => {
    if (!isEntered) return;
    if (!starRefs.current[0] || !starRefs.current[1] || !starRefs.current[2])
      return;

    three.camera.lookAt(0, 0, 0);
    starRefs.current.forEach((starRef, i) => {
      const { twinkleSize, duration } = starValues[i];
      if (starRef) {
        gsap.to(starRef, {
          yoyo: true,
          duration: duration,
          repeat: -1,
          ease: "linear",
          size: twinkleSize,
        });
      }
    });
  }, [three.camera.position, isEntered, starRefs.current]);

  useEffect(() => {
    if (!isEntered) return;

    const pivot = new THREE.Group();
    pivot.position.copy(boxRef.current.position);
    pivot.add(three.camera);
    three.scene.add(pivot);

    timeline = gsap.timeline();
    timeline
      .to(three.camera.position, {
        duration: 10,
        x: 0,
        y: -4,
        z: 44,
      })
      .to(
        pivot.rotation,
        {
          duration: 2,
          x: -Math.PI / 20,
        },
        "<"
      )
      .to(three.camera.position, {
        duration: 4,
        x: 0,
        y: 0,
        z: 0,
      })
      .to(
        pivot.rotation,
        {
          duration: 3,
          x: Math.PI / 2,
        },
        "<"
      )
      .to(pivot.rotation, {
        duration: 30,
        x: -Math.PI / 2,
      });
    return () => {
      three.scene.remove(pivot);
    };
  }, [isEntered, three.camera, three.camera.position, three.scene]);

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

        {introTexts.map((text, i) => {
          const { position, rotationY, distance, repeat } = textValues[i];
          return (
            <Box
              key={`roundingTextKey${i}`}
              ref={(el) => (textRefs.current[i] = el)}
              position={position}
              args={[0, 0, 0]}
              rotation-y={rotationY}
            >
              <meshStandardMaterial />
              <IntroText text={text} distance={distance} repeat={repeat} />
            </Box>
          );
        })}

        <InstancedStars count={1500} size={0.3} spread={120} />

        {/* {positions.map((position, i) => {
          return (
            <Points key={`starKey${i}`} positions={position}>
              <pointsMaterial
                ref={(el) => (starRefs.current[i] = el)}
                size={starValues[i].size}
                color={new THREE.Color("#ff80ae")}
                sizeAttenuation
                depthWrite
                alphaMap={texture}
                transparent
                alphaTest={0.001}
              />
            </Points>
          );
        })} */}
      </>
    );
  }
  return <Loader isCompleted />;
}
