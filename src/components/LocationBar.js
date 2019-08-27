import React from "react";
import { connect } from "react-redux";
import SearchBar from './SearchBar';

class LocationBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toggle: false
        };
    }

    render() {
        return (
            <div className="location-bar">
                <h2>{this.props.address}</h2>
                <button>Toggle</button>
                <div className="search-container">
                    <SearchBar />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    address: state.app.address
});

export default connect(mapStateToProps)(LocationBar);