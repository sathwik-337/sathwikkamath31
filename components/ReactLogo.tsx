"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function ParticleSystem() {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 2000;

  const geometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 10;
      positions[i + 1] = (Math.random() - 0.5) * 10;
      positions[i + 2] = (Math.random() - 0.5) * 10;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);

  useFrame((state) => {
    if (!particlesRef.current) return;

    const positions = particlesRef.current.geometry.attributes.position
      .array as Float32Array;

    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      const z = positions[i + 2];

      // Create a wave pattern using sine waves
      positions[i] = x + Math.sin(state.clock.elapsedTime + y) * 0.01;
      positions[i + 1] = y + Math.cos(state.clock.elapsedTime + x) * 0.01;
      positions[i + 2] = z + Math.sin(state.clock.elapsedTime + z) * 0.01;

      // Keep particles within bounds
      if (Math.abs(positions[i]) > 5)
        positions[i] = (Math.random() - 0.5) * 10;
      if (Math.abs(positions[i + 1]) > 5)
        positions[i + 1] = (Math.random() - 0.5) * 10;
      if (Math.abs(positions[i + 2]) > 5)
        positions[i + 2] = (Math.random() - 0.5) * 10;
    }

    particlesRef.current.geometry.attributes.position.needsUpdate = true;
    particlesRef.current.rotation.x += 0.0002;
    particlesRef.current.rotation.y += 0.0003;
  });

  return (
    <points ref={particlesRef} geometry={geometry}>
      <pointsMaterial
        size={0.08}
        color="#61DBFB"
        sizeAttenuation
        transparent
        opacity={0.8}
      />
    </points>
  );
}

export default function ReactLogo() {
  return (
    <div className="w-full h-[600px] cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={4} />
        <pointLight position={[10, 10, 10]} intensity={5} />
        <ParticleSystem />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1}
        />
      </Canvas>
    </div>
  );
}
