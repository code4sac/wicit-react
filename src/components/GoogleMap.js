import React from "react";
import { connect } from "react-redux";

import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

import { API_GOOGLE_MAPS } from "../config";

const mapStyles = {
    width: "100%",
    height: "100%"
};

export class GoogleMap extends React.Component {

    render() {
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
                          onClick={() => console.log("You clicked me!")}
                      />
                  );
              })
            : null;

        return (
            <Map google={this.props.google} zoom={14} style={mapStyles} initialCenter={this.props.mapCenter}>
                {markers ? markers : null}
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
// export default connect(mapStateToProps)(GoogleMap);
