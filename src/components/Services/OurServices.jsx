import React, { useState } from "react";
import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";
import styles from "./OurServices.module.css";
import malesImage from "../../assets/mensBannerJanuary.png";
import femalesImage from "../../assets/womensBannerJanuary.png";
import promoBaner from "../../assets/promobaner.png";
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
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className={styles.services}>
      <h2 className={styles.sectionTitle}>Процедури</h2>
      {/* <div className={styles.imageContainer}>
            <img src={promoBaner} alt="Мъже" className={styles.image} />
          </div> */}

      {/* Two-column layout */}
      <div className={styles.columns}>
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Лазерна Епилация Жени</h3>
          <div className={styles.imageContainer}>
            <img
              src={femalesImage}
              alt="Жени"
              className={styles.image}
              onClick={() => setSelectedImage(femalesImage)}
            />
          </div>
          <ul className={styles.priceList}>
            {servicesData.female.map((section, index) => (
              <ServicesOptions
                key={index}
                title={section.title}
                items={section.items}
              />
            ))}
          </ul>
        </div>

        {/* Male column */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Лазерна Епилация Мъже</h3>
          <div className={styles.imageContainer}>
            <img
              src={malesImage}
              alt="Мъже"
              className={styles.image}
              onClick={() => setSelectedImage(malesImage)}
            />
          </div>
          <ul className={styles.priceList}>
            {servicesData.male.map((section, index) => (
              <ServicesOptions
                key={index}
                title={section.title}
                items={section.items}
              />
            ))}
          </ul>
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
