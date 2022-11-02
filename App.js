import 'react-native-gesture-handler';
import { StyleSheet, SafeAreaView, Text, Pressable, Image, FlatList, View } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import SpotifyAuthButton from "./utils/SpotifyAuthButton";
import TopTracks from "./utils/TopTracks";

import {WebView} from 'react-native-webview'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SongDetailsScreen from './screens/SongDetailsScreen';
import SoundPreviewScreen from './screens/SoundPreviewScreen';

function HomeScreen({navigation}) {
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();
  let contentDisplayed = null;

  if(!token) {
    contentDisplayed = <SpotifyAuthButton getSpotifyAuth={getSpotifyAuth}/>
  } else {
    // console.log(tracks)
    contentDisplayed = <TopTracks tracks={tracks} navigation={navigation}/>
  }
  return (
    <SafeAreaView style={styles.container}>
      {contentDisplayed}
    </SafeAreaView>
  );
}

const Stack = createStackNavigator();

export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen 
          name="SongDetails" component={SongDetailsScreen} 
          options={{
            title: "Song Details", 
            headerStyle: {
              backgroundColor: Themes.colors.background
            },
            headerTintColor: Themes.colors.white,
            }}/>
        <Stack.Screen name="SoundPreview" component={SoundPreviewScreen}
          options={{
          title: "Song Preview", 
          headerStyle: {
            backgroundColor: Themes.colors.background
          },
          headerTintColor: Themes.colors.white,
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
