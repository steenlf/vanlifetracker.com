'use client';

import React, {useEffect} from 'react';
import {Loader} from '@googlemaps/js-api-loader';

export default function GoogleMaps() {
  const mapRef = React.useRef(null);

  useEffect(() => {
    const initializeMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
        version: 'quarterly',
      });

      const { Map } = await loader.importLibrary('maps');

      const locationInMap = {
        lat: 55.66756144874321,
        lng: 12.50824152942455,
      };

      // Marker
      const { Marker } = (await loader.importLibrary('marker'));

      const options = google.maps.MapOptions = {
        center: locationInMap,
        zoom: 15,
        mapId: 'NEXT_MAPS_TUTS',
      };

      const map = new Map(mapRef.current, options);

      // Add the marker in the map
      const marker = new Marker({
        map: map,
        position: locationInMap,
      })
    }

    initializeMap();
  },[]);
  return <div className='google-map' ref={mapRef} />
}
