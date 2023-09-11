import Image from "next/image";

type CardInfo = {
    title: string,
    text: string,
    image: string
}

const features: CardInfo[] = [
    {
        title: "Fast and Simple",
        text: "Websites are programmed and optimized with performance at the forefront, ensuring fast websites without the bloat that comes with traditional website builders.",
        image: ""
    },
    {
        title: "Responsive",
        text: "Websites are optimized for a wide variety of screen sizes, ensuring that your website will look great on any device.",
        image: ""
    },
    {
        title: "Creative Freedom",
        text: "Customers have the final say on the look of their website, no more spending hours searching for the perfect template.",
        image: ""
    },
    {
        title: "SEO Friendly",
        text: "We leverage best SEO practices and optimizations such as server-side rendering, giving your website a much stronger site ranking on search engines.",
        image: ""
    }
]


function Card({ title, text, image }: CardInfo) {
    return (
        <div>
            <Image src={image} alt={title}/>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    );
}

export default function FeaturesSection() {
    return (
        <section>
            <h1>This is where features will go</h1>
            {features.map(feature => Card({ title: feature.title, text: feature.text, image: feature.image }))}
        </section>
    )
}