import React, {useEffect} from 'react'
import './GoogleMapWidget.css'

export default function Map({latLng}) {

  useEffect(function() {
    new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: latLng.lat, lng: latLng.lng },
      zoom: 18,
      // mapTypeId: 'satellite',
    });
  }, []);

  return(<div id="map"></div>)
}