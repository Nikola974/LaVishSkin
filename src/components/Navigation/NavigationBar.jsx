import Navigation from "./Navigation";
import SocialIcons from "./Socials";
import { FaPhoneAlt } from "react-icons/fa";
import logoImg from "../../assets/logo.png";
import styles from "./Navbar.module.css";

const NumberButton = ({ onClick, text }) => (
    <button onClick={onClick} className={styles.numberButton}>
      <FaPhoneAlt style={{ marginRight: "12px" }} size={22} color="#333333" />
      <span className={styles.numberButtonText}>{text}</span>
    </button>
  );
  
  export default function NavigationBar({ scrollToSection, home, aboutUs, services, contacts }) {
    return (
      <div className={styles.menu}>
        <div className={styles.menuLogo}>
          <img src={logoImg} alt="Website Logo" />
        </div>
        <div className={styles.menuNavigation}>
          <Navigation
            scrollToSection={scrollToSection}
            home={home}
            aboutUs={aboutUs}
            services={services}
            contacts={contacts}
          />
        </div>
        <div className={styles.socials}>
          <NumberButton
            text="088 252 0999 / 088 811 1232"
            onClick={() => scrollToSection(contacts)}
          />
          <SocialIcons />
        </div>
      </div>
    );
  }