import React from 'react';
import { View } from 'react-native';

import { Map as MapView } from '~/components/map';

export default function Map() {
  return (
    <View style={{ flex: 1 }}>
      <MapView />
      {/*<Search />*/}
    </View>
  );
}
