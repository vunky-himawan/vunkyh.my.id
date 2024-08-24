import type { ChoosingMeData } from "@/models/choosing-me-data";
import Card from "./Components/Card";
import { CHOOSING_ME_DATA } from "@/data/choosing-me-data";
import Heading from "../../Heading";

const Why = () => {
  return (
    <>
      <section>
        <div className="max-md:sticky max-md:top-17">
          <Heading title="Why Collaborate with Me?" />
        </div>

        <div className="grid grid-cols-1 gap-5 pt-5 md:grid-cols-2">
          {CHOOSING_ME_DATA.map((data: ChoosingMeData) => (
            <div key={data.id} className="max-md:sticky max-md:top-[17rem]">
              <Card cardProps={data}>
                {data.icon === "mdi:blur" && (
                  <div className="i-mdi:blur text-xl" />
                )}
                {data.icon === "mdi:water" && (
                  <div className="i-mdi:water text-xl" />
                )}
                {data.icon === "mdi:charity" && (
                  <div className="i-mdi:charity text-xl" />
                )}
                {data.icon === "mdi:all-inclusive" && (
                  <div className="i-mdi:all-inclusive text-xl" />
                )}
              </Card>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Why;
