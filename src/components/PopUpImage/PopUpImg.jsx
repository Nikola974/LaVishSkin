import { useState, useEffect } from "react";
import styles from "./Popup.module.css";
import promoImage from "../../assets/popUpBannerFebruary.png";

export default function Popup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  if (!showPopup) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button className={styles.closeBtn} onClick={() => setShowPopup(false)}>
          ✕
        </button>
        <img src={promoImage} alt="Promo" className={styles.image} />
      </div>
    </div>
  );
}