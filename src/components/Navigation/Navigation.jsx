import React from "react";
import styles from "../../App.module.css";
import stylesNav from "./Navbar.module.css";

const MenuNavigation = ({ scrollToSection, home, aboutUs, services, contacts }) => {
  return (
    <div className={stylesNav.menuNavigation}>
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
    </div>
  );
};

export default MenuNavigation;