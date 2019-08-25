import React from "react";
import { Link } from 'react-router-dom';

export default function Header(props) {
    return (
        <header className="header">
            <nav className="header__content">
                <Link to="/" className="header__link">
                    <img className="logo" src={props.logo} alt={props.alt} />
                    <h1 className="heading-primary">{props.heading}</h1>
                </Link>
            </nav>
        </header>
    );
}
