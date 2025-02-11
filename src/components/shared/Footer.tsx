import ScrollTop from "./ScrollTop";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className=" w-full py-6 mb-0  border-t border-secondaryColor  bg-[#050709]">
        <div className=" flex flex-col items-center justify-center  md:justify-between">
          <p className="mb-4 text-center font-normal text-secondaryColor md:mb-0">
            &copy; All Rights Reserved {currentYear} | Umayer Emon
          </p>

          <ScrollTop />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
