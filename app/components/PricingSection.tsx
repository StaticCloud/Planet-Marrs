import style from './styles/PricingSection.module.css';

type CardInfo = {
    tier: string,
    description: string,
    price: string,
    features: [string]
}

const pricingOptions: CardInfo[] = [
    {
        tier: "Monthly",
        description: "A monthly subscription that covers unlimited services.",
        price: "$120/month",
        features: [
            "Feature placeholder"
        ]
    },
    {
        tier: "One Time",
        description: "Pay a flat, one time fee for your website.",
        price: "$1900",
        features: [
            "Optional $30/month for hosting management and maintenance."
        ]
    }
]

function PricingCard({ tier, description, price, features }: CardInfo) {
    return (
        <div className={style.pricingCard}>
            <h1>{tier}</h1>
            <p>{description}</p>
        </div>
    )
}

export default function PricingSection() {
    return (
        <section>
            {pricingOptions.map(option => PricingCard({ tier: option.tier, description: option.description, price: option.price, features: option.features }))}
        </section>
    )
}