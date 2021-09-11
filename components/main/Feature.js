import Image from 'next/image';

const Feature = ({ src, title, description }) => {
  return (
    <div className="flex flex-col font-mono h-96 bg-gray-200 shadow-lg rounded overflow-hidden">
      <div className="relative h-1/2">
        <Image
          src={src}
          alt={title}
          sizes="(min-width: 1536px) 1000px, 400px"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8UQ8AAhUBSQV8WJQAAAAASUVORK5CYII="
        />
      </div>
      <div className="p-4">
        <h3 className="text-2xl mb-2">{title}</h3>
        <p className="mb-2">{description}</p>
      </div>
    </div>
  );
};

export default Feature;
