"use client";

import { useState, useEffect, useRef, Suspense, useMemo } from "react";
import { MOUSE } from "three";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Float,
  ContactShadows,
  Sparkles,
  Environment,
  MeshWobbleMaterial,
  Html,
} from "@react-three/drei";

export default function ThreeDShowcase() {
  const dpr = useMemo<[number, number]>(() => [1, 2], []);

  const [autoRotate, setAutoRotate] = useState(true);
  const orbitTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleOrbitChange = () => {
    if (orbitTimeout.current) {
      clearTimeout(orbitTimeout.current);
    }
    orbitTimeout.current = setTimeout(() => {
      setAutoRotate(true);
      orbitTimeout.current = null;
    }, 2000); // Restart auto-rotation after 2 seconds of inactivity
  };

  useEffect(() => {
    return () => {
      if (orbitTimeout.current) {
        clearTimeout(orbitTimeout.current);
      }
    };
  }, []);

  return (
    <div
      className="relative h-[60vh] w-full rounded-2xl sm:h-[70vh] lg:h-[80vh]"
      onPointerDown={(e) => {
        if (e.button === 1) {
          e.preventDefault(); // Stop middle mouse button from scrolling
        }
      }}
    >
      <Canvas
        shadows
        gl={{ antialias: true, alpha: true }}
        dpr={dpr}
        camera={{ position: [6, 3.5, 8], fov: 50, near: 0.1, far: 100 }}
      >
        {/* Transparent background so page gradient shows through */}
        <Suspense fallback={<Html center>Loading…</Html>}>
          <Lights />
          <GlassTorus />
          <WobbleIco />
          <WireBall />

          {/* Pretty ground contact shadow */}
          <ContactShadows position={[0, -2, 0]} opacity={0.35} scale={12} blur={2} far={4} color="#111827" />

          {/* Sparkles for vibe */}
          <Sparkles count={150} speed={0.3} opacity={0.7} noise={1} size={2} color="#93c5fd" scale={[10, 5, 6]} />

          {/* <Environment/> is loaded asynchronously */}
          <Suspense fallback={null}>
            {/* Reflections, no background to keep Canvas transparent */}
            <Environment preset="city" background={false} />
          </Suspense>

          <OrbitControls
            makeDefault
            enableDamping
            dampingFactor={0.05}
            autoRotate={autoRotate}
            autoRotateSpeed={0.6}
            minDistance={4}
            maxDistance={20}
            onStart={() => setAutoRotate(false)}
            onChange={handleOrbitChange}
            mouseButtons={{
              LEFT: MOUSE.ROTATE,
              MIDDLE: MOUSE.PAN,
              RIGHT: MOUSE.PAN,
            }}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

function GlassTorus() {
  return (
    <Float speed={1} rotationIntensity={0.6} floatIntensity={0.8}>
      <mesh castShadow receiveShadow rotation={[0.6, 0.2, 0]}>
        <torusKnotGeometry args={[1, 0.35, 220, 20]} />
        {/* Transparent, slightly refractive look */}
        {/* Using standard material for simplicity + nice effect */}
        <meshPhysicalMaterial
          clearcoat={1}
          clearcoatRoughness={0.1}
          roughness={0}
          transmission={0.95}
          thickness={0.5}
          ior={1.3}
          color="#60a5fa"
          attenuationColor="#a78bfa"
          attenuationDistance={2}
        />
      </mesh>
    </Float>
  );
}

function WobbleIco() {
  return (
    <Float speed={1.4} rotationIntensity={1} floatIntensity={1.2}>
      <mesh castShadow position={[-2.2, 0.6, 0.2]}>
        <icosahedronGeometry args={[0.9, 0]} />
        <MeshWobbleMaterial factor={0.9} speed={1.2} color="#34d399" metalness={0.1} roughness={0.2} />
      </mesh>
    </Float>
  );
}

function WireBall() {
  return (
    <Float speed={0.8} rotationIntensity={0.5} floatIntensity={0.6}>
      <mesh position={[2.75, -0.1, -0.2]}>
        <sphereGeometry args={[0.9, 48, 48]} />
        <meshBasicMaterial color="#f472b6" wireframe opacity={0.9} transparent />
      </mesh>
    </Float>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        castShadow
        position={[4, 6, 5]}
        intensity={1.2}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-6, 3, -4]} intensity={0.6} color="#93c5fd" />
      <pointLight position={[6, -2, 4]} intensity={0.4} color="#a78bfa" />
    </>
  );
}
