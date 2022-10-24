import {StyleSheet, Text, SafeAreaView, Pressable, Image} from 'react-native';
import { Themes } from '../assets/Themes';

export default function SpotifyAuthButton({getSpotifyAuth}) {
    return (
        <Pressable 
          onPress={() => {getSpotifyAuth()}}
          style={styles.button}>
          <Image style={{width: 14, height: 14, marginRight: 8}} source={require('../assets/spotify-logo.png')}/>
          <Text style={styles.text}>CONNECT WITH SPOTIFY</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
        button: {
        backgroundColor: Themes.colors.spotify,
        padding: 10,
        borderRadius: 999999,
        flexDirection: 'row',
    },
        text: {
        color: Themes.colors.white,
        fontSize: 14,
        fontWeight: 'bold'
    },
})

