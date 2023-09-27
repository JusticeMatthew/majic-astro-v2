import { useStore } from '@nanostores/react';
import { bgIsDark } from '@/store/darkBg';
import ScrollLink from './ScrollLink';
import navLinks from '@/constants/navLinks';

export default function Header() {
  const $bgIsDark = useStore(bgIsDark);

  return (
    <header
      className={`w-full z-50 fixed h-20 backdrop-blur-lg flex items-center transition-all duration-150 ${
        $bgIsDark ? 'bg-light/20' : 'bg-light'
      }`}
    >
      <div id="container" className="flex items-center justify-between">
        <a href="/" className="flex gap-2 cursor-pointer items-center">
          <img src="/images/logo-svg.svg" className="w-14 h-14" />
          <h1 className="md:text-2xl text-lg font-cursive">
            Majic
            <br />
            Web Design
          </h1>
        </a>
        <nav className="flex gap-2">
          {navLinks.map((link, idx) => (
            <ScrollLink key={idx} to={link[0]}>
              {link[1]}
            </ScrollLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
