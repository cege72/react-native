import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
//import WeatherApp from "./components/WeatherApp";
import ImageViewer from './components/ImageViewer';
import { Button } from './components/Button';

const PlaceholderImage = require('./assets/images/background-image.png');

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'red' }}>Chargement des données ...</Text>
      <View style={styles.imageContainer}>
          <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a photo" />
        <Button label="Use this photo" />
      </View>
      { /* Commentaire */ }
    </View>  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
  },
  location: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  temperature: {
    fontSize: 18,
  },
  description: {
    fontSize: 16,
  },
});
