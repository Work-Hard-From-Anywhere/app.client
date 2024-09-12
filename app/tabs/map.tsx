import React from 'react';
import { View } from 'react-native';

import SearchBar from '~/components/SearchBar';
import { Map as MapView } from '~/components/map';

export default function Map() {
  return (
    <View style={{ flex: 1 }}>
      <MapView />
      <SearchBar />
    </View>
  );
}
