import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

export default function MainCanvas() {
  const aspectRatio = window.innerWidth / window.innerHeight;
  return (
    <Canvas
      id="canvas"
      gl={{ antialias: true }}
      shadows={"soft"}
      camera={{
        fov: 30,
        aspect: aspectRatio,
        near: 0.01,
        far: 1000,
        position: [0, 0, 12],
      }}
      scene={{ background: new THREE.Color(0xffffff) }}
    >
      <ScrollControls pages={10} damping={0.25}></ScrollControls>
    </Canvas>
  );
}
