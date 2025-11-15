import React, { useRef, useEffect, useState } from "react";
import styles from "./ImageGallery.module.css";

import img1 from "../../assets/gallery1.png";
import img2 from "../../assets/gallery2.png";
import img3 from "../../assets/gallery3.png";
import img4 from "../../assets/gallery6.png";
import img5 from "../../assets/gallery5.png";
import img6 from "../../assets/gallery7.png";
import img7 from "../../assets/gallery4.png";
import img8 from "../../assets/gallery8.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const GallerySection = () => {
  const carouselRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let index = 0;
    const slideWidth = () => carousel.offsetWidth * 0.8 + 16;

    const interval = setInterval(() => {
      index = (index + 1) % images.length;
      carousel.scrollTo({
        left: index * slideWidth(),
        behavior: "smooth",
      });
    }, 3000);

    const stop = () => clearInterval(interval);
    carousel.addEventListener("touchstart", stop, { once: true });

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.gallery}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          <span>Резултати</span>, които се виждат – от клиенти, които се{" "}
          <span>връщат</span>
        </h2>
      </div>

      {/* Desktop grid */}
      <div className={styles.grid}>
        {images.map((src, index) => (
          <div
            key={index}
            className={`${styles.imageWrapper} ${styles[`pos${index + 1}`]}`}
            onClick={() => setSelectedImage(src)}
          >
            <img src={src} className={styles.image} alt="" />
          </div>
        ))}
      </div>

      {/* Mobile carousel */}
      <div ref={carouselRef} className={styles.carousel}>
        {images.map((src, index) => (
          <div
            key={index}
            className={styles.carouselItem}
            onClick={() => setSelectedImage(src)}
          >
            <img src={src} className={styles.carouselImage} alt="" />
          </div>
        ))}
      </div>

      {/* Lightbox modal */}
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
    </section>
  );
};

export default GallerySection;
