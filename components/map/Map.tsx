import * as Location from 'expo-location';
import { PermissionStatus } from 'expo-modules-core/src/PermissionsInterface';
import { useEffect, useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

interface ILocation {
  lat: number;
  lng: number;
}

const Map = () => {
  const [userLocation, setUserLocation] = useState<ILocation>({ lat: 37.78825, lng: -122.4324 });
  const mapRef = useRef<MapView | null>(null);

  const fetchLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== PermissionStatus.GRANTED) {
      return;
    }

    const { coords } = await Location.getCurrentPositionAsync({});
    setUserLocation({ lat: coords.latitude, lng: coords.longitude });
    mapRef.current?.animateCamera({
      center: { latitude: coords.latitude, longitude: coords.longitude },
    });
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  return (
    <>
      <MapView
        style={StyleSheet.absoluteFill}
        showsUserLocation
        showsMyLocationButton
        ref={mapRef}
        initialRegion={{
          latitude: userLocation.lat,
          longitude: userLocation.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </>
  );
};

export default Map;
