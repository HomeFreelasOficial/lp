import styled from "styled-components";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import React, { useState, useEffect } from 'react';
import './style.css';
import { Wrapper } from "./styles";


export interface MapPageProps {}




export default function Mapa() {

  const [position, setPosition] = useState({
    lat: 43.0949969,
    lng: 12.310112
  })

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  function success(pos: GeolocationPosition) {
    const crd = pos.coords;

    setPosition({
      lat: crd.latitude,
      lng: crd.longitude
    })
  }

  function error(err: GeolocationPositionError) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      success, error, options
    )
  })

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: ""
  })

 

  return (
    <Wrapper>
        {
          isLoaded ? (
            <GoogleMap
              mapContainerStyle={{width: '100%', height: '100%'}}
              center={position}
              zoom={15}
              options={
                {
                  zoomControl: false,
                  streetViewControl: false,
                  mapTypeControl: false,
                  fullscreenControl: false
                }
              }
            >
              <Marker position={position} options={{
                label: {
                  text: "Você está aqui!",
                  className: 'map-marker'
                }
              }}/>
            </GoogleMap>
        ) : <></>
        }
    </Wrapper>
  )
}