import Link from 'next/link';
import { useEffect, useState } from 'react';
import MenuIcon from '../svg/MenuIcon';
import DropdownMenu from './DropdownMenu';
import NavLinks from './NavLinks';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdownMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) setIsOpen(false);
    };

    window.addEventListener('resize', hideMenu);

    return () => window.removeEventListener('resize', hideMenu);
  });

  return (
    <>
      <nav
        className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono px-2"
        role="navigation"
      >
        <Link href="/">
          <a className="p-4">EGG</a>
        </Link>

        <div
          className="px-4 cursor-pointer md:hidden"
          onClick={toggleDropdownMenu}
        >
          <MenuIcon />
        </div>

        <div className="md:pr-0 pr-4 md:block hidden">
          <NavLinks />
        </div>
      </nav>

      <DropdownMenu open={isOpen} toggle={toggleDropdownMenu} />
    </>
  );
};

export default Navbar;
