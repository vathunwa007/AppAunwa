import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Header } from 'react-native-elements'


const ScreenHeight = Dimensions.get("window").height;
function Headers(props, { title }) {
    const { navigation } = props;
    return (
        <Header
            backgroundColor={"#e6b800"}
            leftComponent={{ icon: 'menu', color: '#fff', size: 45, onPress: () => navigation.openDrawer(), }}
            centerComponent={{ text: title, style: { color: '#fff', fontSize: 30 } }}
            rightComponent={{ icon: `account-circle`, color: '#fff', size: 45, onPress: () => alert('444'), }}
        />

    )
}
Headers.defaultProps = {
    title: "AunwaPlay"
}
const styles = StyleSheet.create({
    Headetsty: {
        backgroundColor: "#5a035a",
        height: ScreenHeight / 10,
        justifyContent: "center",
        alignItems: "center",
    }
})
export default Headers
