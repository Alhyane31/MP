
import { useRouter } from 'expo-router';
import React, { useState, useEffect } from 'react';
import {Button, Text } from 'react-native';
import { Animated, ImageBackground, StyleSheet } from 'react-native';
//import { setupDatabase, fetchPathTypes } from "@assets/utils/database"; // Ensure named imports

const backgroundImg = require('../assets/images/background1.png');

const LangChoice = () => {

  const [textVisible, setTextVisible] = useState(true);
  const [fadeAnim] = useState(new Animated.Value(0));
  const [pathTypes, setPathTypes] = useState([]); // State to hold fetched data



  const router = useRouter();
  // Gérer la navigation lorsque l'écran est touché
  const handleScreenTouch = () => {
    router.push("/construction");
//router.push("/explore");
  };
  // Handle navigation to the French screen
  const handleNavigation = () => {
    router.push("/construction");
  };

  // Handle navigation to the Arabic screen
  const handleArabicNavigation = () => {
    router.push("/construction");
  };

  // Animate text appearance
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      setTextVisible(true);
    });
  }, [fadeAnim]);

 

  return (
    <ImageBackground source={backgroundImg} style={styles.background}>
      <Center flex={1} backgroundColor="transparent">
        {textVisible && (
          <Animated.View
            style={[
              
              {
                opacity: fadeAnim,
                transform: [
                  { translateY: fadeAnim.interpolate({ inputRange: [0, 1], outputRange: [20, 0] }) },
                ],
              },
            ]}
          >
            <Text bold  fontSize="lg" style={[styles.text, {color: 'white', textAlign: 'center'}]}>
              Choisissez la langue / اختر اللغة
            </Text>
            <Button  onPress={handleNavigation} mt={5} bg="rgba(29,48,76,1)" borderRadius={80}>
            <Text fontSize="lg" bold color="white">
              Français

              </Text>
            </Button>
            <Button onPress={handleArabicNavigation} mt={5} bg="rgba(29,48,76,1)" borderRadius={80}>
            <Text fontSize="lg" bold color="white">
    العربية
  </Text>
            </Button>
          </Animated.View>
        )}
       
        <Text bold color = "white" style={styles.copyrightText}>
          © 2024 Tous droits réservés.
        </Text>
      
      </Center>
      
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  animatedView: {
    width: '70%',
    marginBottom: 30,
    marginTop: 150,
  },
  text: {
    textAlign: 'justify',
  },
  copyrightText: {
    position: 'absolute',
    bottom: 0, // Met le texte en bas de l'écran
    textAlign: 'center',
    width: '100%',
 //   color: 'white', // Changez la couleur si nécessaire
    fontSize: 12,
    paddingBottom: 10, // Ajouter un peu d'espace entre le texte et le bord
  },
});

export default LangChoice;
