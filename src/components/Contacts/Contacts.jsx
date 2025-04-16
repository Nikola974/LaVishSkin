import styles from "./Contacts.module.css";
import SocialIcons from "../Navigation/Socials.jsx";
import LocationMap from "./LactionMap.jsx"

export default function Contacts() {

    return (
        <div className={styles.contactsContainer}>
            <h2>Свържете се с нас</h2>
            <div className={styles.contactsContent}>
                <div className={styles.contactsInfoContent}>
                    <p><strong>Работно време: </strong>Понеделник - Неделя: 10:00 - 18:00</p>
                    <p><strong>Локация: </strong>гр Варна ул "Студентска" 1а</p>
                    <p><strong>Телефон: </strong>0888111232 / 0882520999</p>
                    <SocialIcons />
                </div>
                <div classname={styles.contactsMap}>
                    <LocationMap />
                </div>
            </div>
        </div>
    );
}