import { useState } from "react";
import HeaderMenu from "./HeaderMenu";
import Marquee from "./Marquee";

type Props = {
  pathUrl: string;
};

const Header = ({ pathUrl }: Props = { pathUrl: "/" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = (menu: string, isHovered: boolean) => {
    setIsHovered(isHovered);
    setHoveredMenu(menu);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 p-5 z-11 flex items-center justify-end gap-x-5 w-screen max-w-7xl mx-auto">
        <div className=" rounded-full py-2 px-5 bg-white/10 w-fit backdrop-blur-3xl ">
          <a href="/" className="text-lg">
            <span className="font-bold font-cabinet">Vunky</span> Himawan
          </a>
        </div>
        <div className="rounded-full py-2 px-5 bg-white/10 w-fit backdrop-blur-3xl lg:hidden">
          <button onClick={toggleMenu} className="text-lg">
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
        <div className="rounded-full py-2 bg-white/10 w-[6rem] backdrop-blur-3xl max-lg:hidden overflow-hidden">
          <a
            href="/"
            onMouseEnter={() => handleMouseEnter("Home", true)}
            onMouseLeave={() => handleMouseEnter("", false)}
            className={`flex gap-x-2  ${pathUrl === "/" ? "underline" : ""}`}
          >
            {((isHovered && hoveredMenu !== "Home") ||
              (!isHovered && pathUrl !== "/")) && (
              <>
                <div className="w-full flex justify-center items-center">
                  <div className="flex flex-shrink-0 gap-x-2 justify-center items-center">
                    Home
                    <div
                      className={`i-ic:round-call-made text-sm ${
                        pathUrl === "/" ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>
              </>
            )}
            {((!isHovered && pathUrl === "/") || hoveredMenu === "Home") && (
              <>
                <Marquee>
                  Home
                  <div
                    className={`i-ic:round-call-made text-sm ${
                      pathUrl === "/" ? "rotate-180" : ""
                    }`}
                  />
                  Home
                  <div
                    className={`i-ic:round-call-made text-sm ${
                      pathUrl === "/" ? "rotate-180" : ""
                    }`}
                  />
                  Home
                  <div
                    className={`i-ic:round-call-made text-sm ${
                      pathUrl === "/" ? "rotate-180" : ""
                    }`}
                  />
                </Marquee>
                <Marquee>
                  Home
                  <div
                    className={`i-ic:round-call-made text-sm ${
                      pathUrl === "/" ? "rotate-180" : ""
                    }`}
                  />
                  Home
                  <div
                    className={`i-ic:round-call-made text-sm ${
                      pathUrl === "/" ? "rotate-180" : ""
                    }`}
                  />
                  Home
                  <div
                    className={`i-ic:round-call-made text-sm ${
                      pathUrl === "/" ? "rotate-180" : ""
                    }`}
                  />
                </Marquee>
              </>
            )}
          </a>
        </div>
        <div className="rounded-full py-2 bg-white/10 w-[8rem] backdrop-blur-3xl max-lg:hidden overflow-hidden">
          <a
            href="/projects"
            onMouseEnter={() => handleMouseEnter("Projects", true)}
            onMouseLeave={() => handleMouseEnter("", false)}
            className={`flex gap-x-2  ${
              pathUrl === "/projects" ? "underline" : ""
            }`}
          >
            {((isHovered && hoveredMenu !== "Projects") ||
              (!isHovered && pathUrl !== "/projects")) && (
              <>
                <div className="w-full flex justify-center items-center">
                  <div className="flex flex-shrink-0 gap-x-2 justify-center items-center">
                    Projects
                    <div
                      className={`i-ic:round-call-made text-sm ${
                        pathUrl === "/projects" ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>
              </>
            )}
            {((!isHovered && pathUrl === "/projects") ||
              hoveredMenu === "Projects") && (
              <>
                <Marquee>
                  Projects
                  <div
                    className={`i-ic:round-call-made text-sm ${
                      pathUrl === "/projects" ? "rotate-180" : ""
                    }`}
                  />
                  Projects
                  <div
                    className={`i-ic:round-call-made text-sm ${
                      pathUrl === "/projects" ? "rotate-180" : ""
                    }`}
                  />
                  Projects
                  <div
                    className={`i-ic:round-call-made text-sm ${
                      pathUrl === "/projects" ? "rotate-180" : ""
                    }`}
                  />
                </Marquee>
                <Marquee>
                  Projects
                  <div
                    className={`i-ic:round-call-made text-sm ${
                      pathUrl === "/projects" ? "rotate-180" : ""
                    }`}
                  />
                  Projects
                  <div
                    className={`i-ic:round-call-made text-sm ${
                      pathUrl === "/projects" ? "rotate-180" : ""
                    }`}
                  />
                  Projects
                  <div
                    className={`i-ic:round-call-made text-sm ${
                      pathUrl === "/projects" ? "rotate-180" : ""
                    }`}
                  />
                </Marquee>
              </>
            )}
          </a>
        </div>
      </header>

      <HeaderMenu isActive={isOpen} pathUrl={pathUrl} />
    </>
  );
};

export default Header;
