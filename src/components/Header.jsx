import React from "react";
import avatar from "../assets/photo_2020-10-07-10.01.38-150x150.jpeg";
import AppsIcon from "@mui/icons-material/Apps";
import styles from "./styles/header.module.css";

const Header = () => {
  const url = "https://www.google.com.ua";

  return (
    <>
      <div className={styles.header}>
        <a
          href="https://mail.google.com/mail/?tab=rm&authuser=0&ogbl"
          className={styles.link}
        >
          Gmail
        </a>
        <a
          href={`${url}/imghp?hl=en-GB&tab=ri&authuser=0&ogbl`}
          className={styles.imageLink}
        >
          Images
        </a>
        <a
          href={`${url}/intl/en-GB/about/products?tab=rh`}
          style={{ color: "white" }}
        >
          <AppsIcon />
        </a>
        <a href="https://accounts.google.com/SignOutOptions?hl=en-GB&continue=https://www.google.com%3Fhl%3Den-GB">
          <img src={avatar} alt="avatar" className={styles.avatar} />
        </a>
      </div>
    </>
  );
};

export default Header;
