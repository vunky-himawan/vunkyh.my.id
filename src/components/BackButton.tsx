const BackButton = () => {
  return (
    <>
      <section>
        <a
          href="/"
          className="flex gap-x-5 items-center w-fit text-fuchsia-700 group lg:relative lg:py-2 lg:pr-2 lg:pl-14"
        >
          <div className="bg-gray-100 p-2 rounded-full overflow-hidden lg:absolute lg:left-0 lg:scale-0 lg:group-hover:scale-100 lg:transition-transform lg:duration-300">
            <div className="i-tabler:arrow-wave-left-up lg:translate-x-[150%] group-hover:translate-x-0 transition-transform duration-300 transition-delay-100" />
          </div>
          <p className="group-hover:underline lg:left-0 lg:-translate-x-14 lg:group-hover:translate-0 lg:transition-transform lg:duration-300">
            Back to main
          </p>  
        </a>
      </section>
    </>
  );
};

export default BackButton;
