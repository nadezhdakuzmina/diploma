import * as React from 'react';
import cn from 'classnames';

import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

import S from './styles.module.css';

type MapProps = {
  className?: string;
};

const Map: React.FC<MapProps> = (props) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyA-m_R15qMZL50AG4wJa-HckKp-SlqldUs'
  });

  if (!isLoaded) {
    return (
      <div className={cn(S.placeholder, props.className)} />
    );
  }

  return (
    <div
      className={props.className}
      style={{
        background: 'url(https://assets-global.website-files.com/609ed46055e27a02ffc0749b/63bc7e5e16e24a7c721cd994_mapbox_maps.jpeg) no-repeat',
        backgroundSize: 'cover',
      }}
    />
  );

  return (
    <GoogleMap
      options={{
        disableDefaultUI: true,
        zoomControl: true,
        keyboardShortcuts: false,
        // scaleControl: false,
      }}
      mapContainerClassName={props.className}
      /* mapContainerStyle={{
        width: '400px',
        height: '400px'
      }} */
      center={{
        lat: -3.745,
        lng: -38.523
      }}
      zoom={10}
    >
      { /* Child components, such as markers, info windows, etc. */ }
      <></>
    </GoogleMap>
  );
};

export default Map;
