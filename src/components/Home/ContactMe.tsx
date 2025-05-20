/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import {
  FaFacebook,
  FaGithub,
  FaLocationDot,
  FaPhone,
  FaXTwitter,
} from "react-icons/fa6";
import contactLogo from "@/assets/ContactLogo/hand_shak.png";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { Button } from "@/components/ui/button";

const socialIcon = [
  {
    icon: <FaFacebook />,
    href: "https://www.facebook.com/profile.php?id=100030602152520",
  },
  { icon: <FaXTwitter />, href: "https://x.com/umayermdemon" },
  { icon: <FaGithub />, href: "https://github.com/umayermdemon" },
];

const formFields = [
  {
    id: 1,
    name: "user_name",
    label: "Your Name",
    type: "text",
    placeholder: "Enter your full name",
  },
  {
    id: 2,
    name: "user_email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email address",
  },
  {
    id: 3,
    name: "message",
    label: "Message",
    type: "textarea",
    placeholder: "Write your message here",
  },
];

const ContactPage = () => {
  const handleMessage = (e: any) => {
    e.preventDefault();
    const name = e.target.user_name.value;
    const email = e.target.user_email.value;
    const message = e.target.message.value;
    const messageData = { name, email, message };
    console.log(messageData);
    e.target.reset();
  };
  return (
    <div className="bg-backgroundColor" id="contact">
      <div className="max-w-7xl mx-auto py-10">
        {/* Title */}
        <div className="flex justify-center">
          <h1 className="text-2xl lg:text-3xl text-gray-200 gradient px-8 rounded-sm py-2 font-semibold">
            Contact
          </h1>
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center pt-6 md:pt-16 items-center lg:flex-row-reverse lg:gap-52">
          {/* Contact Information */}
          <div className="flex-1">
            <Image src={contactLogo} className="w-72" alt="Contact" />
            <div className="space-y-6 pt-8">
              <h3 className="flex flex-row gap-2 items-center text-sm md:text-xl text-gray-200">
                <MdOutlineAlternateEmail className="bg-secondaryColor bg-opacity-40 text-gray-200 p-1 text-sm md:text-xl rounded-full" />
                mamudmdemon@gmail.com
              </h3>
              <h3 className="flex flex-row gap-2 items-center text-sm md:text-xl text-gray-200">
                <FaPhone className="bg-secondaryColor bg-opacity-40 text-gray-200 p-1 text-sm md:text-xl rounded-full" />
                01636-279878
              </h3>
              <h3 className="flex flex-row gap-2 items-center text-sm md:text-xl text-gray-200">
                <FaLocationDot className="bg-secondaryColor bg-opacity-40 text-gray-200 p-1 text-sm md:text-xl rounded-full" />
                Narsingdi, Dhaka, Bangladesh
              </h3>
            </div>
            <div className="flex gap-8 text-gray-200 mt-6 ml-24">
              {socialIcon.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-secondaryColor opacity-80 transition-opacity hover:opacity-100">
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#1e293b] p-8 rounded-xl flex-1 mt-12 lg:mt-0">
            <form
              onSubmit={handleMessage}
              className="w-[19rem] md:w-[34.375rem]">
              {formFields.map((field) => (
                <div key={field.id} className="flex flex-col gap-2 pt-4">
                  <label className="text-sm md:text-xl font-semibold text-gray-200">
                    {field.label}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      name={field.name}
                      placeholder={field.placeholder}
                      required
                      className="bg-[#313f55] rounded-xl text-xs md:text-sm text-gray-200 pl-2 pt-2 h-40 input-focus"
                    />
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      required
                      className="bg-[#313f55] rounded-xl text-xs md:text-sm h-10 text-gray-200 pl-4 input-focus"
                    />
                  )}
                </div>
              ))}
              <div className="pt-4 flex justify-center">
                <Button
                  type="submit"
                  variant={"outline"}
                  className="hover:bg-secondaryColor rounded-xl  hover:text-gray-200 hover:border-secondaryColor font-bold text-secondaryColor">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
