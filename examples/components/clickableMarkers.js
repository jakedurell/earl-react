import React, { Component } from 'react';

import Map from '../../src/index';

import InfoWindow from '../../src/components/InfoWindow';
import Marker from '../../src/components/Marker';

const RideData = [
  {
      "Patient": "Rupert Bermejo",
      "status": "picked up",
      "id": 3,
      "driver": "Alfred",
      "currentLat": 44.312833,
      "currentLng": -72.692843,
      "available": "FALSE",
      "img": "./images/alfred.jpg"
  },
  {
      "Patient": "Matthew Lafountain",
      "status": "booked",
      "id": 5,
      "driver": "Earl",
      "currentLat": 44.630413,
      "currentLng": -73.252439,
      "available": "FALSE",
      "img": "./images/earl.jpg"
  },
  {
      "Patient": "Wilfredo Conlon",
      "status": "dropped off",
      "id": 2,
      "driver": "Maverick",
      "currentLat": 44.448977,
      "currentLng": -73.157229,
      "available": "TRUE",
      "img": "./images/maverick.jpg"
  },
  {
      "Patient": "Ashton Ritzman",
      "status": "picked up",
      "id": 4,
      "driver": "Veronica",
      "currentLat": 44.385431,
      "currentLng": -73.141417,
      "available": "FALSE",
      "img": "./images/veronica.jpeg"
  }
]

class WithMarkers extends Component {
  state = {
    activeMarker: {},
    selectedPlace: {},
    showingInfoWindow: false,
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
    if (!this.props.loaded) return <div>Loading...</div>;

    const markerList = RideData.map((marker) => {
      return (
        <Marker
          name={marker.driver}
          position={{lat: this.currentLat, lng: this.currentLng}}
          key={marker.id}
        />
      )
    })

    return (
      <Map
        className="map"
        google={this.props.google}
        onClick={this.onMapClicked}
        style={{ height: '100%', position: 'relative', width: '100%' }}
        zoom={14}>

      {markerList}

        <Marker
          name="SOMA"
          onClick={this.onMarkerClick}
          position={{ lat: 37.778519, lng: -122.40564 }}
        />

        <Marker
          name="Dolores park"
          onClick={this.onMarkerClick}
          position={{ lat: 37.759703, lng: -122.428093 }}
        />

        <Marker name="Current location" onClick={this.onMarkerClick} />

        <InfoWindow
          marker={this.state.activeMarker}
          onClose={this.onInfoWindowClose}
          visible={this.state.showingInfoWindow}>
          <div>
            <h1>YO YO {this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>

        <InfoWindow position={{ lat: 37.765703, lng: -122.42564 }} visible>
          <small>
            Click on any of the markers to display an additional info.
          </small>
        </InfoWindow>
      </Map>
    );


  }
}

export default WithMarkers;
