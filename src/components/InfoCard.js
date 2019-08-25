import React from 'react';

export default function InfoCard(props) {
    return(
        <div className="info-card">
            <img className="info-card__image" src={props.image} alt={props.alt}></img>
            <h2 className="info-card__heading">{props.title}</h2>
            <p className="info-card__description">{props.description}</p>
        </div>
    )
}