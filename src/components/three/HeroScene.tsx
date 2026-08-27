"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

type SceneColors = {
  background: string;
  particlePrimary: string;
  particleSecondary: string;
  particleHighlight: string;
  core: string;
  ringA: string;
  ringB: string;
  ringC: string;
};

function Particles({ count = 1500, colors }: { count?: number; colors: SceneColors }) {
  const mesh = useRef<THREE.InstancedMesh>(null);

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colorsArr = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    const palette = [
      new THREE.Color(colors.particlePrimary),
      new THREE.Color(colors.particleSecondary),
      new THREE.Color(colors.particleHighlight),
    ];

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

      const color = palette[Math.floor(Math.random() * palette.length)];
      colorsArr[i * 3] = color.r;
      colorsArr[i * 3 + 1] = color.g;
      colorsArr[i * 3 + 2] = color.b;

      sizes[i] = Math.random() * 0.02 + 0.005;
    }

    return { positions, colors: colorsArr, sizes };
  }, [count, colors]);

  useFrame((state) => {
    if (!mesh.current) return;
    const time = state.clock.getElapsedTime();
    const posArr = mesh.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      posArr[i3 + 1] += Math.sin(time * 0.3 + i * 0.01) * 0.001;
      posArr[i3] += Math.cos(time * 0.2 + i * 0.01) * 0.0005;
    }
    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 6, 6]}>
        <instancedBufferAttribute
          attach="attributes-position"
          args={[particles.positions, 3]}
        />
        <instancedBufferAttribute
          attach="attributes-color"
          args={[particles.colors, 3]}
        />
      </sphereGeometry>
      <meshBasicMaterial
        vertexColors
        transparent
        opacity={0.6}
      />
    </instancedMesh>
  );
}

function WireframeIcosahedron({ color }: { color: string }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const time = state.clock.getElapsedTime();
    ref.current.rotation.x = time * 0.1;
    ref.current.rotation.y = time * 0.15;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[1.8, 1]} />
        <meshBasicMaterial
          color={color}
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>
    </Float>
  );
}

function OrbitRing({ radius, speed, color }: { radius: number; speed: number; color: string }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const time = state.clock.getElapsedTime();
    ref.current.rotation.x = time * speed;
    ref.current.rotation.z = time * speed * 0.5;
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, 0.005, 16, 100]} />
      <meshBasicMaterial color={color} transparent opacity={0.2} />
    </mesh>
  );
}

function GlowCore({ color }: { color: string }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const time = state.clock.getElapsedTime();
    const scale = 1 + Math.sin(time * 2) * 0.1;
    ref.current.scale.setScalar(scale);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshBasicMaterial color={color} transparent opacity={0.3} />
    </mesh>
  );
}

function Scene({ colors }: { colors: SceneColors }) {
  return (
    <>
      <color attach="background" args={[colors.background]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.3} />

      <Particles count={1200} colors={colors} />
      <WireframeIcosahedron color={colors.ringA} />
      <OrbitRing radius={2.5} speed={0.15} color={colors.ringA} />
      <OrbitRing radius={3.2} speed={0.1} color={colors.ringB} />
      <OrbitRing radius={3.8} speed={0.08} color={colors.ringC} />
      <GlowCore color={colors.core} />
    </>
  );
}

export default function HeroScene() {
  const colors: SceneColors = {
    background: "#0b0f19",
    particlePrimary: "#8b5cf6",
    particleSecondary: "#c084fc",
    particleHighlight: "#eef2ff",
    core: "#7c3aed",
    ringA: "#8b5cf6",
    ringB: "#c084fc",
    ringC: "#7c3aed",
  };

  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 6], fov: 55 }}
        gl={{ antialias: true, alpha: false }}
      >
        <Scene colors={colors} />
      </Canvas>
    </div>
  );
}
