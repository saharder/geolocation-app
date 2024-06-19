import { useState } from "react";
import OpenLayersMap from "./OpenLayersMap";

const Location = () => {
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  const [error, setError] = useState(false);
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      setError(true);
    }
  };
  const showPosition = (position: GeolocationPosition) => {
    setLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  };

  const locationString = `latitude: ${location.latitude} longitude: ${location.longitude}`;

  return (
    <div className="show">
      <div>
        <button onClick={getLocation}>Get Location</button>
      </div>
      <div className="results">
        {error ? (
          <div>Geolocation is not supported by this browser.</div>
        ) : (
          <>
            <div> {locationString} </div>
            <OpenLayersMap
              latitude={location.latitude}
              longitude={location.longitude}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Location;
