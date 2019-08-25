import React from "react";
import SearchBar from "../SearchBar";
import InfoContainer from '../InfoContainer';

export default function Main() {
    return (
        <main role="main">
            <section className="main-container" role="form">
                <SearchBar />
            </section>
            <section className="info-container" >
                <InfoContainer />
            </section>
        </main>
    );
}
