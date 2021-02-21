
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Dimensions, StyleSheet, Image } from 'react-native'
import Setoptions from '../../../hoc/Setoptions'
import MapView, { PROVIDER_GOOGLE, Geojson, Marker, Callout } from 'react-native-maps';
import { Button, Overlay, Input, Avatar } from 'react-native-elements';
const ScreenWidth = Dimensions.get("window").width;
const ScreenHeight = Dimensions.get("window").height;

const Maps = () => {
  const [visible, setVisible] = useState(false);
  const [condinate, setCondinate] = useState({});
  const [from, setFrom] = useState({
    name: "",
    detail: ""
  });
  const [markers, setMarkers] = useState([
    {
      "id": 45981,
      "time": "2020-01-14T04:20:00.000Z",
      "size": 125,
      "location": "4 ESE GAMALIEL",
      "city": "GAMALIEL",
      "county": "MONROE",
      "state": "KY",
      "lat": 36.62,
      "lon": -85.73,
      "comments": "PUBLIC REPORT RELAYED BY MEDIA. (LMK)",
      "created_at": "2020-03-05T14:54:06.650Z",
      "updated_at": "2020-03-05T14:54:06.650Z"
    },
  ]);
  const [geojson, setGeojson] = useState({
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            100.61993837356567,
            13.751630430742512
          ]
        }
      }
    ]
  });
  async function load(url, callback) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        callback(xhr.response);
      }
    }

    xhr.open('GET', url, true);
    xhr.send('');
  }
  const mapMarkers = () => {
    return markers.map((report) => <Marker
      key={report.id}
      coordinate={{ latitude: report.lat, longitude: report.lon }}
      title={report.location}
      description={report.comments}
      image={require('../../img/leaf.png')}
    >
    </Marker>)
  }
  const createMakers = (e = false, i = false) => {
    e && setCondinate(e.nativeEvent.coordinate);
    if (i === true) {
      let ctmark = {
        "id": condinate.latitude,
        "time": "2020-01-14T04:20:00.000Z",
        "size": 125,
        "location": from.name,
        "city": "Bangkok",
        "county": "Thailand",
        "state": "AUNWA",
        "lat": condinate.latitude,
        "lon": condinate.longitude,
        "comments": from.detail,
        "created_at": "2020-03-05T14:54:06.650Z",
        "updated_at": "2020-03-05T14:54:06.650Z"
      }
      setMarkers([...markers, ctmark]);
    }
    from.name = "";
    from.detail = "";
    setFrom({ ...from });
    setVisible(!visible);
  }

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 13.742380765167903,
          longitude: 100.48935217285157,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType={'standard'}
        followsUserLocation={true}
        showsUserLocation={true}
        userLocationPriority={'high'}
        showsMyLocationButton={true}
        rotateEnabled
        zoomEnabled
        showsTraffic
        zoomTapEnabled
        zoomControlEnabled
        showsIndoors
        toolbarEnabled
        showsIndoorLevelPicker={true}
        onLongPress={createMakers}
      >
        {mapMarkers()}
        <Geojson
          geojson={geojson}
          strokeColor="red"
          fillColor="black"
          strokeWidth={2}
        />
        {/* <Callout tooltip>
          <Avatar
            size="large"
            rounded
            icon={{ name: 'user', type: 'font-awesome' }}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
            containerStyle={{ flex: 2, marginLeft: 20, marginTop: 115 }}
          />
        </Callout> */}

      </MapView>

      <Overlay isVisible={visible} onBackdropPress={() => setVisible(!visible)}>
        <View style={styles.overlay}>
          <Input
            placeholder='ชื่อร้าน'
            value={from.name}
            onChangeText={(e) => setFrom({ ...from, name: e })}
            leftIcon={
              <Icon
                name='tag'
                size={24}
                color='green'
              />
            }
          />
          <Input
            value={from.detail}
            placeholder='คำอธิบาย'
            onChangeText={(e) => setFrom({ ...from, detail: e })}
          />
          <Button
            onPress={() => createMakers(false, true)}
            type="solid"
            icon={
              <Icon
                name="map-marker"
                size={15}
                color="#44e9ff"
                style={{ marginLeft: 10 }}
              />
            }
            iconRight
            title="สร้างพิกัด"
          />
        </View>
      </Overlay>


    </View>
  )
}

const styles = StyleSheet.create({
  overlay: {
    width: (ScreenWidth / 1) - 50,
  }
})
export default Setoptions(Maps)
