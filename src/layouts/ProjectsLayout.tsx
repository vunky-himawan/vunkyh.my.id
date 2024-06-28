import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Heading from "@/components/Heading";
import Card from "@/components/ProjectsCard";
import type { CollectionEntry } from "astro:content";

type Props = {
  pathURL: string;
  sortedProjects: CollectionEntry<"projects">[];
};

type entry = CollectionEntry<"projects">;

const ProjectsLayout = ({ pathURL, sortedProjects }: Props) => {
  return (
    <>
      <Header pathUrl={pathURL} />
      <Heading title="Explore My Work">
        <p>
          As a junior front-end web developer and web designer, I've worked on
          exciting projects showcasing my skills in coding and design. Each
          project reflects my creativity and dedication to building beautiful,
          functional web experiences.
        </p>
      </Heading>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:grid-cols-2">
        {sortedProjects.map((project: entry, index: number) => (
          <Card data={project.data} slug={project.slug} key={index} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default ProjectsLayout;
