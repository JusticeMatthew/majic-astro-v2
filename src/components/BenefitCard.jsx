import { motion } from 'framer-motion';
import benefits from '@/constants/benefits.js';

export default function BenefitCard() {
  return (
    <>
      {benefits.map(({ icon, alt, topText, bottomText, content, timing }) => (
        <motion.div
          key={topText}
          initial={{ rotateY: -180 }}
          whileInView={{ rotateY: 0, scale: [1, 1.05, 1] }}
          transition={{ duration: 1.3, delay: timing }}
          viewport={{ once: true }}
          className="p-14 bg-light rounded-lg max-tablet:hidden h-auto shadow gap-10 benefit-card relative"
        >
          <motion.div
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 0 }}
            transition={{ delay: timing + 0.3, duration: 0.1 }}
            viewport={{ once: true }}
            className="absolute ring ring-blurple rounded-xl m-auto w-[85%] h-[90%] left-0 right-0 top-0 bottom-0 flex items-center justify-center"
          >
            <img
              src="images/logo-svg.svg"
              alt="logo"
              width={240}
              height={240}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: timing + 0.4, duration: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col items-center h-full w-full"
          >
            <img
              src={icon}
              alt={alt}
              className="mb-14"
              height={128}
              width={null}
            />
            <p className="text-5xl text-center text-text font-cursive">
              <span className="text-gradient">{topText}</span>
              <br />
              <span className="whitespace-nowrap">{bottomText}</span>
            </p>
            <p className="text-xl text-center mt-8">{content}</p>
          </motion.div>
        </motion.div>
      ))}
    </>
  );
}
