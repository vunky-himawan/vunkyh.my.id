import type { Project } from "@/models/project";

type Props = {
  data: Project;
  slug: string;
};

const Card = ({ data, slug }: Props) => {
  return (
    <>
      <div>
        <a
          href={`/project/${slug}`}
          className="grid grid-cols-1 grid-row-8 p-2 gap-y-3"
        >
          <div className="row-span-4">
            <img
              src={`/assets/project-images/${slug}/${data.cover}`}
              alt=""
              className="rounded-2xl"
              loading="lazy"
            />
          </div>
          <h1 className="font-bold font-cabinet text-2xl">{data.title}</h1>
          <h5
            className={`w-fit ${
              data.type === "personal"
                ? "bg-red-600/15 text-red-500"
                : "bg-green-600/15 text-green-500"
            } py-2 px-3 font-normal text-base rounded-full capitalize`}
          >
            {data.type}
          </h5>
          <p>{data.description}</p>
        </a>
        <div className="flex gap-3 flex-wrap ">
          {data.stack.map((stack, index) => (
            <a
              key={index}
              href={stack[1]}
              className="text-sm border border-green-500/20 rounded py1 px2 wfit flex gap-x-2 relative z-5 group"
            >
              {/* Animation */}
              <div className="absolute top-0 left-0 right-0 bottom-0 grid grid-cols-10">
                <div className="h-0 group-hover:h-full bg-green-5/30 transition-all duration-300"></div>
                <div className="h-0 group-hover:h-full bg-green-5/30 transition-all duration-300 transition-delay-50"></div>
                <div className="h-0 group-hover:h-full bg-green-5/30 transition-all duration-300 transition-delay-100"></div>
                <div className="h-0 group-hover:h-full bg-green-5/30 transition-all duration-300 transition-delay-150"></div>
                <div className="h-0 group-hover:h-full bg-green-5/30 transition-all duration-300 transition-delay-200"></div>
                <div className="h-0 group-hover:h-full bg-green-5/30 transition-all duration-300 transition-delay-250"></div>
                <div className="h-0 group-hover:h-full bg-green-5/30 transition-all duration-300 transition-delay-300"></div>
                <div className="h-0 group-hover:h-full bg-green-5/30 transition-all duration-300 transition-delay-350"></div>
                <div className="h-0 group-hover:h-full bg-green-5/30 transition-all duration-300 transition-delay-400"></div>
                <div className="h-0 group-hover:h-full bg-green-5/30 transition-all duration-300 transition-delay-450"></div>
              </div>
              {/* End Animation */}
              <div className={stack[2]} />
              {stack[0]}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
