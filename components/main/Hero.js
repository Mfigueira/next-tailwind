import Link from 'next/link';
import ShoppingCartIcon from '../svg/ShoppingCartIcon';

const Hero = () => {
  return (
    <div className="bg-white h-screen flex flex-col justify-center items-center">
      <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14">
        EGGCELLENT
      </h1>

      <Link href="/">
        <a className="py-6 px-10 bg-yellow-500 rounded-full text-3xl hover:bg-yellow-300 transition duration-300 ease-in-out flex items-center animate-bounce">
          <span className="inline-block mr-4">Order Now</span>
          <ShoppingCartIcon />
        </a>
      </Link>
    </div>
  );
};

export default Hero;
