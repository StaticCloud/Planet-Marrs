import style from './styles/ContactSection.module.css';

export default function ContactSection() {
    return (
        <section className={style.contactSection} id="contact">
            <h1 className="sectionTitle">Contact</h1>
            <p>Still here? Do you have further questions? Feel free to shoot us a message at:</p>
            <a href="mailto:planetmarrs@proton.me">planetmarrs@proton.me</a>
        </section>
    )
}