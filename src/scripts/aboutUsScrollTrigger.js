import { gsap } from 'gsap';

gsap.from('#content-about', {
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: { trigger: '#content-about', start: 'bottom bottom' },
});
