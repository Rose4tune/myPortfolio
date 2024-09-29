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

let timeline;

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
    const count = 5000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < positions.length; i++) {
      positions[i] = (Math.random() - 0.5) * 118;
    }
    return { positions };
  }, []);

  const scroll = useScroll();

  useFrame(() => {
    if (!timeline) return;
    timeline.seek(scroll.offset * timeline.duration());
  });

  useEffect(() => {
    if (!isEntered) return;
    three.camera.lookAt(0, 0, 0);
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
        z: 52,
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

  const textRefs = useRef([]);
  const textValues = [
    {
      position: [0, 5, 0],
      rotationY: 0.5,
      distance: 27,
      repeat: 4,
      speed: 0.03,
    },
    {
      position: [0, 2, 0],
      rotationY: 0.1,
      distance: 35,
      repeat: 4,
      speed: 0.04,
    },
    {
      position: [0, -2, 0],
      rotationY: 0,
      distance: 32,
      repeat: 3,
      speed: 0.06,
    },
    {
      position: [0, -5, 0],
      rotationY: -1.2,
      distance: 27,
      repeat: 2,
      speed: 0.07,
    },
  ];

  useFrame((state, delta) => {
    if (!textRefs) return;
    textRefs.current.forEach((textRef, i) => {
      if (textRef) {
        const rotationSpeed = Math.PI * textValues[i].speed;
        textRef.rotation.y += delta * rotationSpeed;
      }
    });
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

        {introTexts.map((text, i) => {
          const { position, rotationY, distance, repeat } = textValues[i];
          return (
            <Box
              key={`roundingText${i}`}
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
