import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import GoogleMapReact from 'google-map-react';

interface MapProps {
  zoom?: number;
}

const Map: React.FC<MapProps> = (props) => {
  const [location, setLocation] = useState<{ lat: number; lng: number }>();
  useEffect(() => {
    const location = window.navigator && window.navigator.geolocation;
    if (location) {
      location.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          console.log(position);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }, []);

  return (
    <Container>
      {location && (
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCl-KzW-IaVV_3XU1ERkI_RrWfxjuJgIYs' }}
          defaultCenter={location}
          defaultZoom={props?.zoom}
        >
          {props.children}
        </GoogleMapReact>
      )}
    </Container>
  );
};

export default Map;
