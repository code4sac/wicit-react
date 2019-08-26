import React from "react";
import { connect } from "react-redux";
import { setInfoWindow } from "../actions/index";

import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import { API_GOOGLE_MAPS } from "../config";

const mapStyles = {
    width: "100%",
    height: "100%"
};

export class GoogleMap extends React.Component {
    handleVendor = selectedVendor => {
        this.props.handleVendor(selectedVendor);
    };

    render() {
        console.log(this.props.selectedVendor);
        let markers = this.props.vendors
            ? this.props.vendors.map((vendor, index) => {
                  return (
                      <Marker
                          key={index}
                          id={index}
                          position={{
                              lat: vendor.Latitude,
                              lng: vendor.Longitude
                          }}
                          onClick={() => this.handleVendor(vendor)}
                      >
                      </Marker>
                  );
              })
            : null;

        return (
            <Map google={this.props.google} zoom={13} style={mapStyles} initialCenter={this.props.mapCenter}>
                {markers && this.props.google ? markers : null}
            </Map>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        handleVendor: selectedVendor => {
            dispatch(setInfoWindow(selectedVendor));
        }
    };
};

const mapStateToProps = state => ({
    vendors: state.app.vendors,
    mapCenter: state.app.mapCenter,
    selectedVendor: state.app.selectedVendor
});

const WrappedContainer = GoogleApiWrapper({
    apiKey: API_GOOGLE_MAPS
})(GoogleMap);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WrappedContainer);
// export default connect(mapStateToProps)(GoogleMap);
