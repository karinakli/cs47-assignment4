import {StyleSheet, View, Text, SafeAreaView, FlatList, Image} from 'react-native';
import { Themes } from '../assets/Themes';
import Song from './Song'

export default function TopTracks({tracks, navigation}) {
    const renderItem =({item, index}) => (
        <Song 
          id={index+1}
          imageUrl={item.album.images[0].url}
          title={item.name}
          artist={item.artists[0].name}
          albumName={item.album.name}
          duration={item.duration_ms}
          previewUrl={item.preview_url}
          detailsUrl={item.external_urls.spotify}
          navigation={navigation}
        />
      );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
            <Image style={{width: 24, height: 24, marginRight: 10}} source={require('../assets/spotify-logo.png')}/>
            <Text style={styles.headerText}>My Top Tracks</Text>
            </View>
            <FlatList
                data={tracks}
                renderItem={({item, index}) => renderItem({item, index})}
                keyExtractor={(item) => item.id}/>
        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
    header: {
        height: '10%',
        width: '100%',
        backgroundColor: Themes.colors.background,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
      headerText: {
        color: Themes.colors.white,
        fontSize: 24,
        fontWeight: 'bold'
      }
})

