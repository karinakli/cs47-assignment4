import {View, Text} from 'react-native'
import {WebView} from 'react-native-webview'

export default function SoundPreviewScreen({navigation, route}) {
    const previewUrl = route.params.previewUrl
    return (
        <WebView source={{ uri: previewUrl }} />
    );
  }