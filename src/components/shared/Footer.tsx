import ScrollTop from "./ScrollTop";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className=" w-full py-6 mb-0  border-t border-secondaryColor  bg-[#050709]">
        <div className="relative flex flex-col items-center justify-center  md:justify-between">
          <p className="mb-4 text-center font-normal text-secondaryColor md:mb-0">
            &copy; All Rights Reserved {currentYear} | Umayer Emon
          </p>
          <h1 className="absolute right-8 -top-1/2">
            <ScrollTop />
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
