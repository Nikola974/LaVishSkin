import React from "react";
import styles from "./HomeSection.module.css";
import bgImage from "../../assets/studio_background.jpeg";

const HomeSection = () => {
  return (
    <div className={styles.home}>
      <div className={styles.textBox}>
        <h1 className={styles.title}>
          {" "}
          Лазер №1 в света Candela GentleLase Pro
        </h1>
        <h2 className={styles.description}>
          “Нова година,<br/> по-гладка кожа!”
        </h2>
        <div
          onClick={() =>
            window.open("https://studio24.bg/l-vish-skin-s11111", "_blank")
          }
        >
                <a className={styles.fancy} href="#">
        <span className={styles.topKey}></span>
        <span className={styles.text}>Запази Час</span>
        <span className={styles.bottomKeyFirst}></span>
        <span className={styles.bottomKeySecond}></span>
      </a>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
