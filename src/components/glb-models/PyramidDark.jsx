"use client";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, ContactShadows } from "@react-three/drei";
import React, { Suspense, useRef } from "react";
import * as THREE from "three";

function Model(props) {
  const ref = useRef({ rotation: new THREE.Euler() });
  let { scene } = useGLTF("/glb-assets/pyramid_dark.glb");

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.set(
      Math.cos(t / 4) / -10,
      Math.sin(t / 4) / 10,
      Math.sin(t / 4) / 15
    );
    ref.current.position.y = -(3 + Math.cos(t / 2)) / 7;
    ref.current.position.x = -0.2;
  });

  return (
    <primitive
      object={scene}
      scale={1}
      ref={ref}
      {...props}
      rotation={[0.3, Math.PI / 1.6, 0]}
    />
  );
}

function PyramidDark() {
  const controls = useRef();

  return (
    <Canvas
      onCreated={({ gl }) => {
        controls.current = new OrbitControls(gl.domElement);
      }}
      eventPrefix="client"
      style={{
        pointerEvents: "none",
        width: "100%",
        height: "100%",
      }}
      camera={{ position: [0, 0, 4], fov: 40 }}
    >
      <ambientLight intensity={3} color={"#ffffff"} />
      <directionalLight intensity={3} color={"#ffffff"} />
      <pointLight position={[1, 2, 1]} intensity={1} color={"#ffffff"} />
      <spotLight
        intensity={0.5}
        angle={0.1}
        penumbra={1}
        position={[10, 15, -5]}
        castShadow
        color="#ffffff"
      />
      <ContactShadows
        color={"#000000"}
        resolution={512}
        position={[0, -0.8, 0]}
        opacity={1}
        scale={10}
        blur={3}
        far={0.8}
      />

      <Suspense fallback={null}>
        <Model rotation={[0.3, Math.PI / 1.6, 0]} />
      </Suspense>
    </Canvas>
  );
}

export default PyramidDark;
