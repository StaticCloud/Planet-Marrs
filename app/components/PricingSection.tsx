import style from './styles/PricingSection.module.css';
import Image from 'next/image';
import checkmark from '@/public/images/checkmark.png';

type CardInfo = {
    tier: string,
    description: string,
    price: string,
    features: string[]
}

const pricingOptions: CardInfo[] = [
    {
        tier: "Monthly",
        description: "A monthly subscription that covers unlimited services.",
        price: "$120/month",
        features: [
            "A Professional Website",
            "Unlimited Edits",
            "Unlimited Maintenance",
            "1:1 Support",
            "Hosting Management"
        ]
    },
    {
        tier: "One Time",
        description: "Pay a flat, one time fee for your website.",
        price: "$1900",
        features: [
            "A Professional Website",
            "No Mandatory Monthly Fees",
            "Access to Source Code",
            "Optional Monthly $30 Fee for Hosting Management and Maintenance"
        ]
    }
]

function PricingCard({ tier, description, price, features }: CardInfo) {
    return (
        <div className={style.pricingCard}>
            <h1>{tier}</h1>
            <h2>{price}</h2>
            <p>{description}</p>
            <ul>
                {features.map((feature, i) =>
                    <li key={i} className={style.pricingFeature}>
                        <Image src={checkmark} width={'20'} height={'20'} alt={'checkmark'}/>
                        <p>{feature}</p>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default function PricingSection() {
    return (
        <section className={style.pricingSection}>
            <h1 className='sectionTitle'>Pricing</h1>
            <div className={style.pricingCardWrapper}>
                {pricingOptions.map(option => PricingCard({ tier: option.tier, description: option.description, price: option.price, features: option.features }))}
            </div>
        </section>
    )
}