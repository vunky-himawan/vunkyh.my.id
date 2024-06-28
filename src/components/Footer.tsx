import Contact from "./Contact/Contact";
import FunFact from "./FunFact/FunFact";

const Footer = () => {
  return (
    <>
      <footer className="grid grid-cols-1 gap-5 bg-green-5/20 px5 pt-5 rounded-2xl">
        <div className="flex flex-col gap-5 lg:grid lg:grid-cols-2">
          <div className="lg:order-last">
            <FunFact />
          </div>
          <div>
            <Contact />
          </div>
        </div>
        <div className="grid grid-cols-2">
          <ul>
            <li className="flex items-center justify-center">
              <div className="flex flex-col gap-5">
                <h1 className="font-semibold text-xl">Social</h1>
                <div className="flex flex-col gap-2">
                  <a href="https://github.com/vunkyhimawan19" className="hover:underline">Github</a>
                  <a href="https://www.linkedin.com/in/vunky-himawan" className="hover:underline">
                    LinkedIn
                  </a>
                  <a href="https://www.instagram.com/vunkyhimawan19" className="hover:underline">
                    Instagram
                  </a>
                </div>
              </div>
            </li>
          </ul>
          <ul>
            <li className="flex items-center justify-center">
              <div className="flex flex-col gap-5">
                <h1 className="font-semibold text-xl">Pages</h1>
                <div className="flex flex-col gap-2">
                  <a href="/" className="hover:underline">Home</a>
                  <a href="/projects" className="hover:underline">Projects</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="text-center pt-10 px-5 pb-5">
          <p className="text-sm">
            Copyright &copy; {new Date().getFullYear()} | Vunky Himawan
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
