import useLoading from "@/hooks/useLoading";
import { useEffect, useState } from "react";

type Props = {
  images: Array<string>;
  slug: string;
  setIsLoadingProp?: Function;
};

const ProjectCover = ({ images, slug, setIsLoadingProp }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageIndex, setImageIndex] = useState(0);
  const [cacheImages, setCacheImages] = useState<Array<string>>([]);

  useEffect(() => {
    useLoading(
      images,
      setCacheImages,
      setIsLoading,
      `/assets/project-images/${slug}/`
    );
  }, []);

  useEffect(() => {
    if (setIsLoadingProp) {
      setIsLoadingProp(isLoading);
    }
  }, [isLoading]);

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
        {isLoading && (
          <>
            <div className="w-full h-2xl bg-slate-5/20 rounded-2xl flex items-center justify-center lg:col-span-3 animate-pulse"></div>
            <div className="lg:col-span-1 rounded-2xl overflow-scroll">
              <div className="flex lg:flex-col gap-5 max-md:w-max h-full">
                <div className="w-full h-[10rem] flex-1 rounded-xl overflow-hidden bg-slate-5/20 animate-pulse"></div>
                <div className="w-full h-[10rem] flex-1 rounded-xl overflow-hidden bg-slate-5/20 animate-pulse"></div>
                <div className="w-full h-[10rem] flex-1 rounded-xl overflow-hidden bg-slate-5/20 animate-pulse"></div>
                <div className="w-full h-[10rem] flex-1 rounded-xl overflow-hidden bg-slate-5/20 animate-pulse"></div>
              </div>
            </div>
          </>
        )}
        {!isLoading && (
          <>
            <div className="lg:col-span-3 rounded-2xl overflow-hidden">
              <picture>
                <img
                  src={cacheImages[imageIndex]}
                  alt=""
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
              </picture>
            </div>
            <div className="lg:col-span-1 rounded-2xl overflow-scroll px-1">
              <div className="flex max-md:w-max lg:flex-col gap-5">
                {cacheImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => hanldeChangeImage(index)}
                    className={`w-full h-[10rem] flex-1 rounded-xl overflow-hidden ${
                      imageIndex === index ? "border-2 border-blue-500" : ""
                    }`}
                  >
                    <img
                      src={image}
                      alt=""
                      className="w-full h-full object-cover object-top"
                    />
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProjectCover;
