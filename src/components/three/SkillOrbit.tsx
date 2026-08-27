"use client";

import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float } from "@react-three/drei";
import * as THREE from "three";
import useThemeValue from "@/lib/useThemeValue";

interface SkillNode {
  name: string;
  position: [number, number, number];
  color: string;
}

function SkillOrb({
  skill,
  isHovered,
  onHover,
  isDark,
}: {
  skill: SkillNode;
  isHovered: boolean;
  onHover: (name: string | null) => void;
  isDark: boolean;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const time = state.clock.getElapsedTime();
    ref.current.position.y =
      skill.position[1] + Math.sin(time + skill.position[0]) * 0.1;
  });

  return (
    <group position={skill.position}>
      <Float speed={2} floatIntensity={0.3}>
        <mesh
          ref={ref}
          onPointerEnter={() => onHover(skill.name)}
          onPointerLeave={() => onHover(null)}
          scale={isHovered ? 1.3 : 1}
        >
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshBasicMaterial
            color={skill.color}
            transparent
            opacity={isHovered ? 0.9 : 0.6}
          />
        </mesh>
        <Text
          fontSize={0.09}
          color={isHovered ? (isDark ? "#eef2ff" : "#1e293b") : (isDark ? "#94a3b8" : "#64748b")}
          anchorX="center"
          anchorY="bottom"
          position={[0, 0.2, 0]}
          font="/fonts/GeistMono-Regular.woff"
        >
          {skill.name}
        </Text>
      </Float>
    </group>
  );
}

function ConnectionLine({
  start,
  end,
  color,
}: {
  start: [number, number, number];
  end: [number, number, number];
  color: string;
}) {
  const ref = useRef<THREE.BufferGeometry>(null);

  const points = useMemo(() => {
    const curve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(...start),
      new THREE.Vector3(
        (start[0] + end[0]) / 2,
        (start[1] + end[1]) / 2 + 0.5,
        (start[2] + end[2]) / 2
      ),
      new THREE.Vector3(...end)
    );
    return curve.getPoints(20);
  }, [start, end]);

  useFrame((state) => {
    if (!ref.current) return;
    const time = state.clock.getElapsedTime();
    const posArr = ref.current.attributes.position.array as Float32Array;
    for (let i = 0; i < posArr.length / 3; i++) {
      posArr[i * 3 + 1] += Math.sin(time * 2 + i * 0.3) * 0.0005;
    }
    ref.current.attributes.position.needsUpdate = true;
  });

  return (
    <line>
      <bufferGeometry ref={ref}>
        <bufferAttribute
          attach="attributes-position"
          args={[new Float32Array(points.flatMap((p) => [p.x, p.y, p.z])), 3]}
        />
      </bufferGeometry>
      <lineBasicMaterial color={color} transparent opacity={0.15} />
    </line>
  );
}

function SkillNetwork() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const theme = useThemeValue();
  const isDark = theme === "dark";
  const bg = isDark ? "#131a2b" : "#f8fafc";
  const connBase = isDark ? "#28344d" : "#cbd5e1";

  const skills: SkillNode[] = useMemo(
    () => [
      { name: "Python", position: [0, 0, 0], color: "#3776AB" },
      { name: "React", position: [1.5, 0.8, -0.5], color: "#61DAFB" },
      { name: "FastAPI", position: [-1.5, 0.5, 0.3], color: "#009688" },
      { name: "PyTorch", position: [0.5, -1, 0.8], color: "#EE4C2C" },
      { name: "Docker", position: [-1, -0.8, -0.5], color: "#2496ED" },
      { name: "ROS2", position: [1.8, -0.3, 0.5], color: "#22323F" },
      { name: "TypeScript", position: [-0.8, 1.2, -0.3], color: "#3178C6" },
      { name: "AWS", position: [0.2, 1.5, 0.2], color: "#FF9900" },
      { name: "PostgreSQL", position: [-1.8, -0.2, 0.8], color: "#4169E1" },
      { name: "OpenCV", position: [1.2, 1, -0.8], color: "#5C3EE8" },
    ],
    []
  );

  const connections: [string, string][] = useMemo(
    () => [
      ["Python", "PyTorch"],
      ["Python", "FastAPI"],
      ["Python", "OpenCV"],
      ["React", "TypeScript"],
      ["FastAPI", "PostgreSQL"],
      ["Docker", "AWS"],
      ["ROS2", "OpenCV"],
      ["PyTorch", "OpenCV"],
    ],
    []
  );

  return (
    <>
      <color attach="background" args={[bg]} />
      <ambientLight intensity={0.4} />

      <group position={[0, 0, 0]}>
        {skills.map((skill) => (
          <SkillOrb
            key={skill.name}
            skill={skill}
            isHovered={hoveredSkill === skill.name}
            onHover={setHoveredSkill}
            isDark={isDark}
          />
        ))}

        {connections.map(([from, to], i) => {
          const fromSkill = skills.find((s) => s.name === from);
          const toSkill = skills.find((s) => s.name === to);
          if (!fromSkill || !toSkill) return null;
          const isHighlighted =
            hoveredSkill === from || hoveredSkill === to;
          return (
            <ConnectionLine
              key={i}
              start={fromSkill.position}
              end={toSkill.position}
              color={isHighlighted ? "#8b5cf6" : connBase}
            />
          );
        })}
      </group>
    </>
  );
}

export default function SkillOrbit() {
  return (
    <div className="w-full h-full">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 4], fov: 50 }}
        gl={{ antialias: true }}
      >
        <SkillNetwork />
      </Canvas>
    </div>
  );
}
