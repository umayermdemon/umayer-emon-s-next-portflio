import * as Avatar from "@radix-ui/react-avatar";
import educationImg from "../../assets/EducationLogo/education.png";
import devImg from "../../assets/EducationLogo/dev.png";
import versityImg from "../../assets/EducationLogo/Bangladesh-National-University.png";
import Image from "next/image";

const educationData = [
  {
    id: 1,
    role: "Junior Web Developer",
    institution: "Programming Hero",
    dateRange: "30/12/2023 - 23/06/2024",
    img: devImg,
  },
  {
    id: 2,
    role: "MBA in Accounting",
    institution: "National University",
    dateRange: "2023 - Present",
    img: versityImg,
  },
  {
    id: 3,
    role: "BBA in Accounting",
    institution: "National University",
    dateRange: "2015 - 2019",
    img: versityImg,
  },
];

const Educations = () => (
  <section id="education">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center">
        <h1 className="text-2xl lg:text-3xl text-white gradient px-8 rounded-sm py-2 font-semibold">
          Educations
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row md:gap-12 lg:gap-36 pt-6 lg:pt-16 items-center justify-between">
        <div className="flex-1 mb-8 lg:mb-0 flex justify-center">
          <Image
            src={educationImg}
            alt="Education"
            className="max-w-xs w-full h-auto object-contain"
          />
        </div>
        <div className="flex-1 w-full">
          <ol className="relative border-l border-gray-700">
            {educationData.map((item, idx) => (
              <li key={idx} className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full -left-5 ring-4 ring-gray-900">
                  <Avatar.Root className="w-8 h-8 rounded-full overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.role}
                      className="w-full h-full object-cover"
                    />
                    <Avatar.Fallback
                      className="w-full h-full flex items-center justify-center bg-gray-600 text-white"
                      delayMs={600}>
                      {item.role[0]}
                    </Avatar.Fallback>
                  </Avatar.Root>
                </span>
                <div className="rounded-lg p-4 shadow-md">
                  <h3 className="text-lg font-semibold text-white">
                    {item.role}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.institution}</p>
                  <time className="block text-gray-500 text-xs mt-1">
                    {item.dateRange}
                  </time>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  </section>
);

export default Educations;
