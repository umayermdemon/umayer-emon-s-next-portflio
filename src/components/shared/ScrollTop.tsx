"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  const toggleVisibility = () => {
    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    const docHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const percent =
      docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0;
    setScrollPercent(percent);

    setIsVisible(scrollTop > 20);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    toggleVisibility(); // initialize on mount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-2 md:right-8 z-50">
      <button
        className={`group relative flex items-center justify-center w-16 h-16 bg-black/30 rounded-full shadow-lg transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={scrollToTop}
        aria-label="Scroll to top">
        {/* Circular progress background */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 36 36">
          <circle
            className="text-gray-400"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            cx="18"
            cy="18"
            r="16"
            opacity="0.2"
          />
          <circle
            className="text-secondaryColor"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            cx="18"
            cy="18"
            r="16"
            strokeDasharray={100}
            strokeDashoffset={100 - scrollPercent}
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 0.3s" }}
          />
        </svg>
        {/* Percent text (hide on hover) */}
        <span className="relative text-lg font-bold text-secondaryColor transition-opacity duration-200 group-hover:opacity-0">
          {scrollPercent}%
        </span>
        {/* Arrow icon (show on hover) */}
        <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <FaArrowUp className="text-secondaryColor text-2xl" />
        </span>
      </button>
    </div>
  );
};

export default ScrollTop;
