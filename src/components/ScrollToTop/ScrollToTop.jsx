import { useState } from "react";
import { useEffect } from "react";
import { FaAnglesUp } from "react-icons/fa6";
import React from "react";
import styles from "../../App.module.css";

const ScrollToTop = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {showScrollTopButton && 
        <FaAnglesUp className={styles["top-btn-positon"]} onClick={scrollTop} />
      }
    </div>
  );
};

export default ScrollToTop;
