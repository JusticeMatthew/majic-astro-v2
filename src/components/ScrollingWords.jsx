import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ParallaxText from './ParallaxText';

export default function ScrollingWords() {
  return (
    <div className="flex flex-row min-h-[16rem] sm:min-h-[24rem] pointer-events-none items-center">
      {/* <p
        transition={{
          duration: 2,
        }}
        className="flex items-center overflow-visible uppercase text-7xl text-gradient font-cursive sm:text-9xl mg:my-0"
      > */}
      <ParallaxText
        client:idle
        baseVelocity={1}
        className="uppercase text-7xl font-cursive sm:text-9xl md:my-0"
      >
        Abracadabra Presto Alakazam Hocus Pocus
      </ParallaxText>
      {/* {['pocus', 'abracadabra', 'presto', 'alakazam', 'hocus'].map(
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
        )} */}
      {/* </p> */}
    </div>
  );
}
