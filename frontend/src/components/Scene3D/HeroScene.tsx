import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import type { Group } from 'three';

export interface HeroSceneColors {
  primary: string;
  secondary: string;
  core: string;
}

interface HeroSceneProps {
  colors: HeroSceneColors;
}

const usePrefersReducedMotion = () => {
  const [reduced, setReduced] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = () => setReduced(media.matches);
    media.addEventListener('change', handleChange);
    return () => media.removeEventListener('change', handleChange);
  }, []);

  return reduced;
};

const Rig: React.FC<{ colors: HeroSceneColors; animated: boolean }> = ({ colors, animated }) => {
  const parallax = useRef<Group>(null);
  const spinner = useRef<Group>(null);
  const { pointer, invalidate } = useThree();

  useEffect(() => {
    if (!animated) {
      invalidate();
    }
  }, [animated, invalidate]);

  useFrame((state, delta) => {
    const time = state.clock.elapsedTime;

    if (spinner.current && animated) {
      spinner.current.rotation.y += delta * 0.16;
      spinner.current.rotation.x += delta * 0.06;
      spinner.current.position.y = Math.sin(time * 0.9) * 0.07;
    }

    if (parallax.current) {
      const targetX = pointer.x * 0.38;
      const targetY = -pointer.y * 0.28;
      parallax.current.rotation.y += (targetX - parallax.current.rotation.y) * 0.045;
      parallax.current.rotation.x += (targetY - parallax.current.rotation.x) * 0.045;
    }
  });

  return (
    <group ref={parallax}>
      <group ref={spinner} rotation={[0.45, 0, 0.35]}>
        <mesh>
          <icosahedronGeometry args={[1.12, 1]} />
          <meshBasicMaterial color={colors.primary} wireframe transparent opacity={0.5} />
        </mesh>
        <mesh rotation={[0.7, 0.5, 0]}>
          <icosahedronGeometry args={[0.68, 0]} />
          <meshBasicMaterial color={colors.secondary} wireframe transparent opacity={0.6} />
        </mesh>
        <mesh position={[1.62, 0, 0]}>
          <sphereGeometry args={[0.05, 12, 12]} />
          <meshBasicMaterial color={colors.secondary} />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.15, 24, 24]} />
          <meshBasicMaterial color={colors.core} />
        </mesh>
      </group>
    </group>
  );
};

const HeroScene: React.FC<HeroSceneProps> = ({ colors }) => {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 4.4], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      frameloop={reducedMotion ? 'demand' : 'always'}
    >
      <Rig colors={colors} animated={!reducedMotion} />
    </Canvas>
  );
};

export default HeroScene;
