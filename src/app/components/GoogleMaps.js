'use client';

import React from 'react';
import PropTypes from 'prop-types';

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import useUserLocation from '@/hooks/useUserLocation';

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const initialCenter = { lat: 55.68065881192912, lng: 12.585996848117 }; // Default center if location is unavailable - Copenhagen

function GoogleMaps({className}) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
  });
  const { location, error } = useUserLocation();
  console.log('===> User Location', {location, error});
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className={className}>
      {error && <p>Error: {error}</p>}
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={location || initialCenter}
        zoom={location ? 15 : 7} // Adjust zoom dynamically
      >
        {location && <Marker position={location} />}
      </GoogleMap>
    </div>
  );
}

export default GoogleMaps;

GoogleMaps.propTypes = {
  className: PropTypes.string,
};
