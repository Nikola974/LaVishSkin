import { useState } from "react";
import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";
import styles from "./Services.module.css";
import malesImage from "../../assets/candela.jpg";
import femalesImage from "../../assets/femalesImage.jpg";
import ServicesOptions from "./ServicesOptions.jsx";
import { servicesData } from './ServiceData.js'

function Reviews() {
  const featurableWidgetId = "fdfd5a65-a78b-4d7d-b9e8-84484b13b639";

  return (
    <ReactGoogleReviews layout="carousel" featurableId={featurableWidgetId} />
  );
}

export default function Services() {
  const [activeGender, setActiveGender] = useState("female");

  return (
    <div className={styles.services}>
      <div className={styles.servicesContainer}>
        <div className={styles.imageContainer}>
          <img
            src={femalesImage}
            alt="Жени"
            className={`${styles.image} ${
              activeGender === "female" ? styles.active : ""
            }`}
          />
          <img
            src={malesImage}
            alt="Мъже"
            className={`${styles.image} ${
              activeGender === "male" ? styles.active : ""
            }`}
          />
        </div>

        <div className={styles.servicesInfoContainer}>
          <h2>Процедури</h2>
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
      <Reviews />
    </div>
  );
}
