import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import React, { useState } from 'react'
import './Map.css'

const center = { lat: 48.8584, lng: 2.2945}

function Map() {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey:'AIzaSyA_adJlp0fl9g8dxysUoW-E6F772PGTT-Q'
    })

    //const [direction, setDirection] = useState("")

    // async function calculateRoute() {
    //     const directionsService = new google.maps.DirectionsService()
    //     const results = await directionsService.route(
    //         {
    //             origin: {lat: mcps[0].lat, lng: mcps[0].lng},
    //             destination: {lat: mcps[mcps.length - 1].lat, lng: mcps[mcps.length - 1].lng},
    //             travelMode: google.maps.TravelMode.DRIVING,
    //         }
    //     )
    //     setDirection(results);
    // }

    if(!isLoaded) {
        return <div>Loading</div>
    }
    //calculateRoute();

  return (
    <div className="map">
        <GoogleMap center={{lat : 10.794991374132902, lng: 106.60019325011359}}  zoom={15} mapContainerStyle={{margin: '0', padding: '0', width: '80vh', height: '50vh'}}>
          <Marker position={{lat : 10.794991374132902, lng: 106.60019325011359}}/>
        </GoogleMap>
    </div>
  )
}

export default Map