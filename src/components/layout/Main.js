import React from "react";
import SearchBar from "../SearchBar";
import CardContainer from '../CardContainer';
import InfoContainer from '../InfoContainer';

export default function Main() {
    return (
        <main role="main">
            <section className="main-container" role="form">
                <SearchBar />
            </section>
            <CardContainer />
            <InfoContainer />
        </main>
    );
}
