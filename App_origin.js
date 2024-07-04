import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import ImageViewer from './components/ImageViewer';

//import {Button}  from './components/Button  ';
//import {Goals}  from './Goals.jsx';

const PlaceholderImage = require('./assets/background-image.png');

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'red' }}>      App.js</Text>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
    <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'red',
    fontSize: '12',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
