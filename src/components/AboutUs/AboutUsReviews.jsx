import styles from "./AboutUs.module.css";
import aboutUsImg from "../../assets/LaserReview.png";
import useInView from "../../hooks/useInView";
import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";
import buttonStyles from "./Reservebutton.module.css";

function Reviews() {
  const featurableWidgetId = "fdfd5a65-a78b-4d7d-b9e8-84484b13b639";

  return (
    <ReactGoogleReviews layout="carousel" featurableId={featurableWidgetId} />
  );
}

export default function AboutUsReviews() {
  const [ref, visible] = useInView({ threshold: 0.1 });

  return (
    <div 
          className={`${styles.aboutUsReviews} ${styles.fadeInUp} ${
        visible ? styles.visible : ""
      }`}>
    <div
      ref={ref}
      className={styles.aboutUsTop}
    >
      <div className={styles.aboutUsTopImg}>
        <img src={aboutUsImg} alt="About us" />
      </div>
      <div className={styles.aboutWrapper}>
        <div className={styles.aboutUsTopInfo}>
          <h3>⭐⭐⭐⭐⭐ Стотици доволни клиенти във Варна</h3>
          <p>
            Все повече хора във Варна ни се доверяват заради професионализма,
            вниманието и видимите резултати още след първите процедури.
          </p>
          <p>
            В La Vish Skin се грижим не просто да имате гладка кожа, а и
            увереност и комфорт в ежедневието.
          </p>
        </div>
        <div className={styles.resBtn}>
                <a className={buttonStyles.fancy}>
                  <span className={buttonStyles.topKey}></span>
                  <span className={buttonStyles.text}>Запази Час</span>
                  <span className={buttonStyles.bottomKeyFirst}></span>
                  <span className={buttonStyles.bottomKeySecond}></span>
                </a>
        </div>
      </div>
    </div>
    {/* <div className={styles.googleReviews}><Reviews /></div> */}
    </div>
  );
}
