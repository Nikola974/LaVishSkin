import React from "react";
import styles from "../../App.module.css";

const Menu = ({ scrollToSection, home, aboutUs, services, contacts }) => (
    <ul>
      <li onClick={() => scrollToSection(home)} className={styles.menuLink}>
        Начало
      </li>
      <li onClick={() => scrollToSection(aboutUs)} className={styles.menuLink}>
        За нас
      </li>
      <li onClick={() => scrollToSection(services)} className={styles.menuLink}>
        Услуги
      </li>
      <li onClick={() => scrollToSection(contacts)} className={styles.menuLink}>
        Контакти
      </li>
    </ul>
  );

  export default Menu;