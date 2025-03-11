/* eslint-disable react-native/no-inline-styles */
// @ts-nocheck
import { useRouter } from 'expo-router';
import React from 'react';
import { TouchableOpacity, View, Text, ImageBackground, StyleSheet } from 'react-native';

const backgroundImg = require('@/assets/images/background1.png');

const StartScreen = () => {
  const router = useRouter();

  const handleNavigationPath = () => {
    router.push("/HomeScreen");
  };
  const handleNavigation = () => {
    router.push("/construction");
  };
  return (
    <ImageBackground source={backgroundImg} resizeMode="cover" style={styles.background}>
      <View style={styles.container}>
        {/* Conteneur des boutons */}
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button} onPress={handleNavigationPath}>
            <Text style={styles.buttonText}>Pathologies</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleNavigation}>
            <Text style={styles.buttonText}>Agents pathogènes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleNavigation}>
            <Text style={styles.buttonText}>N° de Tableau</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  buttonWrapper: {
    width: '70%', 
    gap: 15, 
  },
  button: {
    width: '100%',
    paddingVertical: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#1D304C',
    
    fontSize: 20,
   
  },
});

export default StartScreen;
