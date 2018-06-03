import React from "react";
import ReactDOM from "react-dom";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const ShopMap = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyC8alGkid4ElCTXhdhKCblTTMg7HLb2xm4&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={18} defaultCenter={{ lat: 14.6774536, lng: 120.9807591 }}>
    {<Marker position={{ lat: 14.6774536, lng: 120.9807591 }} />}
  </GoogleMap>
));

ReactDOM.render(<ShopMap />, document.getElementById("root"));

export default ShopMap
