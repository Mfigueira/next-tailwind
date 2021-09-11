import H2 from '../UI/H2';

const Features = ({ children }) => {
  return (
    <div className="bg-gray-100 py-20 px-5">
      <H2>Features</H2>
      <div className="grid grid-cols-1 sm:grid-cols-3 2xl:w-3/4 2xl:mx-auto gap-5">
        {children}
      </div>
    </div>
  );
};

export default Features;
