import styled from "styled-components";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

import './style.css';


export interface MapPageProps {}

export default function Mapa() {

  const Wrapper = styled.div`
    height: 100vh;
  `

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBJ-k9DL9UE8blCP9dsv8v0y3yykuCN55U"
  })

  const position = {
    lat: -23.5314183,
    lng: -46.4489193
  }

  return (
    <Wrapper>
        {
          isLoaded ? (
            <GoogleMap
              mapContainerStyle={{width: '100%', height: '100%'}}
              center={position}
              zoom={15}
            >
              <Marker position={position} options={{
                label: {
                  text: "José Nefasto está aqui te esperando para contar um segredo",
                  className: 'map-marker'
                }
              }}/>
            </GoogleMap>
        ) : <></>
        }
    </Wrapper>
  )
}