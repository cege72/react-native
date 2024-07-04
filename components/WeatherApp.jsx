// WeatherApp.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, PermissionsAndroid } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';

const WeatherApp = () => {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // Demande d'autorisation de localisation
    const requestLocationPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // Obtenir la position actuelle
          Geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              setLocation({ latitude, longitude });
              fetchWeather(latitude, longitude);
            },
            (error) => console.error(error),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
          );
        } else {
          console.log('Autorisation de localisation refusée');
        }
      } catch (err) {
        console.error(err);
      }
    };

    requestLocationPermission();
  }, []);

  const fetchWeather = async (lat, lon) => {
    try {
      const apiKey = 'VOTRE_CLÉ_API_OPENWEATHERMAP';
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
      );
      setWeather(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des données météo :', error);
    }
  };

  return (
    <View style={styles.container}>
      {weather ? (
        <View>
          <Text style={styles.location}>
            {weather.name}, {weather.sys.country}
          </Text>
          <Text style={styles.temperature}>{weather.main.temp}°C</Text>
          <Text style={styles.description}>{weather.weather[0].description}</Text>
        </View>
      ) : (
        <Text>Chargement des données météo...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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

export default WeatherApp;