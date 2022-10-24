import {StyleSheet, Text, View, Image} from 'react-native';
import {Dimensions} from 'react-native';
import { Themes } from '../assets/Themes';
import millisToMinutesAndSeconds from './millisToMinutesAndSeconds';

const windowWidth = Dimensions.get('window').width;

export default function Song({id, imageUrl, title, artist, albumName, duration}) {
    // console.log(imageUrl)
    const newDur = millisToMinutesAndSeconds(duration)

    return (
        <View style={styles.container}>
            <View style={{flex: 1, alignItems: 'center'}}>
                <Text style={styles.textGrey}>{id}</Text>
            </View>
            <Image source={{uri:imageUrl}} style={{width: 80, height: 80}}/>
            <View style={{flex: 3.5, padding: 10}}>
                <Text style={styles.textWhite} numberOfLines={1}>{title}</Text>
                <Text style={styles.textGrey} numberOfLines={1}>{artist}</Text>
            </View>
            <View style={{flex: 2}}>
                <Text style={styles.textWhite} numberOfLines={1}>{albumName}</Text>
            </View>
            <View style={{flex: 1, paddingHorizontal: 5, alignItems: 'center'}}>
                <Text style={styles.textWhite}> {newDur}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Themes.colors.background,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row',
        height: 100,
        width: windowWidth
    },
    textGrey: {
        fontSize: 14,
        color: Themes.colors.gray,
    },
    textWhite: {
        fontSize: 14,
        color: Themes.colors.white,
    }
})

