import { useState } from "react";
import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";
import styles from "./Services.module.css";
import malesImage from "../../assets/promobaner.png";
import femalesImage from "../../assets/promobaner.png";
import ServicesOptions from "./ServicesOptions.jsx";
import { servicesData } from "./ServiceData.js";
import buttonStyles from "../AboutUs/ReserveButton.module.css";

function Reviews() {
  const featurableWidgetId = "fdfd5a65-a78b-4d7d-b9e8-84484b13b639";

  return (
    <ReactGoogleReviews layout="carousel" featurableId={featurableWidgetId} />
  );
}

export default function Services() {
  const [activeGender, setActiveGender] = useState("female");
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className={styles.services}>
      <h2 className={styles.sectionTitle}>Процедури</h2>
      <div className={styles.toggleButtons}>
        <button
          className={activeGender === "female" ? styles.active : ""}
          onClick={() => setActiveGender("female")}
        >
          Лазерна Епилация Жени
        </button>
        <button
          className={activeGender === "male" ? styles.active : ""}
          onClick={() => setActiveGender("male")}
        >
          Лазерна Епилация Мъже
        </button>
      </div>
      <div className={styles.servicesContainer}>
        <div className={styles.imageContainer}>
          <img
            src={femalesImage}
            alt="Жени"
            className={`${styles.image} ${
              activeGender === "female" ? styles.active : ""
            }`}
            onClick={() => setSelectedImage(femalesImage)}
          />
          <img
            src={malesImage}
            alt="Мъже"
            className={`${styles.image} ${
              activeGender === "male" ? styles.active : ""
            }`}
            onClick={() => setSelectedImage(malesImage)}
          />
        </div>

        {selectedImage && (
          <div
            className={styles.lightbox}
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Full view"
              className={styles.lightboxImage}
            />
          </div>
        )}

        <div className={styles.servicesInfoContainer}>
          {/*<h2>Процедури</h2>*/}

          <ul className={styles.priceList}>
            {servicesData[activeGender].map((section, index) => (
              <ServicesOptions
                key={index}
                title={section.title}
                items={section.items}
              />
            ))}
          </ul>
        </div>
      </div>
      <div
        className={styles.buttonDiv}
        onClick={() =>
          window.open("https://studio24.bg/l-vish-skin-s11111", "_blank")
        }
      >
        <a className={buttonStyles.fancy} href="#">
          <span className={buttonStyles.topKey}></span>
          <span className={buttonStyles.text}>Запази Час</span>
          <span className={buttonStyles.bottomKeyFirst}></span>
          <span className={buttonStyles.bottomKeySecond}></span>
        </a>
      </div>
      <Reviews />
    </div>
  );
}
