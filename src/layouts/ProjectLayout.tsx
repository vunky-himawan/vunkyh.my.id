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
        <div className="flex flex-col gap-y-5">
          <BackButton />
          <Heading title={frontmatter.title}>
            <p>{formatedDate}</p>
            <p>{frontmatter.description}</p>
            <h5
              className={`w-fit ${
                frontmatter.type === "personal"
                  ? "bg-red-600/15 text-red-500"
                  : "bg-green-600/15 text-green-500"
              } py-2 px-3 font-normal text-base rounded-full capitalize`}
            >
              {frontmatter.type}
            </h5>
          </Heading>
          <div className="relative flex flex-col gap-y-5">
            <div className="lg:max-h-3xl overflow-hidden rounded-2xl">
              <img
                src={`/assets/project-images/${slug}/${medias[imageIndex]}`}
                alt=""
                className="rounded-2xl w-full h-full object-cover"
              />
            </div>
            <div className="border rounded-xl p-3">
              <h1 className="font-semibold text-xl font-cabinet">
                {frontmatter.role}
              </h1>
            </div>
            <div className="border rounded-xl p-3">
              <h1 className="font-semibold text-xl font-cabinet">Tech Stack</h1>
              <div className="markdown">
                <ol>
                  {frontmatter.stack.map((stack, index) => (
                    <li className="p-2" key={index}>
                      <a href={stack[1]} className="flex gap-x-2 items-center">
                        <div className={stack[2]}></div>
                        {stack[0]}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="border rounded-xl p-3 markdown !max-w-full">
              <a
                href={frontmatter.source}
                className="flex gap-x-2 items-center"
              >
                <div className="i-logos:github-octocat " />
                Source Code
              </a>
            </div>
          </div>
          <div className="markdown !max-w-full">{children}</div>
        </div>
      </section>
    </>
  );
};

export default ProjectLayout;
