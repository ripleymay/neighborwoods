import React, {useEffect} from 'react'
import './GoogleMapWidget.css'

export default function Map() {

  useEffect(function() {
    // const div = document.getElementById('map');
    let map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 30.267, lng: -97.743 },
      zoom: 12,
    });

  }, []);

  return(<div id="map"></div>)
}