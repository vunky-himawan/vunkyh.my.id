import React, { useRef, type RefObject } from "react";
import {
  MeshTransmissionMaterial,
  PresentationControls,
  useGLTF,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";
import type { Mesh } from "three";

const Model: React.FC = () => {
  const mesh: RefObject<Mesh> = useRef(null);
  const { nodes } = useGLTF("/assets/3D/VH.glb");
  const { viewport } = useThree();

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.z += 0.01;
    }
  });

  const materialProps = useControls({
    thickness: { value: 2, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0.3, min: 0, max: 1, step: 0.1 },
    transmission: { value: 1.1, min: 0, max: 3, step: 0.1 },
    ior: { value: 2, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 2, min: 0, max: 2 },
    backside: { value: true },
  });

  return (
    <group scale={viewport.width / 4.35}>
      <PresentationControls
        global
        snap={true}
        speed={1}
        rotation={[0.3, 0, 0]}
        azimuth={[-Infinity, Infinity]}
        polar={[0, 0]}
        config={{ mass: 5, tension: 200 }}
      >
        <mesh ref={mesh} {...nodes.Text} position={[0, 0, 0]} scale={3}>
          <MeshTransmissionMaterial {...materialProps} />
        </mesh>
      </PresentationControls>
    </group>
  );
};

export default Model;
