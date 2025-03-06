import React, { useState, useEffect } from 'react';
import { Animated, Easing, ImageBackground, TouchableOpacity } from 'react-native';
import { Center, Image, Text } from 'native-base';

const logo2 = require('../assets/images/Picture3.png');
const backgroundImg = require('../assets/images/background.png');

const LogoPulseScreen = ({ navigation }: any) => {
  const [textOpacity] = useState(new Animated.Value(0)); // Start with opacity 0
  const slideTextRight = textOpacity.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 0],
  });
  const slideTextLeft = textOpacity.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 0],
  });

  useEffect(() => {
    const opacityAnimation = Animated.timing(textOpacity, {
      toValue: 1,
      duration: 1000, // Adjust animation duration
      useNativeDriver: true,
    });

    opacityAnimation.start();

    return () => opacityAnimation.stop();
  }, [textOpacity]);

  const handleNavigation = () => {
    navigation.navigate('Intro');
  };

  return (
    <TouchableOpacity onPress={handleNavigation} style={{ flex: 1 }}>
      <ImageBackground source={backgroundImg} style={{ flex: 1, alignItems: 'center' }}>
        <Image source={logo2} alt="logo2" style={{ width: 100, height: 100, marginBottom: 20, marginTop: 20 }} />
        <Animated.View
          style={{
            opacity: textOpacity,
            transform: [{ translateX: slideTextLeft }], // Apply horizontal translation
            alignSelf: 'center', // Center horizontally
          }}>
          <Text fontSize={24} fontWeight="bold" color="#2d5b7e" fontFamily="HelveticaWorld-Bold">
            Les maladies professionnelles
          </Text>
        </Animated.View>
        <Animated.View
          style={{
            opacity: textOpacity,
            transform: [{ translateX: slideTextRight }], // Apply horizontal translation
            alignSelf: 'center', // Center horizontally
          }}>
          <Text fontSize={24} fontWeight="bold" color="#2d5b7e" fontFamily="HelveticaWorld-Bold">
            الأمراض المهنية
          </Text>
        </Animated.View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default LogoPulseScreen;
