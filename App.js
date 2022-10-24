import { StyleSheet, SafeAreaView, Text, Pressable, Image, FlatList, View } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import Song from './utils/Song'
import SpotifyAuthButton from "./utils/SpotifyAuthButton";
import TopTracks from "./utils/TopTracks";

export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();
  let contentDisplayed = null;
  

  if(!token) {
    contentDisplayed = <SpotifyAuthButton getSpotifyAuth={getSpotifyAuth}/>
  } else {
    contentDisplayed = <TopTracks tracks={tracks}/>
    
  }
  return (
    <SafeAreaView style={styles.container}>
      {contentDisplayed}
    </SafeAreaView>
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
