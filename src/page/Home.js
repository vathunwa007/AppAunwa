import React, { useState, useEffect } from 'react'
import { View, Text, Dimensions, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity, Image } from 'react-native'
import Headers from '../../components/Header';
import Setoptions from '../../hoc/Setoptions'

const ScreenHeight = Dimensions.get("window").height;
const ScreenWidth = Dimensions.get("window").width;
const Home = (props) => {

  useEffect(() => {


  }, []);
  const [list, setList] = useState([
    {
      id: 1,
      name: "MUSIC",
      photo: "https://images.unsplash.com/photo-1433622070098-754fdf81c929?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzF8fG11c2ljfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60",
      page: "Music"
    },
    {
      id: 2,
      name: "GAME",
      photo: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8Z2FtZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      page: "Music"
    },
    {
      id: 3,
      name: "PHOTO",
      photo: "https://images.unsplash.com/photo-1485518994577-6cd6324ade8f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGdhbGxlcnl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      page: "Photo"
    },

    {
      id: 4,
      name: "IOT",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB7OlAlfYwxCNJHmn7Q2vMVQO6rX-c6_aFhg&usqp=CAU",
      page: "Iot"
    },
    {
      id: 5,
      name: "MAP",
      photo: "https://journocode.com/wp-content/uploads/2017/02/javascript-leaflet-search-bar-interactive-map-1024x515.png",
      page: "Map"
    },
  ]);

  const renderItem = ({ item }) => {
    const backgroundColor = "#111111";
    return (
      <Item
        item={item}
        onPress={() => { props.navigation.navigate(item.page) }}
        style={{ backgroundColor }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      // extraData={props}
      />
      {/* <Button onPress={() => props.navigation.navigate("Login")} title="GOTOLOGIN" /> */}
    </View>
  )
}
const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} >
    <View style={styles.card}>
     <View style={{flex:0.3}}>
        <Text style={styles.itemText}>{item.name}</Text>
      </View>
      <View style={{flex:0.7,backgroundColor:"#bf5f82",borderBottomEndRadius:25,borderBottomStartRadius:25}}>
        <Image source={{uri:item.photo}} style={{flex:1,borderBottomLeftRadius:20,borderBottomRightRadius:20,resizeMode:'cover'}}/>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffeb94",
    flex: 1,
    flexDirection: "column",
    // height: ScreenHeight,
    // position:"absolute",
    // top:0,
    // bottom:0,
    // left:0,
    // right:0,

  },
  card: {
    margin: 10,
    backgroundColor: "#FFF",
    borderWidth: 4,
    borderColor: "#facc00",
    borderStyle: "solid",
    borderRadius: 25,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 5,
      height: 5
    },
    elevation: 10,
    shadowOpacity: 0.44,
    shadowRadius: 0,
    width: "auto",
    height: 161
  },

  itemText: {
    fontFamily: "roboto-700",
    color: "#ffcd05",
    fontSize: 30,
    textAlign: "center",
    // marginTop: 51,
  }

});

export default Setoptions(Home);