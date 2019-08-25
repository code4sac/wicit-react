import React from 'react';
import InfoCard from './InfoCard';
import cart from '../assets/cart.png';
import pregnant from '../assets/pregnant.png';
import phone from '../assets/phone.png';

const writeUp = {
    card1: {
        heading: "What is WIC?",
        description: "WIC is a federally-funded health and nutrition program for women, infants, and children. WIC helps families by providing checks for buying healthy supplemental foods from WIC-authorized vendors, nutrition education, and help finding healthcare and other community services."
    },
    card2: {
        heading: "Who is WIC for?",
        description: "Women who are pregnant, breastfeeding, or just had a baby. Children under 5 years old (including foster children). Families with low to medium income (working families may qualify)."
    },
    card3: {
        heading: "Get Started with WIC!",
        description: "Call 1-888-WIC-WORKS to talk to a WIC staff member who can help you find your local WIC office. Check out California's offical WIC site for more official information about WIC."
    }
}

export default function CardContainer() {
    return (
        <section className="card-container">
            <InfoCard image={cart} alt={writeUp.card1.heading} title={writeUp.card1.heading} description={writeUp.card1.description} />
            <InfoCard image={pregnant} alt={writeUp.card2.heading} title={writeUp.card2.heading} description={writeUp.card2.description} />
            <InfoCard image={phone} alt={writeUp.card3.heading} title={writeUp.card3.heading} description={writeUp.card3.description} />
        </section>
    );
}