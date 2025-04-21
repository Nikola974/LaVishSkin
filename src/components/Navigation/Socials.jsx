import React from "react";
import styles from "./Navbar.module.css";
import { FaSquareInstagram, FaTiktok, FaSquareFacebook } from "react-icons/fa6";

const socialMediaLinks = [
  {
    icon: <FaSquareInstagram size={30} />,
    url: "https://www.instagram.com/la_vish_skin/",
  },
  {
    icon: <FaTiktok size={27} />,
    url: "https://www.tiktok.com/@la.vish.skin",
    extraClass: "tikTokBtn",
  },
  {
    icon: <FaSquareFacebook size={30} />,
    url: "https://www.facebook.com/people/L%C3%A1-Vish-Skin/61570955392310/",
  },
];

const SocialIcons = () => {
  return (
    <div>
      {socialMediaLinks.map((item, index) => (
        <span
          key={index}
          onClick={(event) => {
            event.preventDefault();
            window.open(item.url, "_blank");
          }}
          className={`${styles.socialsImg} ${item.extraClass ? styles[item.extraClass] : ""}`}
        >
          {item.icon}
        </span>
      ))}
    </div>
  );
};

export default SocialIcons;