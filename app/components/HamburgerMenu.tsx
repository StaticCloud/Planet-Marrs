import { FC } from "react";
import { useState } from "react";
import styles from './styles/HamburgerMenu.module.css';
import Link from "next/link";

const HamburgerMenu: FC = () => {
    const [visible, setVisible] = useState(false);

    const ToggleMobileMenu = () => {
        setVisible(!visible);
    }

    return (
        <nav className={styles.hamburgerMenu}>
            <button className={styles.hamburgerButton} onClick={() => ToggleMobileMenu()}>
                <div className={`
                    ${styles.hamburgerIcon}
                    ${visible ? styles.hamburgerIconOpen : ''}
                `} />
            </button>
            <ul className={`
                    ${visible ? styles.mobileMenuActive : styles.mobileMenu}
                `} onClick={() => ToggleMobileMenu()}>
                <li>
                    <Link href="#landing" scroll={true}>HOME</Link>
                </li>
                <li>
                    <Link href="#features" scroll={true}>FEATURES</Link>
                </li>
                <li>
                    <Link href="#pricing" scroll={true}>PRICING</Link>
                </li>
            </ul>
        </nav>
    );
}

export default HamburgerMenu;