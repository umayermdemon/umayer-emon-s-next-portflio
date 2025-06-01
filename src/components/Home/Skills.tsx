import Marquee from "react-fast-marquee";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { TSkill } from "@/types";

// const skills = [
//   {
//     name: "HTML",
//     image:
//       "https://res.cloudinary.com/duagqnvpw/image/upload/v1739375117/html_fva0ic.png",
//   },
//   {
//     name: "CSS",
//     image:
//       "https://res.cloudinary.com/duagqnvpw/image/upload/v1739375114/css_dsldfl.png",
//   },
//   {
//     name: "JavaScript",
//     image:
//       "https://res.cloudinary.com/duagqnvpw/image/upload/v1739375118/JavaScript_dcf8ge.png",
//   },
//   {
//     name: "React",
//     image:
//       "https://res.cloudinary.com/duagqnvpw/image/upload/v1739375121/react_iuy8by.png",
//   },
//   {
//     name: "Tailwind",
//     image:
//       "https://res.cloudinary.com/duagqnvpw/image/upload/v1739375122/tailwind_nbuvzc.png",
//   },
//   {
//     name: "Bootstrap",
//     image:
//       "https://res.cloudinary.com/duagqnvpw/image/upload/v1739375114/Bootstrap_mik2vd.png",
//   },
//   {
//     name: "Git",
//     image:
//       "https://res.cloudinary.com/duagqnvpw/image/upload/v1739375116/git_dqqecn.png",
//   },
//   {
//     name: "Firebase",
//     image:
//       "https://res.cloudinary.com/duagqnvpw/image/upload/v1739375115/firebase_ylp16z.png",
//   },
//   {
//     name: "Axios",
//     image:
//       "https://res.cloudinary.com/duagqnvpw/image/upload/v1739375113/axios_tujukf.png",
//   },
//   {
//     name: "Node.js",
//     image:
//       "https://res.cloudinary.com/duagqnvpw/image/upload/v1739375120/node_matxt8.png",
//   },
//   {
//     name: "MongoDB",
//     image:
//       "https://res.cloudinary.com/duagqnvpw/image/upload/v1739375119/mongodb_segh7u.png",
//   },
//   {
//     name: "Mongoose",
//     image:
//       "https://res.cloudinary.com/duagqnvpw/image/upload/v1739375120/mongoose_dnnak0.png",
//   },
//   {
//     name: "Redux Toolkit",
//     image:
//       "https://res.cloudinary.com/duagqnvpw/image/upload/v1739375122/redux_au6kpo.svg",
//   },
// ];
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
        {skills.map((skill, idx) => (
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
