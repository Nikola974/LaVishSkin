import React from "react";
import styles from "./AboutUsLaser.module.css";
import buttonStyles from "./ReserveButton.module.css";

import bg1 from "../../assets/bg1.png";
import bg2 from "../../assets/bg2.png";
import bg3 from "../../assets/bg3.png";

const AboutUsLaser = () => {
  const benefits = [
    {
      icon: "✨",
      title: "Реални резултати още след първите процедури",
      text: "Лазерът работи с медицински доказана технология, която достига директно до корена на косъма и го унищожава трайно. Повечето хора виждат видимо намаляване на окосмяването още след първите 1–2 процедури.",
      image: bg1,
    },
    {
      icon: "❄️",
      title: "Без болка и без риск за кожата",
      text: "Системата има вграден охлаждащ механизъм, който предпазва кожата и прави процедурата почти безболезнена дори за чувствителни зони, без нужда от гел! Няма парене и зачервяване, а след процедурата можеш спокойно да се върнеш към ежедневието си.",
      image: bg2,
    },
    {
      icon: "💎",
      title: "Безопасен и подходящ за всички типове кожа",
      text: "Candela GentleLase Pro е сертифициран медицински апарат, признат като златен стандарт в лазерната епилация. Уредът може да се използва само от медицински лица, което гарантира максимална безопасност и пълно спокойствие по време на процедурата.",
      image: bg3,
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Защо <span>Candela GentleLase Pro</span> е по-добър?
        </h2>
        <p className={styles.intro}>
          Candela GentleLase Pro е медицински лазер, предпочитан от водещи
          дерматолози и клиники на световно ниво.
        </p>

        <div className={styles.grid}>
          {benefits.map((item, index) => (
            <div
              key={index}
              className={styles.card}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className={styles.icon}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </div>
          ))}
        </div>

        <div
          onClick={() =>
            window.open("https://studio24.bg/l-vish-skin-s11111", "_blank")
          }
        >
          <a
            className={buttonStyles.fancy}
            href="#"
          >
            <span className={buttonStyles.topKey}></span>
            <span className={buttonStyles.text}>Запази Час</span>
            <span className={buttonStyles.bottomKeyFirst}></span>
            <span className={buttonStyles.bottomKeySecond}></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUsLaser;
