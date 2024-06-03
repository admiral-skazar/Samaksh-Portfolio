/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 interior.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/interior.gltf')
  
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Catenary.geometry} material={materials.Keyboard} position={[-0.715, 6.671, 1.253]} />
      <mesh geometry={nodes.Catenary002.geometry} material={materials.Green} position={[-4.055, 6.241, 1.524]} scale={0.303} />
      <mesh geometry={nodes.Catenary001.geometry} material={materials.Blue} position={[-4.266, 6.763, 1.621]} />
      <mesh geometry={nodes.Catenary003.geometry} material={materials.Blue} position={[-1.01, 6.763, 1.621]} rotation={[0, 0, Math.PI]} />
      <mesh geometry={nodes.Cube003.geometry} material={materials.Table} position={[0, 3, 0]} />
      <group position={[-2.6, 7.511, 1.97]} rotation={[0.087, 0, 0]} scale={[1.6, 1, 0.1]}>
        <mesh geometry={nodes.mesh_5.geometry} material={materials.Grey} />
        <mesh geometry={nodes.mesh_5_1.geometry} material={materials.Material} />
      </group>
      <group position={[1.185, 6.729, 0.53]}>
        <mesh geometry={nodes.mesh_6.geometry} material={materials.SystemBlock} />
        <mesh geometry={nodes.mesh_6_1.geometry} material={materials.Red} />
        <mesh geometry={nodes.mesh_6_2.geometry} material={materials.Grey} />
        <mesh geometry={nodes.mesh_6_3.geometry} material={materials.Green} />
      </group>
      <group position={[-2.6, 5.991, 0.718]} rotation={[0, 0.108, 0]}>
        <mesh geometry={nodes.mesh_7.geometry} material={materials.Grey} />
        <mesh geometry={nodes.mesh_7_1.geometry} material={materials.Keyboard} />
      </group>
      <group position={[-4.752, 6.085, 0.732]} rotation={[0, 0.127, 0]}>
        <mesh geometry={nodes.mesh_8.geometry} material={materials.Grey} />
        <mesh geometry={nodes.mesh_8_1.geometry} material={materials.Keyboard} />
      </group>
      <mesh geometry={nodes.Cube001.geometry} material={materials.Blue} position={[-4.762, 5.93, 0.773]} rotation={[0, 0.198, 0]} scale={[0.5, 0.031, 0.5]} />
      <group position={[-0.138, 6.485, 0.885]} rotation={[0, 0.38, 0]} scale={[0.28, 0.4, 0.24]}>
        <mesh geometry={nodes.mesh_10.geometry} material={materials.MusicSpeaker} />
        <mesh geometry={nodes.mesh_10_1.geometry} material={materials.Red} />
        <mesh geometry={nodes.mesh_10_2.geometry} material={materials.Keyboard} />
      </group>
      <group position={[-5.516, 6.485, 1.654]} rotation={[0, -0.424, 0]} scale={[0.28, 0.4, 0.24]}>
        <mesh geometry={nodes.mesh_11.geometry} material={materials.MusicSpeaker} />
        <mesh geometry={nodes.mesh_11_1.geometry} material={materials.Red} />
        <mesh geometry={nodes.mesh_11_2.geometry} material={materials.Keyboard} />
      </group>
      <mesh geometry={nodes.Cube008.geometry} material={materials.Floor} position={[-2, 0.6, -5]} scale={[9.38, 0.2, 9.5]} />
      <group position={[-10.83, 6.141, -4.251]} rotation={[0, 0, Math.PI / 2]} scale={[9.38, 0.2, 9.5]}>
        <mesh geometry={nodes.mesh_13.geometry} material={materials.Walls} />
        <mesh geometry={nodes.mesh_13_1.geometry} material={materials.Windowsill} />
      </group>
      <mesh geometry={nodes.Cube010.geometry} material={materials.Walls} position={[-2.001, 7.178, 4.3]} rotation={[-Math.PI / 2, -1.571, 0]} scale={[9.38, 0.2, 9.5]} />
      <mesh geometry={nodes.Cube011.geometry} material={materials.WindowFrame} position={[-11.173, 8, -4]} scale={[0.086, 2.6, 0.1]} />
      <mesh geometry={nodes.Cube012.geometry} material={materials.WindowFrame} position={[-11.173, 8, -4.075]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.081, 3.074, 0.1]} />
      <group position={[-8.817, 5.673, -11.452]} scale={[1, 0.102, 2.601]}>
        <mesh geometry={nodes.mesh_17.geometry} material={materials.Closet} />
        <mesh geometry={nodes.mesh_17_1.geometry} material={materials.Grey} />
      </group>
      <group position={[-3.435, 5.06, -2.376]} rotation={[Math.PI, 1.285, 2.967]} scale={[0.16, 1.44, 1.04]}>
        <mesh geometry={nodes.mesh_18.geometry} material={materials.Chair} />
        <mesh geometry={nodes.mesh_18_1.geometry} material={materials.Red} />
        <mesh geometry={nodes.mesh_18_2.geometry} material={materials.Grey} />
        <mesh geometry={nodes.mesh_18_3.geometry} material={materials.Keyboard} />
      </group>
      <group position={[0.515, 1.665, -9.229]} rotation={[-0.957, -0.766, 0.149]}>
        <mesh geometry={nodes.mesh_19.geometry} material={materials.Base} />
        <mesh geometry={nodes.mesh_19_1.geometry} material={materials['Material.002']} />
      </group>
    </group>
  )
}

useGLTF.preload('/interior.gltf')