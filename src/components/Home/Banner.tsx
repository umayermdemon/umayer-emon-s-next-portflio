/* eslint-disable react/no-unescaped-entities */

import { Button } from "../ui/button";
import profileImg from "../../assets/file.png";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto py-20">
      <div className="flex items-center lg:max-w-7xl mx-auto lg:px-2 flex-col-reverse lg:justify-between lg:flex-row">
        <div className="flex-1 space-y-3 lg:space-y-4 px-4 md:px-0 ml-0 md:ml-8 lg:ml-0">
          <h1 className="text-base md:text-2xl text-gray-200 font-bold ">
            Hi, I'm{" "}
          </h1>
          <h1 className="text-3xl md:text-5xl  text-gray-200 font-bold ">
            Umayer Emon
          </h1>
          <h2 className="text-secondaryColor text-sm md:text-base ">
            Junior Web Developer
          </h2>
          <p className=" text-sm md:text-base text-gray-200 pb-4">
            Passionate about creating interactive and responsive web
            applications using modern technologies.
          </p>
          <Link href={"/umayer-emon.pdf"} target="_blank" download>
            <Button
              variant={"outline"}
              className="hover:bg-secondaryColor rounded-xl  hover:text-gray-200 hover:border-secondaryColor font-bold text-secondaryColor">
              Get Resume
            </Button>
          </Link>
        </div>

        <div className="flex-1 lg:pl-96 py-4 md:py-12">
          <Image
            src={profileImg}
            width={400}
            height={400}
            alt="profileImg"
            className="max-w-xs lg:max-w-md  zoom-effect cursor-pointer rounded-full shadow-sm bg-[#1c2c5066]"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
