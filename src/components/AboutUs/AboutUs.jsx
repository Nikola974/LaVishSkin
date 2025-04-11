import stylesApp from "../../App.module.css";
import AboutUsTop from "./AboutUsTop";
import AboutUsBottom from "./AboutUsBottom";

export default function AboutUs({ aboutUsRef }) {
  return (
    <div ref={aboutUsRef} className={stylesApp.aboutUs}>
      <AboutUsTop />
      <AboutUsBottom />
    </div>
  );
}