"use client";
import { useEffect } from "react";

const ScrollToSectionClient = () => {
  useEffect(() => {
    const section = sessionStorage.getItem("scrollToSection");
    if (section) {
      const el = document.querySelector(section);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
      sessionStorage.removeItem("scrollToSection");
    }
  }, []);
  return null;
};

export default ScrollToSectionClient;
