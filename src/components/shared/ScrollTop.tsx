"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (
      document.documentElement.scrollTop > 20 ||
      document.body.scrollTop > 20
    ) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div className="hidden md:block">
      <button
        className={`scroll-to-top ${
          isVisible ? "show  p-4 gradient  rounded-2xl text-secondaryColor" : ""
        }`}
        onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    </div>
  );
};

export default ScrollTop;
