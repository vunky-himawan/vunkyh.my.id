import useLoading from "@/hooks/useLoading";
import { useEffect, useState } from "react";

interface Props {
  title: string;
  children?: React.ReactNode;
  customStyles?: string;
}

const Heading = ({ title, children, customStyles }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    useLoading(
      "fusion-08.webp",
      setBackgroundImage,
      setIsLoading,
      "/assets/images/"
    );
  }, []);

  return (
    <>
      <div className="flex flex-col">
        {isLoading && (
          <>
            <div className="h-[3.75rem] w-full bg-gray-100 rounded-2xl animate-pulse"></div>
            {children && (
              <>
                <div className="h-[1rem] w-[80%] bg-gray-100 rounded-2xl animate-pulse mt-5"></div>
                <div className="h-[1rem] w-[70%] bg-gray-100 rounded-2xl animate-pulse mt-5"></div>
                <div className="h-[1rem] w-[80%] bg-gray-100 rounded-2xl animate-pulse mt-5"></div>
                <div className="h-[1rem] w-[70%] bg-gray-100 rounded-2xl animate-pulse mt-5"></div>
              </>
            )}
          </>
        )}
        {!isLoading && (
          <>
            <h1
              className={`${customStyles} font-cabinet text-6xl py-1 font-bold text-transparent bg-clip-text bg-cover`}
              style={{ backgroundImage: `url(${backgroundImage})` }}
            >
              {title}
            </h1>
            {children}
          </>
        )}
      </div>
    </>
  );
};

export default Heading;
