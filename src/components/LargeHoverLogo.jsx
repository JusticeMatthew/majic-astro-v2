import { motion } from 'framer-motion';

export default function LargeHoverLogo({ duration, className }) {
  return (
    <motion.img
      src="/images/logo-svg.svg"
      alt=""
      animate={{
        y: [0, -20, 10, -15, 15, -20, 20],
        transition: {
          ease: 'easeInOut',
          repeatType: 'reverse',
          duration: { duration },
          repeat: Infinity,
        },
      }}
      width={320}
      height={320}
      className={`opacity-20 absolute pointer-events-none ${className}`}
    />
  );
}
