/* eslint-disable react-native/no-inline-styles */
// @ts-nocheck
import { useNavigation } from '@react-navigation/native';
import { Button, Center, Image, Text } from 'native-base';
import React, { useState, useEffect } from 'react';
import { Animated, ImageBackground } from 'react-native';

const logo1 = require('../assets/images/Picture2.png');
const logo2 = require('../assets/images/Picture3.png');
const backgroundImg = require('../assets/images/background.png');

const IntroScreen = () => {
  const navigation = useNavigation();
  const [textVisible, setTextVisible] = useState(false);
  const fadeAnim = new Animated.Value(0);

  const handleNavigation = () => {
    navigation.navigate('Start');
  };

  const handleArabicNavigation = () => {
    // Add the code to navigate to the Arabic version of the application
    // For example, you can navigate to a different screen or route that displays content in Arabic.
  };

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000, // Adjust animation duration
      useNativeDriver: true,
    }).start(() => {
      setTextVisible(true);
    });
  }, [fadeAnim]);

  return (
    <ImageBackground source={backgroundImg} style={{ flex: 1 }}>
      <Center flex={1} backgroundColor="transparent">
        <Image
          source={logo2}
          alt="logo2"
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
            width: 50,
            height: 50,
          }}
        />
        {textVisible && (
          <Animated.View
            style={{
              opacity: fadeAnim,
              width: '70%',
              marginBottom: 30,
              transform: [
                { translateY: fadeAnim.interpolate({ inputRange: [0, 1], outputRange: [20, 0] }) },
              ],
            }}>
            <Text
              bold
              fontSize="md"
             
              style={{ textAlign: 'justify' }}>
              Cette application vous propose les dispositifs réglementaires concernant
              les maladies professionnelles extraits du Bulletin Officiel marocain N°
              160-14 du 19 Rabii I 1435 ( 21 janvier 2014)
            </Text>
          </Animated.View>
        )}
        {textVisible && (
          <Animated.View
            style={{
              opacity: fadeAnim,
              width: '70%',
              marginBottom: 60,
              transform: [
                { translateY: fadeAnim.interpolate({ inputRange: [0, 1], outputRange: [20, 0] }) },
              ],
            }}>
            <Text
              bold
              fontSize="md"
              style={{ textAlign: 'justify' }}>
              هذا التطبيق يقدم لك الأنظمة التنظيمية المتعلقة بأمراض العمل من مرسوم المغربي
              الرسمي رقم 160-14 بتاريخ 19 ربيع الأول 1435 هـ (21 يناير 2014)
            </Text>
          
      <Button onPress={handleNavigation} mt={5} bg="primary.600">
          Accéder à l'application
        </Button>
        
        <Button onPress={handleArabicNavigation} mt={5} bg="primary.600">
            الوصول إلى التطبيق باللغة العربية
          </Button>
        </Animated.View>
        )}
      </Center>
    </ImageBackground>
  );
};

export default IntroScreen;
