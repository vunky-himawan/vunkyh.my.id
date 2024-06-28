import type { CollectionEntry } from "astro:content";
import Heading from "../Heading";
import Card from "./Components/Card";

type Props = {
  data: CollectionEntry<"projects">[];
};

const Project = ({ data }: Props) => {
  return (
    <>
      <section>
        <Heading title="Discover My Projects">
          <p>
            Dive into my portfolio and discover the projects that showcase my
            skills and creativity. Let's work together to create something
            extraordinary!
          </p>
        </Heading>
        <div className="grid grid-cols-1 gap-5 py-5 lg:grid-cols-13 md:grid-cols-2">
          {data.map((project, index) => (
            <Card
              key={index}
              slug={project.slug}
              project={project.data}
              colSpan={index === 0 || index === 3 ? "lg:col-span-7" : "lg:col-span-6"}
            />
          ))}
        </div>
        <a
          href="/projects"
          className="text-center py-5 inline-block font-bold w-full hover:underline"
        >
          - - SEE MORE - -
        </a>
      </section>
    </>
  );
};

export default Project;
