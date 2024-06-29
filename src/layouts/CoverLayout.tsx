import { useEffect, useState } from "react";

type Props = {
  images: Array<string>;
  slug: string;
};

const CoverLayout = ({ images, slug }: Props) => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => {
        setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      },
      imageIndex === 0 ? 3000 : 3000
    );

    return () => clearInterval(interval);
  }, [imageIndex]);

  const hanldeChangeImage = (index: number) => {
    setImageIndex(index);
  };

  return (
    <>
      <div className="w-full h-full gap-5 flex flex-col lg:grid-cols-4 lg:grid">
        <div className="lg:col-span-3 rounded-2xl overflow-hidden">
          <picture>
            <img
              src={`/assets/project-images/${slug}/${images[imageIndex]}`}
              alt=""
              className="w-full h-full object-cover"
            />
          </picture>
        </div>
        <div className="lg:col-span-1 rounded-2xl overflow-scroll">
          <div className="flex w-max lg:flex-col gap-5">
            {images.map((image, index) => (
              <button
                onClick={() => hanldeChangeImage(index)}
                className="w-full h-[10rem] flex-1 rounded-xl overflow-hidden"
              >
                <img
                  src={`/assets/project-images/${slug}/${image}`}
                  alt=""
                  className="w-full h-full object-cover object-top"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CoverLayout;
