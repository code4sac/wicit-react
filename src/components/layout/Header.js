import React from "react";

export default function Header(props) {
    return (
        <header className="header">
            <div className="header__content">
                <img className="logo" src={props.logo} alt={props.alt} />
                <h1 className="heading-primary">{props.heading}</h1>
            </div>
        </header>
    );
}
