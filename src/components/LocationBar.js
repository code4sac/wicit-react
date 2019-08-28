import React from "react";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";

import left_chevron from "../assets/left_chevron.svg";

class LocationBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toggle: false
        };
    }

    handleToggle = () => {
        this.setState({
            toggle: !this.state.toggle
        });
    }

    render() {
        return (
            <div className="location-bar">
                <h2 className="location-bar__heading">{this.props.address}</h2>
                <button className="location-bar__button" onClick={() => this.setState({ toggle: !this.state.toggle })}></button>
                {this.state.toggle ? (
                    <div className="search-container">
                        <button className="search-container__button" onClick={() => this.setState({ toggle: !this.state.toggle })}><img className="search-container__arrow" src={left_chevron} alt="back button arrow" />Back to Map</button>
                        <SearchBar onClick={this.handleToggle} />
                    </div>
                ) : null}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    address: state.app.address
});

export default connect(mapStateToProps)(LocationBar);
