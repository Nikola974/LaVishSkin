import stylesApp from "../../App.module.css";
import AboutUsTop from "./AboutUsTop";
import AboutUsBottom from "./AboutUsBottom";
import AboutUsReviews from "./AboutUsReviews";
import AboutUsLaser from "./AboutUsLaser";
import GallerySection from "../Gallery/ImageGallery";

export default function AboutUs({ aboutUsRef }) {
  return (
    <div ref={aboutUsRef} className={stylesApp.aboutUs}>
      <AboutUsTop />
      <AboutUsBottom />
      <AboutUsReviews />
      <AboutUsLaser />
      <GallerySection />
    </div>
  );
}