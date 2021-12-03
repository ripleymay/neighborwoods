import React, {useEffect} from 'react'
import './GoogleMapWidget.css'

export default function Map() {

  useEffect(function() {
    new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 30.267, lng: -97.743 },
      zoom: 12,
      // mapTypeId: 'satellite',
    });
  }, []);

  return(<div id="map"></div>)
}