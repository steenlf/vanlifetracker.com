import { useState, useEffect } from "react";

const useUserLocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    try {
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          const {latitude, longitude} = position.coords;
          console.log('===> useUserLocation - POSITION', {latitude, longitude});
          setLocation({lat: latitude, lng: longitude});
        },
        (err) => {
          console.log('===> useUserLocation - ERROR', {error});
          setError(err.message);
        },
        {enableHighAccuracy: true}
      );
    } catch (e) {
      console.log('===> useUserLocation - CATCH ERROR', e);
    }

    // Cleanup the watcher on component unmount
    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return { location, error };
};

export default useUserLocation;
