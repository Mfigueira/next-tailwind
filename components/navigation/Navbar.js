import Link from 'next/link';
import MenuIcon from '../svg/MenuIcon';

const Navbar = () => {
  return (
    <nav
      className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono px-2"
      role="navigation"
    >
      <Link href="/">
        <a className="p-4">EGG</a>
      </Link>

      <div className="px-4 cursor-pointer md:hidden">
        <MenuIcon />
      </div>

      <div className="md:pr-0 pr-4 md:block hidden">
        <Link href="/">
          <a className="p-4">Home</a>
        </Link>
        <Link href="/menu">
          <a className="p-4">Menu</a>
        </Link>
        <Link href="/about">
          <a className="p-4">About</a>
        </Link>
        <Link href="/contact">
          <a className="p-4">Contact</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
