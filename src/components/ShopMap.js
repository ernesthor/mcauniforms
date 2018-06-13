import React from "react";
import ReactDOM from "react-dom";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const ShopMapStyle = require("./ShopMapStyle.json");

const ShopMap = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyC8alGkid4ElCTXhdhKCblTTMg7HLb2xm4&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%`, width: '100%' }} />,
    containerElement: <div style={{ height: `300px`}} />,
    mapElement: <div style={{ height: `100%`, width: '100%'}} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={16} defaultCenter={{ lat: 14.619278, lng: 121.151185 }}>
    {<Marker position={{ lat: 14.619278, lng: 121.151185 }} />}
  </GoogleMap>
));

ReactDOM.render(<ShopMap />, document.getElementById("root"));

export default ShopMap
