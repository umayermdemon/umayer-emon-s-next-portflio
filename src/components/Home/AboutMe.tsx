import logo from "@/assets/logo.png";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="bg-backgroundColor pt-8" id="about">
      <div className="flex justify-center lg:max-w-7xl mx-auto py-12 md:pb-36 px-4">
        <div className="w-full max-w-3xl px-6 py-8 rounded-md shadow-md shadow-secondaryColor bg-opacity-5 space-y-8">
          <p className="text-justify text-gray-200 text-sm sm:text-base leading-relaxed">
            Hi, I&apos;m Umayer Emon (officially <strong>Md. Emon Miah</strong>
            ), a full stack web developer skilled in React, Next.js, Node.js,
            Express.js, MongoDB, PostgreSQL, and Prisma. I build responsive,
            secure, and scalable web applications, and I&apos;m passionate about
            creating clean UI and efficient backend systems. I&apos;ve developed
            real-world projects like e-commerce sites and blogs with full
            authentication.
          </p>

          <div className="flex flex-row items-center">
            <div className="hidden md:flex justify-center sm:justify-start md:flex-1">
              <Image src={logo} alt="Umayer's Logo" width={40} height={40} />
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
