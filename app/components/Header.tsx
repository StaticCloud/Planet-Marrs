"use client"

import { archivo } from "../fonts";
import Link from "next/link";

export default function Header() {
    return (
        <header className={archivo.className}>
            <h1>Planet Marrs</h1>
        </header>
    );
}