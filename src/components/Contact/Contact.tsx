import { useState } from "react";
import Heading from "../Heading";
import Marquee from "../Marquee";

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (isHovered: boolean) => {
    setIsHovered(isHovered);
  };

  return (
    <>
      <section>
        <div className="py-10">
          <Heading title="Get in Touch" customStyles="text-center" />
          <div className="py-5 p-5 text-warmGray-4 flex flex-col gap-y-5">
            <p className="text-center break-words text-3xl font-semibold">
              Have an idea or project in mind? I’d love to help bring it to
              life!
            </p>
            <div className="flex justify-center items-center">
              <a
                onMouseEnter={() => handleMouseEnter(true)}
                onMouseLeave={() => handleMouseEnter(false)}
                href="mailto:vunkyhimawan19@gmail.com"
                className="text-center py-5 rounded-full bg-green-400/40 text-green-700 w-[15rem] h-[4rem] hover:bg-green-400/80 transition-all duration-300 overflow-hidden"
              >
                {!isHovered && (
                  <>
                    Start a Project <div className="i-ic:round-call-made" />
                  </>
                )}
                {isHovered && (
                  <div className="flex gap-x-2">
                    <Marquee>
                      Start a Project <div className="i-ic:round-call-made" />
                      Start a Project <div className="i-ic:round-call-made" />
                    </Marquee>
                    <Marquee>
                      Start a Project <div className="i-ic:round-call-made" />
                      Start a Project <div className="i-ic:round-call-made" />
                    </Marquee>
                  </div>
                )}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
