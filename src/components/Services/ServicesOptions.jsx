import { useState } from "react";
import styles from "./Services.module.css";
import { FaChevronDown } from "react-icons/fa";

export default function ServicesOptions({ title, items }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <li onClick={handleClick} className={styles.toggleService}>
        <span>{title}</span>
        <span className={`${styles.icon} ${isVisible ? styles.rotate : ""}`}>
          <FaChevronDown />
        </span>
      </li>
      <div
        className={`${styles.itemsWrapper} ${
          isVisible ? styles.shown : styles.hiden
        }`}
      >
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </div>
    </>
  );
}
