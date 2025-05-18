/* eslint-disable react/no-unescaped-entities */
import logo from "@/assets/UE.png";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="bg-backgroundColor pt-8" id="about">
      <div className="flex justify-center lg:max-w-7xl mx-auto py-12 md:pb-36 px-4">
        <div className="w-full max-w-3xl px-6 py-8 rounded-md shadow-md shadow-secondaryColor bg-opacity-5 space-y-8">
          <p className="text-justify text-white text-sm sm:text-base leading-relaxed">
            I am a dedicated Junior Web Developer with a strong foundation in
            web development technologies. I specialize in creating interactive,
            user-friendly, and responsive web applications using HTML, CSS,
            JavaScript, React, Redux, Node.js, Express.js, MongoDB, Mongoose,
            Axios, and JWT. I've successfully built projects like e-commerce
            platforms and blogs with authentication. Constantly improving my
            skills, I aim to work on innovative projects and collaborate with
            talented teams to deliver impactful web solutions.
          </p>

          <div className="flex flex-row items-center">
            <div className="hidden md:flex justify-center sm:justify-start md:flex-1">
              <Image src={logo} alt="Umayer's Logo" width={30} height={30} />
            </div>

            <div className="flex justify-around gap-8 flex-1 text-center sm:text-left ml-0 sm:ml-12">
              <div>
                <h1 className="text-3xl font-bold text-secondaryColor">5+</h1>
                <p className="font-light text-sm text-gray-400">
                  Projects Done
                </p>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-secondaryColor">1+</h1>
                <p className="font-light text-sm text-gray-400">
                  Years of Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
