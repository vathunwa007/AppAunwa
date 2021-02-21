import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Header } from 'react-native-elements'


const ScreenHeight = Dimensions.get("window").height;
function Headers(props) {
    const { navigation } = props;
    return (
        <Header
            backgroundColor={"#4db6ac"}
            leftComponent={{ icon: 'menu', color: '#fff', size: 45, onPress: () => navigation.openDrawer(), }}
            centerComponent={{ text: props.title, style: { color: '#fff', fontSize: 30 } }}
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
