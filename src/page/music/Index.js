import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import SoundPlayer from 'react-native-sound-player'
import Sound from 'react-native-sound';
import Setoptions from '../../../hoc/Setoptions'
const ScreenWidth = Dimensions.get("window").width;

const Music = () => {
  const itemloop = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
  var sound1 = new Sound('https://cdn.videvo.net/videvo_files/audio/premium/audio0113/watermarked/HorrorGrandPianoStri EH1113_preview.mp3');
  var sound2 = new Sound('https://cdn.videvo.net/videvo_files/audio/premium/audio0144/watermarked/PianoDangerChord SDT2050603_preview.mp3');
  const playMusic = async () => {
    //SoundPlayer.loadUrl('https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-glitched-tones/glitched_tones_waterphone_drumstick_scrape_rods_dynamic_aston_stealth_004_485.mp3?_=3');
    // await SoundPlayer.playUrl('https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-glitched-tones/glitched_tones_waterphone_drumstick_scrape_rods_dynamic_aston_stealth_004_485.mp3?_=3')
    //SoundPlayer.play()

    sound1.stop();
    sound1.setSpeed(3)
    sound1.play();

  }
  const playMusic2 = async () => {
    sound2.stop();
    sound2.setSpeed(3)
    sound2.play();
  }

  return (
    <ScrollView horizontal={false} style={{ flex: 1 }}>
      <View style={styles.container}>
        {itemloop.map((item,index) => (
          <TouchableOpacity key={item} onPress={() => index%2==0 ?playMusic() : playMusic2()}>
            <View style={[styles.buttonplay, { backgroundColor: RandomColor() }]}>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>

  )
}
const RandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: 'wrap'
  },
  buttonplay: {
    width: ScreenWidth / 3,
    height: 117,
    borderWidth: 1,
    borderColor: "#ffffff",

  },

});
export default Setoptions(Music);
