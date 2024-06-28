import type { ChoosingMeData } from "@/models/choosing-me-data";

type Props = {
  cardProps: ChoosingMeData;
  children: React.ReactNode;
};

const Card = ({ cardProps, children }: Props) => {
  return (
    <>
      <div className="bg-white border rounded-md p-5 h-[20rem] md:h-[25rem] flex flex-col gap-y-5">
        <div className="flex items-center gap-x-3">
          <div className="bg-gray-100 p-2 rounded-full w-fit">{children}</div>
          <h5 className="text-xl font-semibold font-cabinet">{cardProps.title}</h5>
        </div>
        <p>{cardProps.description}</p>
      </div>
    </>
  );
};

export default Card;
