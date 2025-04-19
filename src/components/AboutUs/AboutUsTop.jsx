import styles from "./AboutUs.module.css";
import aboutUsImg from "../../assets/aboutUsIntro.jpg";
import useInView from "../../hooks/useInView";

export default function AboutUsTop() {
  const [ref, visible] = useInView({ threshold: 0.1 });

  return (
    <div 
    ref={ref}
    className={`${styles.aboutUsTop} ${styles.fadeInUp} ${visible ? styles.visible : ""}`}>
      <div className={styles.aboutUsTopImg}>
        <img src={aboutUsImg} alt="About us" />
      </div>
      <div className={styles.aboutUsTopInfo}>
        <h3>
          Добре дошли в Lá Vish Skin, <br /> мястото, където кожата Ви заслужава най-доброто!
        </h3>
        <p>
          В Lá Vish Skin вярваме, че красотата започва с увереността. Нашето студио е създадено с мисъл за Вас – за да се чувствате не само красиви, но и специални. Предлагаме висококачествени лазерни процедури, съобразени с най-новите технологии и стандарти, за да осигурим ефективни и дълготрайни резултати.
        </p>
      </div>
    </div>
  );
}
