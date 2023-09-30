"use client"

import { archivo } from "../fonts";
import HamburgerMenu from './HamburgerMenu';
import Logo from '@/public/images/logo.png';
import Image from "next/image";
import Link from "next/link";
import styles from "./styles/Header.module.css";
import { FC } from "react";

const Header:FC = () => {
    return (
        <header className={`${archivo.className} ${styles.header}`}>
            <Image src={Logo} width={'60'} height={'60'} alt="logo"/>
            <ul className={styles.desktopNav}>
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
            <HamburgerMenu/>
        </header>
    );
}

export default Header;