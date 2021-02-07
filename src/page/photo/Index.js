import React, { useState, useEffect } from 'react'
import { View, NativeModules, StyleSheet, Dimensions, TouchableOpacity, ScrollView, Image ,PermissionsAndroid, ToastAndroid, Alert, } from 'react-native'
import { Input, Overlay, Button } from 'react-native-elements';
import Axios from '../../../axios'
const ScreenWidth = Dimensions.get("window").width;
const ScreenHeight = Dimensions.get("window").height;
import Setoptions from '../../../hoc/Setoptions'
import Icon from 'react-native-vector-icons/FontAwesome';
import RNFetchBlob from 'rn-fetch-blob';
// import RNFetchBlob from './RNFetchBlob.js'
const RNFetchBlobs = NativeModules.RNFetchBlob;


const Photo = () => {

    // console.log(RNFetchBlobs);
    const lop = [1, 2, 3, 4, 5, 6, 7, 8]
    const [photo, setPhoto] = useState([]);
    const [serch, setSerch] = useState("");
    const [visible, setVisible] = useState(false);
    const [dataimage, setDataimage] = useState("");
    const [loading, setLoading] = useState(false);

    const toggleOverlay = async(imagedata) => {
       await imagedata !== undefined ? setDataimage(imagedata.small) : null;
        setVisible(!visible);

    };
    const actualDownload = async() => {
        setLoading(true);
        let dirs = RNFetchBlob.fs.dirs;
       await RNFetchBlob.config({
          path: dirs.DownloadDir + `/${Date.now()}.png`,
          fileCache: true,
        }).fetch(
            'GET',
            `${dataimage}`,
            {},
          ).then(async(res) => {
            setLoading(false);
           await ToastAndroid.showWithGravity(
              'ดาวน์โหลดภาพนี้สำเร็จ!',
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM,
            );
          });
      };
    const downloadImage= async()=>{
        console.log(dataimage);
        try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
              {
                title: 'Storage Permission',
                message: 'App needs access to memory to download the file ',
              },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              actualDownload();
            } else {
              Alert.alert(
                'Permission Denied!',
                'You need to give storage permission to download the file',
              );
            }
          } catch (err) {
            console.log(err);
          }
    }
    const getPhoto = () => {
        Axios.get(serch).then(async ({ data }) => {
            let mapurl = data && data.results.map((item) => (item.urls));
            await setPhoto(mapurl)
            // console.log(mapurl);
        })
    }

    return (
        <ScrollView horizontal={false} style={{ flex: 1 }}>

            <View style={styles.container}>
                <Input
                    rightIcon={<Icon
                        name='search'
                        size={24}
                        color='black'
                    />}
                    placeholder='Serch Image'
                    onChangeText={(e) => setSerch(e)}
                    onBlur={() => getPhoto()}
                />

                {photo.map((item, index) => (
                    <TouchableOpacity onPress={()=>toggleOverlay(item)} key={index}>
                        <View style={[styles.card]} key={index}>
                            <Image source={{ uri: item.small }} style={styles.image} />
                        </View>
                    </TouchableOpacity>

                ))}
                <Overlay isVisible={visible} onBackdropPress={toggleOverlay} >
                    <View style={styles.overlay} >
                        <View style={{flex:1}}>
                        <Image source={{ uri: dataimage }} style={styles.image} />
                        </View>
                        <Button
                        onPress={downloadImage}
                        type="clear"
                            icon={
                                <Icon
                                    name="download"
                                    size={15}
                                    color="#44e9ff"
                                    style={{marginLeft:10}}
                                />
                            }
                            iconRight
                            title="ดาวโหลดรูปภาพนี้"
                        />
                    </View>
                </Overlay>
            </View>
        </ScrollView>

    )
}
const randomWidth = () => {
    let num = Math.floor(Math.random() * 5);
    return num;
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: 'wrap'
    },
    card: {
        width: ScreenWidth / 3,
        height: 200,
        borderWidth: 0.5,
        borderColor: "#ffffff",

    },
    image: {
        flex: 1
    },
    overlay: {
        height: ScreenHeight / 3,
        width: ScreenWidth / 2,
    }

});

export default Setoptions(Photo);
