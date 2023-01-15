import React from "react";
import icon from "../assets/toppng.com-youtube-icon-logo-transparent-youtube-3500x2458.png";
import styles from "./styles/widgets.module.css";

const Widgets = () => {
  const data = [
    { link: "youtube.com", alt: "avatar", title: "(2) YouTube", id: 1 },
    { link: "youtube.com", alt: "avatar", title: "(2) YouTube", id: 2 },
    { link: "youtube.com", alt: "avatar", title: "(2) YouTube", id: 3 },
    { link: "youtube.com", alt: "avatar", title: "(2) YouTube", id: 4 },
    { link: "youtube.com", alt: "avatar", title: "(2) YouTube", id: 5 },
  ];

  return (
    <>
      <div className={styles.widgets}>
        {data.map(({link, alt, title, id}) => {
          return (
            <a href={link} className={styles.tile} key={id}>
              <img
                src={icon}
                alt={alt}
                className={styles.widget_icon}
              />
              <div className={`${styles.tile_title} ${styles.title_ltr}`}>
               <span>{title}</span>
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
};

export default Widgets;
