import useLoading from "@/hooks/useLoading";
import type { Project } from "@/models/project";
import { useEffect, useState } from "react";

type Props = {
  project: Project;
  slug: string;
  colSpan?: string;
};

const Card = ({ project, slug, colSpan }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [cacheImage, setCacheImage] = useState<string>("");

  useEffect(() => {
    useLoading(
      project.images[0],
      setCacheImage,
      setIsLoading,
      `/assets/project-images/${slug}/`
    );
  }, []);

  return (
    <>
      <a
        href={`/project/${slug}`}
        className={`flex flex-col gap-y-5 bg-white md:justify-between border rounded-xl p-5 ${colSpan} relative overflow-hidden group`}
      >
        {isLoading && <Skeleton />}
        {!isLoading && (
          <>
            {/* Animation */}
            <div className="absolute top-0 left-0 right-0 bottom-0 grid grid-cols-5">
              <div
                className={`h-0 group-hover:h-full ${
                  project.type === "personal" && "bg-red-5/30"
                } ${project.type === "campus assignment" && "bg-green-5/30"} ${
                  project.type === "other" && "bg-blue-5/30"
                } transition-all duration-300`}
              ></div>
              <div
                className={`h-0 group-hover:h-full ${
                  project.type === "personal" && "bg-red-5/30"
                } ${project.type === "campus assignment" && "bg-green-5/30"} ${
                  project.type === "other" && "bg-blue-5/30"
                } transition-all duration-300 transition-delay-50`}
              ></div>
              <div
                className={`h-0 group-hover:h-full ${
                  project.type === "personal" && "bg-red-5/30"
                } ${project.type === "campus assignment" && "bg-green-5/30"} ${
                  project.type === "other" && "bg-blue-5/30"
                } transition-all duration-300 transition-delay-100`}
              ></div>
              <div
                className={`h-0 group-hover:h-full ${
                  project.type === "personal" && "bg-red-5/30"
                } ${project.type === "campus assignment" && "bg-green-5/30"} ${
                  project.type === "other" && "bg-blue-5/30"
                } transition-all duration-300 transition-delay-150`}
              ></div>
              <div
                className={`h-0 group-hover:h-full ${
                  project.type === "personal" && "bg-red-5/30"
                } ${project.type === "campus assignment" && "bg-green-5/30"} ${
                  project.type === "other" && "bg-blue-5/30"
                } transition-all duration-300 transition-delay-200`}
              ></div>
            </div>
            {/* End Animation */}

            <div className="relative z-2">
              <div className="text-xl h-max py-3 capitalize flex flex-col justify-center items-center gap-5">
                <h4 className="font-bold text-4xl text-center font-cabinet">
                  {project.title}{" "}
                </h4>
                <h5
                  className={`w-fit ${
                    project.type === "personal" && "bg-red-600/15 text-red-500"
                  } ${
                    project.type === "campus assignment" &&
                    "bg-green-600/15 text-green-500"
                  } ${
                    project.type === "other" && "bg-blue-600/15 text-blue-500"
                  } py-2 px-3 font-normal text-base rounded-full`}
                >
                  {project.type}
                </h5>
              </div>
              <p className="text-center">{project.description}</p>
            </div>
            <div className="lg:h-[25rem] md:h-[13rem] z-2">
              <img
                src={cacheImage}
                alt=""
                className="aspect-ratio-video rounded-2xl w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </>
        )}
      </a>
    </>
  );
};

const Skeleton = () => {
  return (
    <>
      <div className="relative z-2">
        <div className="text-xl h-max py-3 capitalize flex flex-col justify-center items-center gap-5">
          <h4 className="h-[2.25rem] w-full bg-gray-100 animate-pulse rounded-xl"></h4>
          <h5 className="h-[2.25rem] w-full bg-gray-100 animate-pulse rounded-xl"></h5>
        </div>
        <p className="h-[1rem] w-[50%] bg-gray-100 animate-pulse rounded-xl"></p>
        <p className="h-[1rem] w-[50%] bg-gray-100 animate-pulse rounded-xl mt-3"></p>
        <p className="h-[1rem] w-[50%] bg-gray-100 animate-pulse rounded-xl mt-3"></p>
      </div>
      <div className="lg:h-[25rem] md:h-[13rem] z-2">
        <div className="w-full h-full bg-gray-100 animate-pulse rounded-xl"></div>
      </div>
    </>
  );
};

export default Card;
