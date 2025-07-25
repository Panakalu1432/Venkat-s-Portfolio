import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src= {"../assets/contact/emailIcon.png"} alt="Email icon" />
          <a href="mailto:panakalu1432@gmail.com">panakalu1432@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={"../assets/contact/linkedinIcon.png"} alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/venkatapanakalu/" target = '_blank'>linkedin.com/venkatapanakalu</a>
        </li>
        <li className={styles.link}>
          <img src={"../assets/contact/githubIcon.png"} alt="Github icon" />
          <a href="https://www.github.com/Panakalu1432" target='_blank'>github.com/Panakalu1432</a>
        </li>
      </ul>
    </footer>    
  );
};  