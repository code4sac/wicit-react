import React from "react";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";


import PlacesAutocomplete from "react-places-autocomplete";
import { geocodeByAddress, geocodeByPlaceId, getLatLng } from "react-places-autocomplete";

import { setMapCenter } from '../actions/index';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: '',
            coordinates: null
        };
    }

    handleLocation = e => {
        e.preventDefault();
        this.props.handleLocation(this.state.address, this.state.coordinates);
        this.props.history.push(`/vendor/${this.state.address}`);
        localStorage.setItem("coordinates", JSON.stringify(this.state.coordinates));
        localStorage.setItem("address", JSON.stringify(this.state.address));

        if (this.props.onClick) {
            this.props.onClick();
        }
    }

    handleChange = address => {
        this.setState({ address });
    };

    handleSelect = address => {
        this.setState({
            address: address
        });
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => this.setState({ coordinates: latLng }))
            .catch(error => console.error("Error", error));
    };

    render() {
        return (
            <form className="search-form" onSubmit={this.handleLocation}>
                <PlacesAutocomplete value={this.state.address} onChange={this.handleChange} onSelect={this.handleSelect}>
                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                        <>
                            <label className="search-form__label" htmlFor="search">
                                {this.props.title}
                            </label>

                            <input
                                id="search"
                                {...getInputProps({
                                    placeholder: "Stores near me",
                                    className: "location-search-input search-form__input"
                                })}
                            />
                            <div className="autocomplete-dropdown-container search-form__dropdown">
                                {loading && <div className="search-form__suggestions">Loading...</div>}
                                {suggestions.map(suggestion => {
                                    return (
                                        <div className="search-form__suggestions" {...getSuggestionItemProps(suggestion)}>
                                            <span>{suggestion.description}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </>
                    )}
                </PlacesAutocomplete>
                <button className="search-form__button btn btn--orange" type="submit" disabled={!this.state.coordinates}>
                    Find Store
                </button>
            </form>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleLocation: (address, coordinates) => {
            dispatch(setMapCenter(address, coordinates));
        }
    };
};

const mapStateToProps = state => ({
    vendors: state.app.vendors,
    mapCenter: state.app.mapCenter
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(SearchBar));