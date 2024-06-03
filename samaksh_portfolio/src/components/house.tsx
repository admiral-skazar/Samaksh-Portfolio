import React from 'react';
import { useGLTF } from '@react-three/drei';

const House = () => {
  const { scene } = useGLTF('.../public/interior.gltf');

  return (
    <primitive object={scene} />
  );
};

export default House;