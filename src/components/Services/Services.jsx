import { useState } from "react";
import styles from "./Services.module.css";
import malesImage from "../../assets/IMG_7307.jpeg";
import femalesImage from "../../assets/review.jpg";
import ServicesOptions from "./ServicesOptions.jsx";


export default function Services() {
  const [activeGender, setActiveGender] = useState("female");


  return (
    
    <div className={styles.servicesContainer}>
      <div className={styles.imageContainer}>
      <img
          src={femalesImage}
          alt="Жени"
          className={`${styles.image} ${activeGender === "female" ? styles.active : ""}`}
        />
        <img
          src={malesImage}
          alt="Мъже"
          className={`${styles.image} ${activeGender === "male" ? styles.active : ""}`}
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
          {activeGender === "female" && (
            <>
              <>
                <ServicesOptions
                  title="Зона – Лице"
                  items={[
                    "Горна устна - 25",
                    "Бакенбарди - 25",
                    "Брадичка - 25",
                    "Врат - 30",
                    "Скули - 25",
                    "Шия - 30",
                    "Цяло лице - 65",
                  ]}
                />
              </>

              <>
                <ServicesOptions
                  title="Зона – Тяло"
                  items={[
                    "Гърди - 70",
                    "Ареоли - 25",
                    "Корем - 75",
                    "Корем лента - 40",
                    "Гръб - 120",
                    "Кръст - 65",
                    "Подмишници - 40",
                    "Предмишници - 60",
                    "Рамене - 60",
                    "Цели ръце - 100",
                    "Цяло тяло - 600",
                  ]}
                />
              </>

              <>
                <ServicesOptions
                  title="Зона – Kрака"
                  items={[
                    "Интим - 100",
                    "Бикини линия - 50",
                    "Седалище - 75",
                    "Бедра - 150",
                    "Подбедрици - 120",
                    "Цели крака - 240",
                    "Пръсти - 25",
                  ]}
                />
              </>
            </>
          )}

          {activeGender === "male" && (
            <>
              <>
                <ServicesOptions
                  title="Зона – Лице"
                  items={[
                    "Брада - 30",
                    "Бакенбарди - 30",
                    "Врат - 50",
                    "Горна устна - 30",
                    "Скули - 30",
                    "Шия - 30",
                    "Чело и вежди - 40",
                  ]}
                />
              </>

              <>
                <ServicesOptions
                  title="Зона – Тяло"
                  items={[
                    "Гърди - 90",
                    "Ареоли - 35",
                    "Корем - 90",
                    "Корем лента - 40",
                    "Гръб - 150",
                    "Кръст - 90",
                    "Подмишници - 40",
                    "Предмишници - 80",
                    "Рамене - 80",
                    "Цели ръце - 150",
                    "Цяло тяло - 1100",
                  ]}
                />
              </>

              <>
                <ServicesOptions
                  title="Зона – Крака"
                  items={[
                    "Слабини - 120",
                    "Седалище - 90",
                    "Бедра - 150",
                    "Подбедрици - 150",
                    "Цели крака - 320",
                  ]}
                />
              </>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
