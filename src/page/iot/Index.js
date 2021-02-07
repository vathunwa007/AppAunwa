import React, { useEffect } from 'react'
import { View, Text, ScrollView, StyleSheet, Dimensions, Image } from 'react-native'
import Setoptions from '../../../hoc/Setoptions'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { Slider, Avatar } from 'react-native-elements';

const sreenWidth = Dimensions.get("window").width;
const sreenHeight = Dimensions.get("window").height;

const Iot = (props) => {
    useEffect(() => {


    }, []);

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={{ height: 250 }}>
                    <ScrollView horizontal >
                        <View style={[styles.cardscroll]}>
                            <View style={{ flex: 0.1, position: "absolute", right: 1, flexDirection: "row" }}>
                                <Avatar avatarStyle={{ backgroundColor: "#f5dadc", borderRadius: 50, }} />
                                <Avatar avatarStyle={{ backgroundColor: "#5cfc00", borderRadius: 50, }} />
                            </View>
                            <View style={{ flex: 1, alignItems: "center" }}>
                                <Text style={{ textAlign: "center", fontSize: 30, flex: 0.5 }}>หลอดไฟ</Text>
                               {/*  <Image source={require('../../img/lightoff.png')} style={{ flex: 1, resizeMode: "cover", width: 150, }} /> */}
                                <Image source={require('../../img/lighton.png')} style={{ flex: 1, resizeMode: "cover", width: 150, }} />
                                <View style={{ width: 250, flex: 0.1 }}>
                                    <Slider
                                        //value={this.state.value}
                                        // onValueChange={(value) => this.setState({ value })}

                                        maximumValue={50}
                                        minimumValue={20}
                                        step={1}
                                        trackStyle={{ height: 10, backgroundColor: "#f4f", }}
                                        thumbStyle={{ height: 20, width: 20, backgroundColor: "orange" }}

                                    />
                                </View>
                            </View>
                        </View>
                        <View style={[styles.cardscroll]}>
                            <View style={{ flex: 0.1, position: "absolute", right: 1, flexDirection: "row" }}>
                                <Avatar avatarStyle={{ backgroundColor: "#f5dadc", borderRadius: 50, }} />
                                <Avatar avatarStyle={{ backgroundColor: "#5cfc00", borderRadius: 50, }} />
                            </View>
                            <View style={{ flex: 1, alignItems: "center" }}>
                                <Text style={{ textAlign: "center", fontSize: 30, flex: 0.5 }}>หลอดไฟ</Text>
                                <Image source={require('../../img/lightoff.png')} style={{ flex: 1, resizeMode: "cover", width: 150, }} />
                                <View style={{ width: 250, flex: 0.1 }}>
                                    <Slider
                                        //value={this.state.value}
                                        // onValueChange={(value) => this.setState({ value })}
                                        maximumValue={50}
                                        minimumValue={20}
                                        step={1}
                                        trackStyle={{ height: 10, backgroundColor: "#f4f", }}
                                        thumbStyle={{ height: 20, width: 20, backgroundColor: "orange" }}

                                    />
                                </View>
                            </View>
                        </View>

                    </ScrollView>
                </View>

                <View style={styles.view2}>

                </View>
            </View>
        </ScrollView>
    )
}

export default Setoptions(Iot)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffd52e"
    },
    cardscroll: {
        flex: 1,
        height: 250,
        marginRight:10,
        marginLeft:10,
        width: sreenWidth / 1 - 20,
        backgroundColor: "white",
        paddingBottom: 30,
        borderBottomEndRadius: 45,
        borderBottomStartRadius: 45,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,

    },
    card: {
        width: sreenWidth / 1 - 25,
        borderRadius: 10
    },
    view2: {
        backgroundColor: "white",
        height: sreenHeight * 1,
        margin: 10,
        borderRadius: 25,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    }
})
