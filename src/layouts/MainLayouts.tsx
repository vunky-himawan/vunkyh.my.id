import { useEffect } from "react";
import Lenis from "lenis";

interface Props {
  children: React.ReactNode;
}

const Main = ({ children }: Props) => {
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
      <main className="w-screen flex flex-col px-3 gap-y-10 max-w-7xl mx-auto md:px-10 pt-20 py-3">
        {children}
      </main>
    </>
  );
};

export default Main;
