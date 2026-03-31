"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import * as THREE from "three";

function GlobeContent() {
  const meshRef = useRef<THREE.Mesh>(null);

  // Create a wireframe sphere
  const geometry = useMemo(() => new THREE.IcosahedronGeometry(2, 15), []);
  const material = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: "#ffffff",
        wireframe: true,
        transparent: true,
        opacity: 0.3,
      }),
    []
  );

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Smooth rotation
    meshRef.current.rotation.y += 0.002;
    meshRef.current.rotation.x += 0.001;

    // React to mouse
    const targetX = state.mouse.x * 0.5;
    const targetY = -state.mouse.y * 0.5;
    
    meshRef.current.rotation.y += (targetX - meshRef.current.rotation.y) * 0.05;
    meshRef.current.rotation.x += (targetY - meshRef.current.rotation.x) * 0.05;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef} geometry={geometry} material={material} />
    </Float>
  );
}

export default function Globe() {
  return (
    <div className="w-full h-[600px] cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <GlobeContent />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
