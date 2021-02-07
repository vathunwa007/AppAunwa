
import React from 'react'
import { View, Text } from 'react-native'
import Setoptions from '../../../hoc/Setoptions'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const Maps = () => {
  return (
    <View>
      <MapView
        style={{ height: '100%' }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 13.742380765167903,
          longitude: 100.48935217285157,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        rotateEnabled
        zoomEnabled
        showsTraffic
        zoomTapEnabled
        zoomControlEnabled
        showsIndoors
        showsIndoorLevelPicker


      />
    </View>
  )
}

export default Setoptions(Maps)
