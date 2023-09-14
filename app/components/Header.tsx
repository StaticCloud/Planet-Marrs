"use client"

import { archivo } from "../fonts";
import styles from "./styles/Header.module.css";

export default function Header() {
    return (
        <header className={`${archivo.className} ${styles.header}`}>
            <h1>Planet Marrs</h1>
        </header>
    );
}