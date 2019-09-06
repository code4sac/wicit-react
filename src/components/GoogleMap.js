import React from "react";
import { connect } from "react-redux";

import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";

import { API_GOOGLE_MAPS } from "../config";

const mapStyles = {
    width: "100%",
    height: "100%"
};

export class GoogleMap extends React.Component {
    state = {
        activeMarker: {},
        selectedPlace: {},
        showingInfoWindow: false
    };

    onMarkerClick = (props, marker) =>
        this.setState({
            activeMarker: marker,
            selectedPlace: props,
            showingInfoWindow: true
        });

    onInfoWindowClose = () =>
        this.setState({
            activeMarker: null,
            showingInfoWindow: false
        });

    onMapClicked = () => {
        if (this.state.showingInfoWindow)
            this.setState({
                activeMarker: null,
                showingInfoWindow: false
            });
    };

    render() {
        console.log(this.state.selectedPlace);
        let markers = this.props.vendors
            ? this.props.vendors.map((vendor, index) => {
                  return (
                      <Marker
                          {...vendor}
                          name={`Marker ${index}`}
                          key={index}
                          id={index}
                          position={{
                              lat: vendor.Latitude,
                              lng: vendor.Longitude
                          }}
                          onClick={this.onMarkerClick}
                      ></Marker>
                  );
              })
            : null;

        return (
            <Map google={this.props.google} zoom={13} style={mapStyles} initialCenter={this.props.mapCenter} center={this.props.mapCenter}>
                {markers ? markers : null}

                <InfoWindow marker={this.state.activeMarker} onClose={this.onInfoWindowClose} visible={this.state.showingInfoWindow}>
                    <div className="info-window">
                        <h2 className="heading-secondary">{this.state.selectedPlace.Vendor}</h2>
                        <address className="info-window__address">
                            {this.state.selectedPlace.Address}
                            <br />
                            {this.state.selectedPlace.City}
                            <br />
                            {this.state.selectedPlace["Zip Code"]}
                        </address>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

const mapStateToProps = state => ({
    vendors: state.app.vendors,
    mapCenter: state.app.mapCenter
});

const WrappedContainer = GoogleApiWrapper({
    apiKey: API_GOOGLE_MAPS
})(GoogleMap);

export default connect(mapStateToProps)(WrappedContainer);
