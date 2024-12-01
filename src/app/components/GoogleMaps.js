'use client';

import React from 'react';

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
// import useUserLocation from '@/hooks/useUserLocation';
import useGeolocation from "react-hook-geolocation";
import process from 'next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss';

const mapContainerStyle = {
  width: "100%",
  height: "800px",
};

const initialCenter = { lat: 55.68065881192912, lng: 12.585996848117 }; // Default center if location is unavailable - Copenhagen

const GoogleMaps = ({className}) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
  });
  const geoLocation = useGeolocation();
  console.log('===> Geo Location', geoLocation);

  const location = geoLocation.latitude
    ? { lat: geoLocation.latitude, lng: geoLocation.longitude }
    : null;
  const error = geoLocation.error;

  if (loadError || error) {
    console.log('===> ERROR', {loadError, error});
    return <h1>Error loading maps</h1>
  }
  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={className}>
      {error && <p>Error: {error}</p>}
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={location || initialCenter}
        zoom={6}
      >
        {location && <Marker position={location} />}
        {/*<Marker position={initialCenter} />*/}
      </GoogleMap>
    </div>
  );
}

export default GoogleMaps;
