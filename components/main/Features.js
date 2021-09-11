const Features = ({ children }) => {
  return (
    <div className="bg-gray-100 py-20 px-5">
      <h2 className="text-center lg:text-7xl md:text-5xl sm:text-3xl text-xl font-bold mb-10">
        Features
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 2xl:w-3/4 2xl:mx-auto gap-5">
        {children}
      </div>
    </div>
  );
};

export default Features;
