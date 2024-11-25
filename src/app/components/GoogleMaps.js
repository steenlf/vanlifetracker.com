'use client';

import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Loader} from '@googlemaps/js-api-loader';

const GoogleMaps = ({className}) => {
  const mapRef = React.useRef(null);

  useEffect(() => {
    const initializeMap = async () => {
      try {
        const loader = new Loader({
          apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
          version: 'quarterly',
        });

        const { Map } = await loader.importLibrary('maps');

        const locationInMap = {
          // Home sweet home
          lat: 55.66756144874321,
          lng: 12.50824152942455,
        };

        const { Marker } = await loader.importLibrary('marker');

        const options = {
          center: locationInMap,
          zoom: 7,
        };

        const map = new Map(mapRef.current, options);

        const marker = new Marker({
          map: map,
          position: locationInMap,
        });
      } catch (error) {
        console.error("Error initializing map:", error);
      }
    };

    initializeMap();
  }, []);
  return <div className={className} ref={mapRef} />
}

export default GoogleMaps;

GoogleMaps.propTypes = {
  className: PropTypes.string,
}
