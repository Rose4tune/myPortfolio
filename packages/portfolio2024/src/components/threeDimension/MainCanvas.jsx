import { Suspense } from "react";
import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRecoilValue } from "recoil";
import { IsEnteredAtom } from "../../stores";
import * as THREE from "three";
import Loader from "../loader/Loader";
import Space from "./Space";
import styled from "styled-components";

export default function MainCanvas() {
  const aspectRatio = window.innerWidth / window.innerHeight;
  const isEntered = useRecoilValue(IsEnteredAtom);

  return (
    <Wrap>
      <Canvas
        id="canvas"
        gl={{ antialias: true }}
        shadows={"soft"}
        camera={{
          fov: 30,
          aspect: aspectRatio,
          near: 0.01,
          far: 1000,
          position: [0, 0, 1],
        }}
        scene={{ background: new THREE.Color(0xffffff) }}
      >
        <ScrollControls pages={isEntered ? 10 : 0} damping={0.25}>
          <Suspense fallback={<Loader />}>
            <Space />
          </Suspense>
        </ScrollControls>
      </Canvas>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;
