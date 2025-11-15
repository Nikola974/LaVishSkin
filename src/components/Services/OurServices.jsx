import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";
import styles from "./OurServices.module.css";
import malesImage from "../../assets/candela.jpg";
import femalesImage from "../../assets/femalesImage.jpg";
import promoBaner from "../../assets/promobaner.png";
import ServicesOptions from "./ServicesOptions.jsx";
import { servicesData } from "./ServiceData.js";


   function Reviews() {
  const featurableWidgetId = "fdfd5a65-a78b-4d7d-b9e8-84484b13b639";
  return (
    <ReactGoogleReviews layout="carousel" featurableId={featurableWidgetId} />
  );
} 


export default function Services() {
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
            <img src={promoBaner} alt="Жени" className={styles.image} />
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
            <img src={promoBaner} alt="Мъже" className={styles.image} />
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
      </div>
      <a className={styles.fancy} href="#">
        <span className={styles.topKey}></span>
        <span className={styles.text}>Запази Час</span>
        <span className={styles.bottomKeyFirst}></span>
        <span className={styles.bottomKeySecond}></span>
      </a>
       <Reviews />
    </div>
  );
}
