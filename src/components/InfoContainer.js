import React from 'react';
import InfoCard from '../components/InfoCard';
import cart from '../assets/cart.png';
import pregnant from '../assets/pregnant.png';
import phone from '../assets/phone.png';

const writeUp = {
    card1: {
        heading: "What is WIC?",
        description: "WIC is a federally-funded health and nutrition program for women, infants, and children. WIC helps families by providing checks for buying healthy supplemental foods from WIC-authorized vendors, nutrition education, and help finding healthcare and other community services. In California, 84 WIC agencies provide services locally to over 1.45 million participants each month at over 650 sites throughout the State"
    },
    card2: {
        heading: "Who is WIC for?",
        description: "Women who are pregnant, breastfeeding, or just had a baby. Children under 5 years old (including foster children). Families with low to medium income (working families may qualify)"
    },
    card3: {
        heading: "Getting Started with WIC",
        description: "Call 1-888-WIC-WORKS to talk to a WIC staff member who can help you find your local WIC office. Check out California's offical WIC site for more official information about WIC."
    }
}

export default function InfoContainer() {
    return (
        <>
            <InfoCard image={cart} alt={writeUp.card1.heading} heading={writeUp.card1.heading} description={writeUp.card1.description} />
            <InfoCard image={pregnant} alt={writeUp.card2.heading} heading={writeUp.card2.heading} description={writeUp.card1.description} />
            <InfoCard image={phone} alt={writeUp.card3.heading} heading={writeUp.card3.heading} description={writeUp.card1.description} />
        </>
    );
}