import styles from "./AboutUs.module.css";
import AboutUsInfoBlock from "./AboutUsInfoBlock";

export default function AboutUsBottom() {

    return (
        <div className={styles.aboutUsBottom}>
        <h3>Какво ни прави различни?</h3>
        <div className={styles.aboutUsBottomImg}>
          <AboutUsInfoBlock
            title="Индивидуален подход"
            text="Всяка кожа е уникална и ние го знаем! Затова стартираме с безплатна консултация, за да разберем Вашите нужди и да изготвим персонализиран план."
            className={styles.aboutUsBottomSkin}
          />
          <AboutUsInfoBlock
            title="Професионален екип"
            text="Нашите сертифицирани специалисти са не само експерти в своята област, но и хора, които обичат това, което правят."
            className={styles.aboutUsBottomTeam}
          />
          <AboutUsInfoBlock
            title="Съвременна апаратура"
            text="Ние работим с александритен лазер Candela Gentlelase PRO, който гарантира по-ефективни процедури без нужда от мазане с гел. Технологията осигурява комфорт и бързи резултати дори при по-чувствителна кожа."
            className={styles.aboutUsBottomLaser}
          />
        </div>
      </div>
    );
}