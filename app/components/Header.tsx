"use client"

import { archivo } from "../fonts";
import Logo from '@/public/images/logo.png';
import Image from "next/image";
import Link from "next/link";
import styles from "./styles/Header.module.css";

export default function Header() {
    return (
        <header className={`${archivo.className} ${styles.header}`}>
            <Image src={Logo} width={'60'} height={'60'} alt="logo"/>
            <ul className={styles.desktopNav}>
                <li>
                    <Link href="#landing">HOME</Link>
                </li>
                <li>
                    <Link href="#features">FEATURES</Link>
                </li>
                <li>
                    <Link href="#pricing">PRICING</Link>
                </li>
            </ul>
        </header>
    );
}