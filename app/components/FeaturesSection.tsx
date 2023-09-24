import Image, { StaticImageData } from "next/image";
import style from './styles/FeaturesSection.module.css'

// import actual images
import fastAndSimple from '@/public/images/speedometer.png';
import responsive from '@/public/images/resolution.png';
import customizable from '@/public/images/customization.png';
import seoFriendly from '@/public/images/search.png'

type CardInfo = {
    title: string,
    text: string,
    image: StaticImageData,
    key?: number 
}

const features: CardInfo[] = [
    {
        title: "Fast and Simple",
        text: "Websites are built and optimized with performance at the forefront, ensuring fast websites without the bloat that comes with traditional website builders.",
        image: fastAndSimple
    },
    {
        title: "Responsive",
        text: "Websites are optimized for a wide variety of screen sizes, ensuring that your website will look great on any device.",
        image: responsive
    },
    {
        title: "Customizable",
        text: "Customers have the final say on the look of their website, no more spending hours searching for the perfect template.",
        image: customizable
    },
    {
        title: "SEO Friendly",
        text: "We leverage best SEO practices and optimizations such as server-side rendering, giving your website a much stronger site ranking on search engines.",
        image: seoFriendly
    }
]


function Card({ title, text, image, key }: CardInfo) {
    return (
        <div className={style.featureCard} key={key}>
            <Image src={image} alt={title} width={'270'} height={'270'}/>
            <div className={style.titleAndTextWrap}>
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default function FeaturesSection() {
    return (
        <section className={style.featureSection} id="features">
            <h1 className="sectionTitle">What We Offer</h1>
            {features.map((feature, i) => Card({ title: feature.title, text: feature.text, image: feature.image, key: i }))}
        </section>
    )
}