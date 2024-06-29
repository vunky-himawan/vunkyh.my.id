import Hero from "@/components/Hero/Hero";
import Why from "@/components/Why/Why";
import Project from "@/components/Project/Project";
import type { CollectionEntry } from "astro:content";
import Footer from "@/components/Footer";

interface Props {
  projects: CollectionEntry<"projects">[];
}

const Home = ({ projects }: Props) => {
  return (
    <>
      <Hero />
      <Why />
      <Project data={projects} />
      <Footer />
    </>
  );
};

export default Home;
