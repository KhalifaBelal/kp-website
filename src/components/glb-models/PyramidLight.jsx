"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, ContactShadows } from "@react-three/drei";
import React, { Suspense, useRef } from "react";
import * as THREE from "three";

function Model(props) {
  const ref = useRef({ rotation: new THREE.Euler() });
  let { scene } = useGLTF("/glb-assets/pyramid_light.glb");

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
      rotation={[0, Math.PI / 1.2, 2]}
    />
  );
}

function PyramidLight() {
  return (
    <Canvas
      eventPrefix="client"
      style={{
        pointerEvents: "none",
        width: "100%",
        height: "100%",
      }}
      camera={{ position: [0, 0, 4], fov: 40 }}
    >
      <pointLight position={[10, 15, 10]} intensity={2.5} color={"#f3f3f3"} />
      <spotLight
        intensity={0.9}
        angle={1}
        penumbra={1}
        position={[-7, 9, -2]}
        castShadow
        color={"#f3f3f3"}
      />
      <ContactShadows
        color={"#000"}
        resolution={500}
        position={[0, -0.8, 0]}
        opacity={1}
        scale={10}
        blur={2.5}
        far={0.8}
      />
      <Suspense fallback={null}>
        <Model rotation={[0.3, Math.PI / 1.6, 0]} />
      </Suspense>
    </Canvas>
  );
}

export default PyramidLight;
