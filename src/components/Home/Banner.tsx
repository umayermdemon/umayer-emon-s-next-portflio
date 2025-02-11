/* eslint-disable react/no-unescaped-entities */
import { Button } from "../ui/button";
import profileImg from "../../assets/file.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto py-20">
      <div className="flex items-center lg:max-w-7xl mx-auto lg:px-2 flex-col-reverse lg:justify-between lg:flex-row">
        <div className="flex-1 space-y-3 lg:space-y-4 px-4 md:px-0 ml-0 md:ml-8 lg:ml-0">
          <h1 className="text-base md:text-2xl text-white font-bold ">
            Hi, I'm{" "}
          </h1>
          <h1 className="text-3xl md:text-5xl  text-white font-bold ">
            Umayer Emon
          </h1>
          <h2 className="text-secondaryColor text-sm md:text-base ">
            Junior Web Developer
          </h2>
          <p className=" text-sm md:text-base text-white pb-4">
            Passionate about creating interactive and responsive web
            applications using modern technologies.
          </p>
          <a
            href="https://drive.google.com/file/d/16XFWksNFUI35tRcdil6Bh4RroFSRdLvZ/view?usp=sharing"
            target="_blank">
            <Button
              variant={"outline"}
              className="hover:bg-secondaryColor rounded-xl  hover:text-white hover:border-secondaryColor font-bold text-secondaryColor">
              Get Resume
            </Button>
          </a>
        </div>

        <div className="flex-1 lg:pl-96 py-4 md:py-12">
          <Image
            src={profileImg}
            width={400}
            height={400}
            alt="profileImg"
            className="max-w-xs lg:max-w-md  zoom-effect cursor-pointer rounded-full shadow-sm bg-[#1c2c5066]"
            //  className="max-w-xs relative lg:max-w-7xl zoom-effect cursor-pointer rounded-full shadow-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
