import React from "react";

export default class SearchBar extends React.Component {
    render() {
        return (
            <form className="search-form">
                <label className="search-form__label" htmlFor="search">
                    Find stores that support WIC
                </label>
                <input id="search" className="search-form__input" type="string" name="search" placeholder="Stores near me" required />
                <button className="search-form__button btn btn--orange" type="submit">
                    Find Store
                </button>
            </form>
        );
    }
}
