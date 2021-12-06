import React, {useEffect} from 'react'
import './GoogleMapWidget.css'

export default function Map({coords}) {

  useEffect(function() {
    let target = { lat: coords.lat, lng: coords.lng };
    let map = new window.google.maps.Map(document.getElementById("map"), {
      center: target,
      zoom: 20,
      mapTypeId: 'satellite',
    });
    new window.google.maps.Marker({
      position: target,
      animation: window.google.maps.Animation.DROP,
      map: map,
    });
  });

  return(<div id="map"></div>)
}