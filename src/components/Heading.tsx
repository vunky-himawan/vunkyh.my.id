interface Props {
  title: string;
  children?: React.ReactNode;
  customStyles?: string;
}

const Heading = ({ title, children, customStyles }: Props) => {
  return (
    <>
      <div className="flex flex-col gap-y-3">
        <h1
          className={`${customStyles} font-cabinet text-6xl py-1 font-bold text-transparent bg-clip-text bg-[url(/assets/images/fusion-08.webp)] bg-cover`}
        >
          {title}
        </h1>
        {children}
      </div>
    </>
  );
};

export default Heading;
