import { getImage } from 'astro:assets';
import dawnforge from '@/assets/dawnforge-bg.webp';
import tandt from '@/assets/tandt-bg.webp';

const dawnforgeBg = await getImage({ src: dawnforge });
const tandtBg = await getImage({ src: tandt });

const examples = [
  {
    title: 'B&C Pest Control',
    subtitle: "Florida's #1 Pest Control Service",
    content: 'A modern update for a local expert on pest control',
    site: 'https://bandcpestcontrol.com/',
    background: 'bg-[#18181B]',
    poster: dawnforgeBg,
    styles: `background-image: linear-gradient(to right, #3f0624 30%, rgba(63, 6, 36, .8) 60%, transparent), url(${dawnforgeBg.src})`,
  },
  {
    title: 'Dawnforge',
    subtitle: 'A Card Game Compendium',
    content:
      'The website for fan-based interactions with the popular card game Dawncaster. Create cards, vote on designs, and much, much more!',
    site: 'https://www.dawnforge.app/',
    background: 'bg-[#872545]',
    styles: `background-image: linear-gradient(to right, #3f0624 30%, rgba(63, 6, 36, .8) 60%, transparent), url(${dawnforgeBg.src})`,
  },
  {
    title: 'T&T Photography',
    subtitle: 'Showcasing Stunning Shots',
    content:
      'Highlighting the gorgeous works of a local photography team with speed and efficiency',
    site: 'https://tandt-v2.vercel.app/',
    background: 'bg-[#4A3D87]',
    styles: `background-image: linear-gradient(to right, #35597E 30%, rgba(53, 89, 126, .8) 60%, transparent), url(${tandtBg.src})`,
  },
];

export default examples;
