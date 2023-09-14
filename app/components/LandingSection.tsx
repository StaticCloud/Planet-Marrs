import styles from "./styles/LandingSection.module.css"

export default function LandingSection() {
    return (
        <section className={styles.landingSection}>
            <div className={styles.landingText}>
                <h1>Professional, lightweight, and fast websites.</h1>
                <p>Planet Marrs provides customers with websites that are coded from the ground up, responsive, and free from the frustration, visual limitations, or bloat of website builders.</p>
            </div>
            <div>
                <h1>An image will go here, eventually.</h1>
            </div>
        </section>
    )
}