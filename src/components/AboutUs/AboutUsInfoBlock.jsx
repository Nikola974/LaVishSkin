import { useState } from "react";
import styles from "./AboutUs.module.css";

export default function AboutUsInfoBlock({ title, text, className }) {
    const [showText, setShowText] = useState(false);
  

    return (
        <div
          className={`${className} ${styles.aboutUsInfoBlock}`}
          onMouseEnter={() => setShowText(true)}
          onMouseLeave={() => setShowText(false)}
        >
          <h4 className={`${styles.title} ${showText ? styles.hidden : ""}`}>
            {title}
          </h4>
          <p className={`${styles.text} ${showText ? styles.visible : styles.invisible}`}>
            {text}
          </p>
        </div>
      );
    }
