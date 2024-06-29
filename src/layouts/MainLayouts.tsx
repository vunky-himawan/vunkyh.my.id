type Props = {
  children: React.ReactNode;
};

const Main = ({ children }: Props) => {
  return (
    <>
      <main className="w-screen flex flex-col px-3 gap-y-10 max-w-7xl mx-auto md:px-10 pt-20 py-3">
        {children}
      </main>
    </>
  );
};

export default Main;
