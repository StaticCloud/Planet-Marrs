import style from './styles/InterestSection.module.css'

export default function InterestSection() {
    return (
        <section className={style.interestSection} id="interest">
            <h1 className='sectionTitle'>Interested?</h1>
            <p>Interested in hiring Planet Marrs to build your website? Maybe you're on the fence and wish to keep looking? No worries! Feel free to fill out the interest form below if you want to keep us in your radar, or if you're ready to chat and build something great!</p>
        </section>
    );
}