type Props = {
  isActive: boolean;
  pathUrl: string;
};

const HeaderMenu = (
  { isActive, pathUrl }: Props = { isActive: false, pathUrl: "/" }
) => {
  return (
    <>
      <div
        className={`${
          isActive ? "translate-x-0" : "translate-x-full"
        } transition-all duration-300 bg-white w-screen h-full flex flex-col justify-end items-end fixed top-0 left-0 z-10 lg:hidden`}
      >
        <ul className="flex flex-col gap-y-5 p-5">
          <li className={`text-3xl ${pathUrl === "/" ? "font-semibold" : ""}`}>
            <a
              href="/"
              className={`hover:underline flex justify-between gap-x-2 ${
                pathUrl === "/" ? "underline" : ""
              }`}
            >
              Home
              <div
                className={`i-ic:round-call-made ${
                  pathUrl === "/" ? "rotate-180" : ""
                }`}
              />
            </a>
          </li>
          <li
            className={`text-3xl ${
              pathUrl === "/projects" ? "font-semibold" : ""
            }`}
          >
            <a
              href="/projects"
              className={`hover:underline flex justify-between gap-x-2 ${
                pathUrl === "/projects" ? "underline" : ""
              }`}
            >
              Project
              <div
                className={`i-ic:round-call-made ${
                  pathUrl === "/projects" ? "rotate-180" : ""
                }`}
              />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeaderMenu;
