import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import MakerStore from '../MakerStore';

const AnyReactComponent = ({text}: any) => <div>{text}</div>;

const MapStores = () => {
  const [center, setCenter] = useState({lat: 11.0168, lng: 76.9558 });
  const [zoom, setZoom] = useState(4);
  return (
      <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCl-KzW-IaVV_3XU1ERkI_RrWfxjuJgIYs' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <MakerStore
          lat={11.0168}
          lng={76.9558}
          name="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}

export default MapStores;