import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

type ModelProps = {
  path: string;
  scale?: [number, number, number];
  position?: [number, number, number];
};

const Model = ({ path, scale = [1, 1, 1], position = [0, 0, 0] }: ModelProps) => {
  const { scene } = useGLTF(path);
  const modelRef = useRef<THREE.Group>(null!);

  // Rotate the model automatically
  useFrame(() => {
      modelRef.current.rotation.y += 0.01; // Adjust rotation speed as needed
  });

  return <primitive ref={modelRef} object={scene} scale={scale} position={position} />;
};

export default Model;
