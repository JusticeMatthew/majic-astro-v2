import { useStore } from '@nanostores/react';
import { bgIsDark } from '@/store/darkBg';
import ScrollLink from './ScrollLink';
import navLinks from '@/constants/navLinks';
import MobileNav from './MobileNav';

export default function Header() {
  const $bgIsDark = useStore(bgIsDark);

  return (
    <header
      className={`w-full z-50 fixed h-[4.5rem] backdrop-blur-lg flex items-center transition-all duration-150 ${
        $bgIsDark ? 'bg-light/20' : 'bg-light'
      }`}
    >
      <div id="container" className="flex w-full items-center justify-between">
        <a href="/" className="flex gap-2 cursor-pointer items-center">
          <img src="/images/logo-svg.svg" alt="" width={46} height={46} />
          <h1 className="text-logo astro-font-calistoga">
            Majic
            <br />
            Web Design
          </h1>
        </a>
        <MobileNav />
        <nav className="hidden sm:flex gap-small">
          {navLinks.map((link) => (
            <ScrollLink key={link[0]} to={link[0]}>
              {link[1]}
            </ScrollLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
