import { Canvas } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useStore } from '@nanostores/react';
import { bgIsDark } from '@/store/darkBg';

export default function LargeCTASparkles() {
  const $bgIsDark = useStore(bgIsDark);
  return (
    <motion.div
      animate={{ opacity: 50 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 4 }}
      class="fixed w-[130vw] h-full z-0"
    >
      <Canvas className="opacity-50">
        <Sparkles
          count={30}
          scale={12}
          size={10}
          speed={0.6}
          color="#735CDD"
          noise={15}
        />
        <Sparkles
          count={30}
          scale={20}
          size={10}
          color={$bgIsDark ? '#e36ff2' : null}
        />
        <Sparkles count={30} scale={30} size={15} color="#00A7E1" />
      </Canvas>
    </motion.div>
  );
}
