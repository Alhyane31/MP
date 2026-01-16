import { useRouter } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Text, Animated, ImageBackground, StyleSheet } from 'react-native';

const backgroundImg = require('../assets/images/background1.png');

const LangChoice = () => {
  const [textVisible, setTextVisible] = useState(true);
  const [fadeAnim] = useState(new Animated.Value(0));
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/StartScreen");
  };

  const handleArabicNavigation = () => {
    router.push("/StartScreenAR");
  };

  // Animation du texte
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
      <View style={styles.container}>
        {textVisible && (
          <Animated.View style={[styles.animatedView, { opacity: fadeAnim }]}>
            <Text style={styles.text}>Choisissez la langue / اختر اللغة</Text>

            {/* Conteneur des boutons */}
            <View style={styles.buttonWrapper}>
              <TouchableOpacity style={styles.button} onPress={handleNavigation}>
                <Text style={styles.buttonText}>FRANÇAIS</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleArabicNavigation}>
                <Text style={styles.buttonText}>العربية</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        )}

        <Text style={styles.copyrightText}> Copyright © 2025 FD. Tous droits réservés. </Text>
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
  animatedView: {
    alignItems: 'center',
    width: '80%',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 20,
  },
  buttonWrapper: {
    width: '100%', 
    gap: 15, 
  },
  button: {
    width: '100%',
    paddingVertical: 12,
    backgroundColor: '#1D304C',
    borderRadius: 80,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  copyrightText: {
    position: 'absolute',
    bottom: 20,
    textAlign: 'center',
    width: '100%',
    color: 'white',
    fontSize: 12,
  },
});

export default LangChoice;
