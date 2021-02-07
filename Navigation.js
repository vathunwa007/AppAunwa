import React, { useEffect } from 'react'
import { View, Button, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar } from "react-native-elements";

import Home from './src/page/Home';
import Login from './src/page/Login';
import Music from './src/page/music/Index';
import Photo from './src/page/photo/Index';
import Iot from './src/page/iot/Index';
import Map from './src/page/map/Index';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Navigation = (props) => {
  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  const animationslide = ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    }
  }
  const options = {
    headerShown: false,
    transitionSpec: {
      open: config,
      close: config,
    },
    cardStyleInterpolator: animationslide
  }

  return (

    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={options} />
      <Stack.Screen name="Login" component={Login} options={options} />
      <Stack.Screen name="Music" component={Music} options={options} />
      <Stack.Screen name="Photo" component={Photo} options={options} />
      <Stack.Screen name="Iot" component={Iot} options={options} />
      <Stack.Screen name="Map" component={Map} options={options} />
    </Stack.Navigator>

  )
}


const Navigationslide = () => {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={props => <SlideContent {...props} />} >
      <Drawer.Screen name="Home" component={Navigation} />
    </Drawer.Navigator>
  )
}


function SlideContent({ navigation }) {
  return (
    <DrawerContentScrollView >
      <View style={{ flex: 1, flexDirection: "row"}}>
        <Avatar
          size="medium"
          rounded
          source={{uri:'https://s3.amazonaws.com/uifaces/https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixid=MXwxMjA3fDB8MHxzZWhttps://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60FyY2h8MjB8fHBlcnNvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60/twitter/ladylexy/128.jpg'}}
          onPress={() => console.log("Works!")}
          activeOpacity={0.5}
          // avatarStyle={{ backgroundColor: "#F54" }}
        />
        <Text style={{ color: "#000", fontSize: 20, fontFamily: "roboto-700", margin: 10 }}>Thunwa</Text>
      </View>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </DrawerContentScrollView>
  );
}


export default Navigationslide