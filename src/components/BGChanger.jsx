import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { bgIsDark } from '@/store/darkBg';

export default function BGChanger({ children }) {
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    const body = document.body;
    if (!inView) {
      bgIsDark.set(true);
      body.style.backgroundColor = '#F8FAFC';
      body.style.backgroundImage = `linear-gradient(
        to right,
        rgba(248, 250, 252, 0.6),
        rgba(0, 167, 225, 0.25)
      )`;
      body.style.backgroundImage = `linear-gradient(
        to left,
        rgba(115, 92, 221, 0.2),
        rgba(27, 82, 153, 0.4)
      )`;
    }

    if (inView) {
      bgIsDark.set(false);
      body.style.backgroundColor = '#0B112B';
      body.style.backgroundImage = `url("/images/dark-bg-texture.svg")`;
      body.style.backgroundImage = `linear-gradient(
        to left,
        rgba(115, 92, 221, 0.2),
        rgba(27, 82, 153, 0.4)
      )`;
    }
  }, [inView]);

  return <div ref={ref}>{children}</div>;
}
