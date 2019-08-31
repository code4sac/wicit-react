import React from 'react';

const writeUp = {
    main_heading: "Resources",
    heading: "Farmers' Markets",
    description: "WIC offers two programs to help you buy fruits and vegetables at your local farmers' market.",
    block1: {
        title: "Farmers' Market Nutrition Program (FMNP)",
        summary: "The Farmers' Market Nutrition Program (FMNP) is funded by the U.S. Department of Agriculture (USDA) to provide fresh, nutritious, locally grown fruits and vegetables from farmers' markets to WIC families and seniors. Each eligible WIC family or senior receives $20 in checks each season to purchase fresh fruits, vegetables, and cut herbs from a WIC authorized farmer at WIC authorized market in California."
    },
    block2: {
        title: "WIC Fruit & Vegetable Checks (FVC)",
        summary: "In October 2009, fruit and vegetables were added to the WIC food package for participants to purchase at authorized grocery stores. In May 2010 the first farmers' market was authorized to accept WIC fruit and vegetable checks. Since 2010, over 200 farmers and 35 markets have been authorized to accept the fruit and vegetable checks. For the list of authorized farmers and markets please see WIC's Authorized Farmer & Market Lists ."
    }
};

export default function InfoContainer() {
    return (
        <section className="info-container">
            <div className="info-container__main">
            <h2 className="heading-secondary u-center-text">{writeUp.main_heading}</h2>
            <div className="info-container__heading">
                <h2 className="heading-tertiary">{writeUp.heading}</h2>
                <p className="paragraph">{writeUp.description}</p>
            </div>
            <div className="info-container__content">
                <h3 className="heading-quat">{writeUp.block1.title}</h3>
                <p className="paragraph">{writeUp.block1.summary}</p>
                <h3 className="heading-quat">{writeUp.block2.title}</h3>
                <p className="paragraph">{writeUp.block2.summary}</p>
            </div>
            </div>
        </section>
    );
}