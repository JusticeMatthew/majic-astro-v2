import { Link } from 'react-scroll';

export default function ScrollLink({ children, to }) {
  return (
    <Link
      href="/"
      to={to}
      activeClass="bg-bottom bg-[length:100%_6px]"
      offset={-100}
      spy={true}
      smooth={true}
      isDynamic={true}
      duration={500}
      className="py-2 px-3 font-medium text-lg bg-primary-gradient bg-bottom bg-[length:100%_0%] bg-no-repeat hover:bg-[length:100%_100%] transition-[background-size] rounded-xl hover:text-light cursor-pointer"
      alt={to}
    >
      {children}
    </Link>
  );
}
