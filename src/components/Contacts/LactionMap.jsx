import styles from "./Contacts.module.css";

const LocationMap = () => {
    return (
      <div className={styles.mapStyle}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2536.3137316331904!2d27.9302578!3d43.2242337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a4551b1e4e3e13%3A0x167e97b604a0fe13!2sL%C3%A1%20Vish%20Skin!5e1!3m2!1sen!2sbg!4v1744717868322!5m2!1sen!2sbg"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Our Location"
          ></iframe> 
      </div>
    );
  };
  
  export default LocationMap;
  