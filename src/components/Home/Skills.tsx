import Marquee from "react-fast-marquee";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { TSkill } from "@/types";

const Skills = ({ skills }: { skills: TSkill[] }) => {
  return (
    <div className="py-20 lg:pt-24 lg:pb-36 relative" id="skills">
      <div className="flex justify-center">
        <h1 className="text-2xl lg:text-3xl text-gray-200 gradient px-8 rounded-sm py-2 font-semibold">
          Skills
        </h1>
      </div>
      <div className="pt-8 lg:max-w-7xl mx-2 lg:mx-auto">
        <Marquee pauseOnHover={true}>
          {skills?.map((skill, index) => (
            <div
              key={index}
              className="px-8 md:px-10 py-4 bg-secondaryColor bg-opacity-25 cursor-pointer rounded-3xl mx-2 md:mx-4 group">
              <div className="duration-500 group-hover:scale-110 cursor-pointer flex flex-col items-center gap-4">
                <Image
                  src={skill?.logo}
                  width={400}
                  height={400}
                  className="w-12 h-12 md:w-16 md:h-16"
                  alt={skill?.skillName}
                />
                <h2 className="text-gray-200 font-semibold text-sm md:text-lg uppercase">
                  {skill?.skillName}
                </h2>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
      <div className="flex md:grid grid-cols-12 flex-wrap gap-4 md:max-w-7xl items-center justify-center md:justify-between mx-4 md:mx-auto mt-16">
        {skills?.map((skill, idx) => (
          <TooltipProvider key={idx}>
            <Tooltip>
              <TooltipTrigger>
                <Image
                  src={skill?.logo}
                  alt={skill?.skillName}
                  width={400}
                  height={400}
                  className="w-8 h-8 md:w-12 md:h-12 shadow-lg duration-500 hover:scale-150 cursor-pointer border border-secondaryColor p-1 md:p-2 rounded-xl bg-gray-500 bg-opacity-25"
                />
              </TooltipTrigger>
              <TooltipContent
                style={{
                  background: "#00BFFF",
                  border: "none",
                  borderRadius: "10px",
                }}>
                {skill?.skillName}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
};

export default Skills;
