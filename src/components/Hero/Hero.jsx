import React  from "react"; 
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";


export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi I'am Venkat</h1>
            <p className={styles.description}>I'am a full stack developer, In MERN full stack. Reach out if you'd like learn more!</p>
            <a href = 'mailto:panakalu1432@gmail.com' className={styles.contactBtn}>Contact Me</a>
            </div>
             <img src='/assets/hero/heroImage.png' alt = 'Hero Image' className={styles.heroImg} />
      <div className={styles.topBlur} />

      <div className={styles.bottomBlur}/>
        
    </section>
};
