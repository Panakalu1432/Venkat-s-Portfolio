 
import React,{useState} from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import styles from "./Navbar.module.css";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return <nav className={styles.navbar}>
    <a className={styles.title} href = "/">Portfolio</a>
    <div className={styles.menu}>
        <button type='button' className={styles.menuBtn} onClick={()=> setMenuOpen(!menuOpen)}>{menuOpen ? <IoIosClose /> :<RxHamburgerMenu />}</button>
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}>
        <li>
            <a href = "#about">About</a>
        </li>
        <li>
        <a href = "#skills">Skills</a>
        </li>
        <li>
        <a href = "#projects">Projects</a>  
        </li>
        <li>
        <a href = "#contact">Contact</a>
        </li>
        </ul>
    </div>
    </nav>;
}