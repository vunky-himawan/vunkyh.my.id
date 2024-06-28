import { useEffect } from "react";
import Lenis from "lenis";
import Hero from "@/components/Hero/Hero";
import Why from "@/components/Why/Why";
import Project from "@/components/Project/Project";
import type { CollectionEntry } from "astro:content";
import Footer from "@/components/Footer";

interface Props {
  projects: CollectionEntry<"projects">[];
}

const Home = ({ projects }: Props) => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

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
