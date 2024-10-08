import { useEffect, useRef, useState } from "react";
import Heading from "../Heading";
import useLoading from "@/hooks/useLoading";

const Hero = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const images = [
    "lv_0_20240625225819-ezgif.com-loop-count.gif",
    "DSC09725 (5).webp",
  ];
  const [medias, setMedias] = useState<string[]>([]);
  const [image, setImage] = useState(1);

  useEffect(() => {
    useLoading(images, setMedias, setIsLoading, "/assets/images/");
  }, []);

  const handleHover = () => {
    setImage((prev) => (prev === 0 ? 1 : 0));
  };

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.src = medias[image];
    }
  }, [image]);

  return (
    <>
      <section>
        <div className="flex flex-col gap-y-3 lg:grid lg:grid-cols-2 lg:gap-x-5">
          <div className="lg:flex lg:flex-col lg:justify-center lg:gap-y-5">
            <Heading title="Empowering Digital Experiences">
              <p>
                Hi there! I'm Vunky Himawan, I'm a passionate junior front-end
                web developer and web designer, dedicated to creating visually
                stunning and user-friendly websites. Explore my projects to see
                how I bring ideas to life with creative design.
              </p>
              <div className="flex gap-x-3">
                <a href="https://github.com/vunky-himawan" target="_blank">
                  <div className="i-mdi:github"></div>
                </a>
                <a href="https://www.instagram.com/vunkyh" target="_blank">
                  <div className="i-mdi:instagram"></div>
                </a>
                <a
                  href="https://www.linkedin.com/in/vunky-himawan"
                  target="_blank"
                >
                  <div className="i-mdi:linkedin"></div>
                </a>
                <a href="/Vunky Himawan - CV.pdf" target="_blank">
                  <div className="i-ic:round-description"></div>
                </a>
              </div>
            </Heading>
          </div>
          <div className={`${isLoading ? "" : "lg:rotate-5"} relative group`}>
            {isLoading && (
              <div className="w-full h-full bg-gray-100 rounded-xl animate-pulse"></div>
            )}
            {!isLoading && (
              <>
                <div className="absolute top-4 -right-3 bg-red-5 p-2 text-white rounded-md rotate-30 text-[0.7rem] md:text-[1rem] z-2 lg:scale-0 lg:group-hover:scale-100 transition-all duration-300">
                  <h1>Junior Frontend Web Developer</h1>
                </div>
                <div className="absolute bottom-4 -left-3 bg-red-5 p-2 text-white rounded-md rotate-30 text-[0.7rem] md:text-[1rem] z-2 lg:scale-0 lg:group-hover:scale-100 transition-all duration-300">
                  <h1>Junior Backend Developer</h1>
                </div>
                <img
                  src={medias[image]}
                  ref={imageRef}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHover}
                  alt=""
                  loading="lazy"
                  className="w-full object-cover rounded-xl"
                />
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
