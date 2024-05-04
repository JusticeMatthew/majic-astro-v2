import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { bgIsDark } from '@/store/darkBg';

export default function BGChanger({ children }) {
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    const body = document.body;
    if (!inView) {
      bgIsDark.set(true);
      body.style.backgroundColor = '#D8D7F3';
    }

    if (inView) {
      bgIsDark.set(false);
      body.style.backgroundColor = '#20204E';
    }
  }, [inView]);

  return <div ref={ref}>{children}</div>;
}
