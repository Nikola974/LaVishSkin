import { useState } from "react";
import styles from "./Services.module.css";

export default function ServicesOptions({ title, items }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <li onClick={handleClick} className={styles.toggleService}>
        {title}
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
