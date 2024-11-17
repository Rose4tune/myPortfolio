// import { useRef } from "react";
// import { InstancedMesh } from "three";
// import * as THREE from "three";
// import { useFrame } from "@react-three/fiber";

// const InstancedStars = ({ count = 1000, size = 0.5, spread = 100 }) => {
//   const starMeshRef = useRef();

//   const positions = new Float32Array(count * 3);
//   const transform = new THREE.Object3D();

//   // 별의 랜덤 위치 생성
//   for (let i = 0; i < count; i++) {
//     positions[i * 3] = (Math.random() - 0.5) * spread;
//     positions[i * 3 + 1] = (Math.random() - 0.5) * spread;
//     positions[i * 3 + 2] = (Math.random() - 0.5) * spread;
//   }

//   useFrame(() => {
//     if (!starMeshRef.current) return;

//     // 애니메이션: 회전 효과
//     starMeshRef.current.rotation.y += 0.002;
//   });

//   return (
//     <InstancedMesh ref={starMeshRef} args={[null, null, count]}>
//       {/* 별의 형태와 크기 */}
//       <sphereBufferGeometry args={[size, 16, 16]} />
//       <meshStandardMaterial color="#ff80ae" />
//     </InstancedMesh>
//   );
// };

// export default InstancedStars;

// components/InstancedStars.jsx
import { useRef } from "react";
import { InstancedMesh } from "three"; // Drei가 아닌 three에서 가져옵니다.
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export default function InstancedStars({
  count = 1000,
  size = 0.5,
  spread = 100,
}) {
  const starMeshRef = useRef();
  const transform = new THREE.Object3D();

  useFrame(() => {
    if (!starMeshRef.current) return;

    // 애니메이션: 회전 효과
    starMeshRef.current.rotation.y += 0.002;
  });

  // 인스턴스별 위치 설정
  if (starMeshRef.current) {
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * spread;
      const y = (Math.random() - 0.5) * spread;
      const z = (Math.random() - 0.5) * spread;

      transform.position.set(x, y, z);
      transform.updateMatrix();
      starMeshRef.current.setMatrixAt(i, transform.matrix);
    }

    starMeshRef.current.instanceMatrix.needsUpdate = true;
  }

  return (
    <InstancedMesh ref={starMeshRef} args={[null, null, count]}>
      {/* 별의 형태와 크기 */}
      <sphereBufferGeometry args={[size, 16, 16]} />
      <meshStandardMaterial color="#ff80ae" />
    </InstancedMesh>
  );
}
