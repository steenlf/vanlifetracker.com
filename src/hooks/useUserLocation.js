import {useState, useEffect} from 'react';

const useUserLocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser.');
      return;
    }

/*
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const {latitude, longitude} = position.coords;
        console.log('===> useUserLocation - POSITION', {latitude, longitude});
        setLocation({lat: latitude, lng: longitude});
      },
      (err) => {
        console.log('===> useUserLocation - ERROR', {err});
        setError(err.message);
      },
      {enableHighAccuracy: true, timeout: 3000, maximumAge: 0}
    );
*/

    setInterval(() => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("===> Polled position:", position);
        },
        (error) => {
          console.error("===> Error in getCurrentPosition:", error);
        },
        { enableHighAccuracy: true, timeout: 15000 }
      );
    }, 1000);


    // Cleanup the watcher on component unmount
    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return {location, error};
};

export default useUserLocation;

