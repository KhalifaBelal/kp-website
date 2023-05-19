"use client";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  PresentationControls,
  OrbitControls,
} from "@react-three/drei";
import React, { Suspense } from "react";

function Model({ model }) {
  const models = [
    "/glb-assets/sparring-model_dark.glb",
    "/glb-assets/strategicplan-model_dark.glb",
    "/glb-assets/offer-model_dark.glb",
  ];
  let { scene } = useGLTF(models[model]);
  return (
    <primitive
      object={scene}
      scale={2 / 3 + 0.05}
      position={[0, -(1.5 / 3), 0]}
    />
  );
}

function StrategyModelDark({ model }) {
  const controls = useRef();

  return (
    <Canvas
      onCreated={({ gl }) => {
        controls.current = new OrbitControls(gl.domElement);
      }}
      dpr={[1, 2]}
      camera={{ fov: 25 }}
      style={{
        pointerEvents: "none",
        width: "100%",
        height: "100%",
      }}
    >
      <PresentationControls speed={1.5} global zoom={0}>
        <ambientLight intensity={1.25} color={"#000000"} />
        <ambientLight intensity={0.8} />
        <directionalLight intensity={0.4} />
        <pointLight position={[8, 10, 8]} intensity={3} />
        <Suspense fallback={null}>
          <Model model={model} />
        </Suspense>
        <OrbitControls
          autoRotate
          rotation={0}
          autoRotateSpeed={1.5}
          enableZoom={false}
          enableRotate={false}
          enablePan={false}
          enableDamping={false}
        />
      </PresentationControls>
    </Canvas>
  );
}

export default StrategyModelDark;
