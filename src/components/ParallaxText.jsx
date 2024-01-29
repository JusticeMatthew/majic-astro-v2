import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from 'framer-motion';
import { wrap } from '@motionone/utils';

export default function ParallaxText({
  children,
  className,
  baseVelocity = 100,
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -80, v)}%`);

  useAnimationFrame((t, delta) => {
    let moveBy = baseVelocity * (delta / 1000);

    moveBy += moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      className={`overflow-visible text-5xl whitespace-nowrap flex flex-nowrap ${className}`}
    >
      <motion.p
        style={{ x }}
        className="uppercase flex whitespace-nowrap flex-nowrap"
      >
        <span className="block mr-8 text-gradient">{children}</span>
        <span className="block mr-8 text-gradient">{children}</span>
        <span className="block mr-8 text-gradient">{children}</span>
        <span className="block mr-8 text-gradient">{children}</span>
        <span className="block mr-8 text-gradient">{children}</span>
      </motion.p>
    </div>
  );
}
