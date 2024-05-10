import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { bgIsDark } from '@/store/darkBg';

export default function BGChanger({ children }) {
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    const body = document.body;
    const header = document.getElementById('header');

    if (!inView) {
      bgIsDark.set(true);
      body.style.backgroundColor = '#D8D7F3';
      header.style.backgroundColor = 'rgba(248, 250, 252, 0.2)';
    }

    if (inView) {
      bgIsDark.set(false);
      body.style.backgroundColor = '#20204E';
      header.style.backgroundColor = '#F8FAFC';
    }
  }, [inView]);

  return <div ref={ref}>{children}</div>;
}
