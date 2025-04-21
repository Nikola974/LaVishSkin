import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import Menu from "./DropDownMenu";
import styles from "../Navigation/Navbar.module.css";

export default function MobileMenu({
  toggleMenu,
  setToggleMenu,
  scrollToSection,
  home,
  aboutUs,
  services,
  contacts,
}) {
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
            <Menu
              scrollToSection={scrollToSection}
              home={home}
              aboutUs={aboutUs}
              services={services}
              contacts={contacts}
              setToggleMenu={setToggleMenu}
            />
        </div>
      )}
    </div>
  );
}
