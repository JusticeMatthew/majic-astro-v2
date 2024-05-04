import { Canvas } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';

export default function LargeCTASparkles() {
  return (
    <Canvas>
      <Sparkles
        count={20}
        scale={10}
        size={15}
        speed={0.6}
        color={'#735CDD'}
        noise={5}
      />
      <Sparkles count={20} scale={20} size={10} />
      <Sparkles count={20} scale={30} size={10} color={'#00A7E1'} />
    </Canvas>
  );
}
