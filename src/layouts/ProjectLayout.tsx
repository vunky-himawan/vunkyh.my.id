import BackButton from "@/components/BackButton";
import Heading from "@/components/Heading";
import type { Project } from "@/models/project";
import { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
  frontmatter: Project;
  slug: string;
}

const ProjectLayout = ({ children, frontmatter, slug }: Props) => {
  const medias: [string, string | null] = [frontmatter.cover, frontmatter.gif];
  const [imageIndex, setImageIndex] = useState(0);

  if (frontmatter.gif) {
    useEffect(() => {
      const interval = setInterval(
        () => {
          setImageIndex((prevIndex) => (prevIndex + 1) % medias.length);
        },
        imageIndex === 0 ? 3000 : 3000
      );

      return () => clearInterval(interval);
    }, [imageIndex]);
  }

  let formatedDate;

  if (frontmatter.date) {
    formatedDate = new Date(frontmatter.date).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });

    formatedDate = formatedDate.replace(" ", " - ");
  }

  return (
    <>
      <section>
        <div className="flex flex-col gap-y-4">
          <BackButton />
          <Heading title={frontmatter.title}>
            <p>{formatedDate}</p>
            <p>{frontmatter.description}</p>
          </Heading>
          <div className="w-full">
            <h5
              className={`w-fit py-2 px-3 ${
                frontmatter.type === "personal"
                  ? "bg-red-600/15 text-red-500"
                  : "bg-green-600/15 text-green-500"
              }  text-base rounded-full capitalize`}
            >
              {frontmatter.type}
            </h5>
          </div>
          <div className="relative flex flex-col gap-y-5">
            <div className="lg:max-h-3xl overflow-hidden rounded-2xl">
              <img
                src={`/assets/project-images/${slug}/${medias[imageIndex]}`}
                alt=""
                className="rounded-2xl w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col gap-5 md:flex-row">
              <div className="border rounded-xl p-3 md:order-first md:flex-1">
                <h1 className="font-semibold text-xl font-cabinet">
                  Tech Stack
                </h1>
                <div className="pt-3"> 
                  <ul className="flex markdown gap-3 flex-wrap">
                    {frontmatter.stack.map((stack, index) => (
                      <li className="border rounded-md" key={index}>
                        <a
                          href={stack[1]}
                          className="inline-flex justify-center items-center p-2 gap-x-3"
                        >
                          <div className={stack[2]}></div>
                          {stack[0]}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-5 md:flex-1">
                <div className="border rounded-xl p-3 markdown !max-w-full flex items-center ">
                  <a
                    href={frontmatter.source}
                    className="flex gap-x-2 items-center"
                  >
                    <div className="i-logos:github-octocat " />
                    Source Code
                  </a>
                </div>
                {frontmatter.demo && (
                  <div className="border rounded-xl p-3 markdown !max-w-full flex items-center md:row-span-0">
                    <a
                      href={frontmatter.demo}
                      className="flex gap-x-2 items-center"
                    >
                      <div className="i-icon-park:web-page " />
                      Demo
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="markdown !max-w-full">{children}</div>
        </div>
      </section>
    </>
  );
};

export default ProjectLayout;
