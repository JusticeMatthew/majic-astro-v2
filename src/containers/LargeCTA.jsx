import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Button from '@/components/Button.jsx';

export default function LargeCTA() {
  return (
    <section className="md:flex h-[80vh] hidden justify-center flex-col gap-20 group/stars">
      <div className="absolute w-screen bg-[#20204E] left-0 h-[80vh] overflow-y-clip">
        <div className="absolute w-full h-full overflow-x-clip opacity-50">
          <Canvas>
            <Sparkles
              count={30}
              scale={20}
              size={15}
              speed={0.6}
              color={'#735CDD'}
              noise={5}
            />
            <Sparkles count={20} scale={20} size={10} />
            <Sparkles count={20} scale={20} size={10} color={'#00A7E1'} />
          </Canvas>
        </div>
      </div>
      <h2 className="z-10 text-8xl font-cursive font-bold text-light/90 relative drop-shadow-xl">
        Let's cast a spell of <span className="large-cta-text">success</span>{' '}
        for your online endeavors
      </h2>
      <div>
        <Button>
          <p className="px-20">Get in touch</p>
        </Button>
      </div>
    </section>
  );
}
