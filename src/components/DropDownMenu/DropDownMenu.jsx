import React from "react";
import styles from "../../App.module.css";
import { useState } from "react";

const Menu = ({ scrollToSection, home, aboutUs, services, contacts, setToggleMenu }) => (
    <ul>
      <li onClick={() => {scrollToSection(home); setToggleMenu(false)}} className={styles.menuLink}>
        Начало
      </li>
      <li onClick={() => {scrollToSection(aboutUs); setToggleMenu(false)}} className={styles.menuLink}>
        За нас
      </li>
      <li onClick={() => {scrollToSection(services); setToggleMenu(false)}} className={styles.menuLink}>
        Услуги
      </li>
      <li onClick={() => {scrollToSection(contacts); setToggleMenu(false)}} className={styles.menuLink}>
        Контакти
      </li>
    </ul>
  );

  export default Menu;