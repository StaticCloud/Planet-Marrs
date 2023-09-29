import { FC } from "react";
import { useState } from "react";
import styles from './styles/HamburgerMenu.module.css';

const HamburgerMenu:FC = () => {
    const [visible, setVisible] = useState(false);

    const OpenMobileMenu = () => {
        setVisible(!visible);
    }

    return (
        <nav className={styles.hamburgerMenu}>
            <button className={styles.hamburgerButton} onClick={() => OpenMobileMenu()}>
                <div className={`
                    ${styles.hamburgerIcon}
                    ${visible ? styles.hamburgerIconOpen : ''}
                `}/>
            </button>
            <ul>

            </ul>
        </nav>
    );
}

export default HamburgerMenu;