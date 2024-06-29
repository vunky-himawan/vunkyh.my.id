type Props = {
  children: React.ReactNode;
};

const Main = ({ children }: Props) => {
  return (
    <>
      <main className="w-screen flex flex-col gap-y-10 max-w-7xl mx-auto px-5 md:px-10 pt-20 py-3">
        {children}
      </main>
    </>
  );
};

export default Main;
