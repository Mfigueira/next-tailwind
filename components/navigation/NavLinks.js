import Link from 'next/link';

const NavLinks = () => {
  return (
    <>
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
    </>
  );
};

export default NavLinks;
