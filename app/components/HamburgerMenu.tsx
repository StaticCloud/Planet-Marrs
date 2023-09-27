import { FC } from "react";
import styles from './styles/HamburgerMenu.module.css';

const HamburgerMenu:FC = () => {
    return (
        <nav className={styles.hamburgerMenu}>
            <button className={styles.hamburgerButton}>
                <div className={styles.hamburgerIcon}/>
            </button>
            <ul>

            </ul>
        </nav>
    );
}

export default HamburgerMenu;