import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollingWords() {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [-600, -1800]);

  return (
    <div
      id="scrolling-words"
      className="flex flex-row min-h-[16rem] sm:min-h-[24rem] pointer-events-none"
    >
      <motion.p
        style={{ x: x }}
        transition={{
          duration: 2,
        }}
        className="flex items-center overflow-visible uppercase text-7xl text-gradient font-cursive sm:text-9xl mg:my-0"
      >
        {['pocus', 'lumos', 'abracadabra', 'presto', 'alakazam', 'hocus'].map(
          (item, idx) => (
            <React.Fragment key={idx}>
              <span>{item}</span>
              <img
                src="/images/logo-svg.svg"
                alt=""
                className="relative inline w-8 h-8"
              />
            </React.Fragment>
          ),
        )}
      </motion.p>
    </div>
  );
}
