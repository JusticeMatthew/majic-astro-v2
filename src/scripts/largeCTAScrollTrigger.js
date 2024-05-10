import { gsap } from 'gsap';

gsap.from('#content-cta', {
  opacity: 0,
  duration: 1,
  x: -75,
  stagger: 0.3,
  delay: 0.3,
  scrollTrigger: { trigger: '#content-cta', start: 'bottom bottom' },
});
