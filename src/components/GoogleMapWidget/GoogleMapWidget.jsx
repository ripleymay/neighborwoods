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
      icon: 'https://i.imgur.com/WRhiH9H.png?1'
    });
    new window.google.maps.Circle({
      strokeColor: "#9FA438",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#9FA438",
      fillOpacity: 0.35,
      map: map,
      center: target,
      radius: 6.096,
    });
    new window.google.maps.Circle({
      strokeColor: "#396211",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#396211",
      fillOpacity: 0.35,
      map: map,
      center: target,
      radius: 3.048,
    });
  }, [coords]);

  return(<div id="map"></div>)
}