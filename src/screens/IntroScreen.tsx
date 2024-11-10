import { useNavigation } from '@react-navigation/native';
import { Button, Center, Text } from 'native-base';
import React, { useState, useEffect } from 'react';
import { Animated, ImageBackground, StyleSheet } from 'react-native';
import { setupDatabase, fetchPathTypes } from "../utils/database"; // Ensure named imports

const backgroundImg = require('../assets/images/background1.png');

const IntroScreen = () => {
  const navigation = useNavigation();
  const [textVisible, setTextVisible] = useState(true);
  const [fadeAnim] = useState(new Animated.Value(0));
  const [pathTypes, setPathTypes] = useState([]); // State to hold fetched data

  // Handle navigation to the French screen
  const handleNavigation = () => {
    navigation.navigate("Start");
  };

  // Handle navigation to the Arabic screen
  const handleArabicNavigation = () => {
    navigation.navigate('StartAR');
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

  // Initialize database and fetch data
  useEffect(() => {
    const initializeDatabase = async () => {
      try {
        await setupDatabase();
        console.log("Database setup ");
        
        
      } catch (error) {
        console.error("Database setup or fetch failed:", error);
      }
    };

    initializeDatabase();
  }, []);

  return (
    <ImageBackground source={backgroundImg} style={styles.background}>
      <Center flex={1} backgroundColor="transparent">
        {textVisible && (
          <Animated.View
            style={[
              styles.animatedView,
              {
                opacity: fadeAnim,
                transform: [
                  { translateY: fadeAnim.interpolate({ inputRange: [0, 1], outputRange: [20, 0] }) },
                ],
              },
            ]}
          >
            <Text bold fontSize="md" style={styles.text}>
              Cette application vous propose les dispositifs réglementaires concernant
              les maladies professionnelles extraits du Bulletin Officiel marocain N°
              160-14 du 19 Rabii I 1435 (21 janvier 2014)
            </Text>
            <Text bold fontSize="md" style={[styles.text, { textAlign: 'right' }]}>
            هذا التطبيق يقدم لك الأنظمة التنظيمية المتعلقة بأمراض العمل من مرسوم المغربي 
            الرسمي رقم 160-14 بتاريخ 19 ربيع الأول 1435 هـ (21 يناير 2014)
            </Text>
            <Button onPress={handleNavigation} mt={5} bg="primary.600">
              Accéder à l'application en français
            </Button>
            <Button onPress={handleArabicNavigation} mt={5} bg="primary.600">
              الوصول إلى التطبيق باللغة العربية
            </Button>
          </Animated.View>
        )}
        {pathTypes.length > 0 && (
          <Animated.View style={[styles.animatedView, { opacity: fadeAnim }]}>
            <Text bold fontSize="md" style={styles.text}>
              Path Types:
            </Text>
            
          </Animated.View>
        )}
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
});

export default IntroScreen;
