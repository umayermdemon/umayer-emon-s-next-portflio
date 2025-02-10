import Marquee from "react-fast-marquee";
import html from "@/assets/Skills Logo/html.png";
import css from "@/assets/Skills Logo/css.png";
import JavaScript from "@/assets/Skills Logo/JavaScript.png";
import react from "@/assets/Skills Logo/react.png";
import tailwind from "@/assets/Skills Logo/tailwind.png";
import Bootstrap from "@/assets/Skills Logo/Bootstrap.png";
import git from "@/assets/Skills Logo/git.png";
import firebase from "@/assets/Skills Logo/firebase.png";
import axios from "@/assets/Skills Logo/axios.png";
import node from "@/assets/Skills Logo/node.png";
import mongodb from "@/assets/Skills Logo/mongodb.png";
import mongoose from "@/assets/Skills Logo/mongoose.png";
import reduxToolkit from "@/assets/Skills Logo/redux.svg";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const skills = [
  { name: "HTML", image: html },
  { name: "CSS", image: css },
  { name: "JavaScript", image: JavaScript },
  { name: "React", image: react },
  { name: "Tailwind", image: tailwind },
  { name: "Bootstrap", image: Bootstrap },
  { name: "Git", image: git },
  { name: "Firebase", image: firebase },
  { name: "Axios", image: axios },
  { name: "Node.js", image: node },
  { name: "MongoDB", image: mongodb },
  { name: "Mongoose", image: mongoose },
  { name: "Redux Toolkit", image: reduxToolkit },
];
const Skills = () => {
  console.log([skills]);
  return (
    <div className="py-20 lg:pt-24 lg:pb-36 relative" id="skills">
      <div className="flex justify-center">
        <h1 className="text-2xl lg:text-3xl text-white gradient px-8 rounded-sm py-2 font-semibold">
          Skills
        </h1>
      </div>
      <div className="pt-8 lg:max-w-7xl mx-2 lg:mx-auto">
        <Marquee pauseOnHover={true}>
          {skills.map((skill, index) => (
            <div
              key={index}
              className="px-8 md:px-10 py-4 bg-secondaryColor bg-opacity-25 cursor-pointer rounded-3xl mx-2 md:mx-4 group">
              <div className="duration-500 group-hover:scale-110 cursor-pointer flex flex-col items-center gap-4">
                <Image
                  src={skill.image}
                  className="w-12 h-12 md:w-16 md:h-16"
                  alt="Skill Icon"
                />
                <h2 className="text-white font-semibold text-sm md:text-lg uppercase">
                  {skill.name}
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
                  src={skill?.image}
                  alt={skill?.name}
                  className="w-8 h-8 md:w-12 md:h-12 shadow-lg duration-500 hover:scale-150 cursor-pointer border border-secondaryColor p-1 md:p-2 rounded-xl"
                />
              </TooltipTrigger>
              <TooltipContent
                style={{
                  background: "#00BFFF",
                  border: "none",
                  borderRadius: "10px",
                }}>
                {skill?.name}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
};

export default Skills;
