import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  FlatList,
  ActivityIndicator,
  Button
} from 'react-native';
import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './Navigation';
const App = (props) => {

  return (
    <>
      <NavigationContainer>

        <View style={styles.container}>
          <SafeAreaView />
          <Navigation />
        </View>

      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2cdf7",
    flex: 1,
    flexDirection: "column",
    // height: ScreenHeight,
    // position:"absolute",
    // top:0,
    // bottom:0,
    // left:0,
    // right:0,

  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },

});

export default App;
