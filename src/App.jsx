import { useState } from "react";
import { useRef } from "react";
import styles from "./App.module.css";
import stylesNav from "./components/Navigation/Navbar.module.css";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import MobileMenu from "./components/DropDownMenu/MobileMenu.jsx";
import NavigationBar from "./components/Navigation/NavigationBar.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import Services from "./components/Services/Services.jsx";

function App() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const home = useRef(null);
  const aboutUs = useRef(null);
  const services = useRef(null);
  const contacts = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.App}>
      <ScrollToTop />
      <div className={stylesNav.container}>
        <NavigationBar
          scrollToSection={scrollToSection}
          home={home}
          aboutUs={aboutUs}
          services={services}
          contacts={contacts}
        />
        <MobileMenu
          toggleMenu={toggleMenu}
          setToggleMenu={setToggleMenu}
          scrollToSection={scrollToSection}
          home={home}
          aboutUs={aboutUs}
          services={services}
          contacts={contacts}
        />
      </div>
      <div className={styles.sections}>
        <div ref={home} className={styles.home}></div>
        <AboutUs aboutUsRef={aboutUs} />
        <div ref={services} className={styles.services}>
        <Services />
        </div>
        <div ref={contacts} className={styles.contacts}>
          <h3>Контакти</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
