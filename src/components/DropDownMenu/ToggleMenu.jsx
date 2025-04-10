import React from "react";
import { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import Menu from "./DropDownMenu/DropDownMenu.jsx";
import styles from "../Navigation/Navbar.module.css";

const ToggleMenu = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className={styles.navMenuDropDown}>
    {toggleMenu ? (
      <RiCloseLine
        color="#333333"
        size={27}
        onClick={() => setToggleMenu(false)}
      />
    ) : (
      <RiMenu3Line
        color="#333333"
        size={27}
        onClick={() => setToggleMenu(true)}
      />
    )}
    {toggleMenu && (
      <div className={styles.menuNavigationWrapper}>
        <div className={styles.menuNavigationWrapperNavigation}>
          <Menu
            scrollToSection={scrollToSection}
            home={home}
            aboutUs={aboutUs}
            services={services}
            contacts={contacts}
          />
        </div>
      </div>
    )}
  </div>
  );
};

export default ToggleMenu;
