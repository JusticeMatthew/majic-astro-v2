import { Canvas } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';
import { useStore } from '@nanostores/react';
import { bgIsDark } from '@/store/darkBg';

export default function LargeCTASparkles() {
  const $bgIsDark = useStore(bgIsDark);
  return (
    <Canvas className="animate-in fade-in-0 duration-1000">
      <Sparkles
        count={30}
        scale={10}
        size={15}
        speed={0.6}
        color="#735CDD"
        noise={5}
      />
      <Sparkles
        count={30}
        scale={20}
        size={10}
        color={$bgIsDark ? '#e36ff2' : null}
      />
      <Sparkles count={30} scale={30} size={15} color="#00A7E1" />
    </Canvas>
  );
}
