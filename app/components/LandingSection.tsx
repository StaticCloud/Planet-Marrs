import styles from "./styles/LandingSection.module.css"
import Image from "next/image";
import Link from "next/link";

import SiteOne from '@/public/images/site-one.png'
import SiteTwo from '@/public/images/site-two.png'
import SiteThree from '@/public/images/site-three.png'

export default function LandingSection() {
    return (
        <section className={styles.landingSection} id="landing">
            <div className={styles.landingText}>
                <h1>Professional, lightweight, and fast websites.</h1>
                <p>Planet Marrs provides customers with websites that are coded from the ground up, responsive, and free from the frustration, visual limitations, or bloat of website builders.</p>
            </div>
            <div className={styles.landingSites}>
                <Link href="https://diegomarrs.dev/" target="_blank">
                    <Image src={SiteOne} alt="sample-site-one"/>
                </Link>
                <Link href="https://flourishing-zabaione-245636.netlify.app/" target="_blank">
                    <Image src={SiteTwo} alt="sample-site-two"/>
                </Link>
                <Link href="https://deluxe-clafoutis-2cf5ec.netlify.app/" target="_blank">
                    <Image src={SiteThree} alt="sample-site-three"/>
                </Link>
            </div>
        </section>
    )
}