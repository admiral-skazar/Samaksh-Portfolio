import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef, useEffect } from "react";
import Model from "./Interior";
import { gsap } from 'gsap';
import * as THREE from "three";
import { useThree,AxesHelperProps } from "@react-three/fiber"; 
import { OrbitControls } from "@react-three/drei";

const CameraController = () => {
  const { camera } = useThree();
  useEffect(() => {
    gsap.to(camera.position, { duration: 1, x: 1, y: 1, z: 2});
  }, [camera]);
  
  return null;
};

export default function Models(){
    const colox= new THREE.Color("red")
    return (
        <div className="h-screen w-screen">
        <Canvas>
            <directionalLight position={[3,3,3]} intensity={0.8} color={"#F3CA52"} lookAt={Model}/>
            {/* <pointLight position={[0, 0.2, 0]} intensity={0.4} /> */}
            {/* <spotLight position = {[0,2,0]} lookAt={Model} intensity={0.4}/> */}
            <OrbitControls />
            <CameraController />
            <Model position={[0, 0, 0]} scale={0.1} rotation={[0,Math.PI*3/2,0]} />
            <fog attach="fog" args={["white", 0, 40]} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <axesHelper scale={2} />
            
        </Canvas>
        </div>
    );
}