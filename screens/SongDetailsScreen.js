import {View, Text} from 'react-native'
import { WebView } from 'react-native-webview';

export default function SongDetailsScreen({navigation, route}) {
    const detailsUrl = route.params.detailsUrl
    console.log(detailsUrl)
    return (
        <WebView source={{ uri: detailsUrl }} />
    );
  }