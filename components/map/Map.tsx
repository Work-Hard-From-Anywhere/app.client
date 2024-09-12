import { useRef } from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const Map = () => {
  const mapRef = useRef<MapView | null>(null);

  return (
    <>
      <MapView
        style={StyleSheet.absoluteFill}
        showsUserLocation
        showsMyLocationButton
        ref={mapRef}
      />
    </>
  );
};

export default Map;
