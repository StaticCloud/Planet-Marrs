import style from './styles/InterestSection.module.css'
import Link from 'next/link'

export default function InterestSection() {
    return (
        <section className={style.interestSection} id="interest">
            <h1 className='sectionTitle'>Interested?</h1>
            <div className={style.interestContent}>
                <p>Interested in hiring Planet Marrs to build your website? Maybe you&apos;re on the fence and wish to keep looking? No worries! Feel free to fill out the interest form below if you want to keep us in your radar, or if you&apos;re ready to chat and build something great!</p>
                <Link className="button" target="_blank" href="https://forms.gle/4FeqN2b1hD9oCLLS8">INTEREST FORM</Link>
            </div>
        </section>
    );
}