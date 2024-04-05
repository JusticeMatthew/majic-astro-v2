import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/Button.jsx';

export default function LargeCTA() {
  const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
      window.addEventListener('mousemove', updateMousePosition);
      return () => {
        window.removeEventListener('mousemove', updateMousePosition);
      };
    }, []);

    return mousePosition;
  };

  const { x, y } = useMousePosition();

  return (
    <section className="h-[80vh] flex justify-center flex-col gap-20 group/stars">
      <div className="absolute w-screen bg-[#20204E] left-0 h-[80vh] overflow-y-clip">
        <div
          className="w-full h-full bg-repeat opacity-10"
          style={{ backgroundImage: 'url(/images/bg-stars-light.svg)' }}
        >
          <motion.div
            animate={{ x: `${x - 120}px`, y: `${y - 465}px` }}
            transition={{ type: 'tween', ease: 'backOut', duration: 0.3 }}
            id="mask"
            className="z-1 w-60 h-60 bg-[#20204E] group-hover/stars:bg-transparent"
          ></motion.div>
        </div>
      </div>
      <h2 className="z-10 text-8xl font-bold text-light/80 leading-[1.15]">
        Let's cast a spell of{' '}
        <span className="relative after:absolute after:bottom-0 after:left-0 after:bg-primary-gradient after:w-[24.6rem] after:h-2">
          success
        </span>{' '}
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
