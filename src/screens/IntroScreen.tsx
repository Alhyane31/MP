import { useNavigation } from '@react-navigation/native';
import { Center, Text } from 'native-base';
import React, { useEffect } from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { setupDatabase } from "../utils/database"; 

const backgroundImg = require('../assets/images/background1.png');

const IntroScreen = () => {
  const navigation = useNavigation();

  // Gérer la navigation lorsque l'écran est touché
  const handleScreenTouch = () => {
    navigation.navigate('LangChoice');
  };

  // Initialiser la base de données
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
    <TouchableOpacity style={{ flex: 1 }} onPress={handleScreenTouch} activeOpacity={1}>
      <ImageBackground source={backgroundImg} style={styles.background}>
        <Center flex={1} backgroundColor="transparent">
          <Text bold fontSize="md" style={[styles.text, { color: 'white', marginBottom: 20, textAlign: 'center' }]}>
            Cette application vous propose les dispositifs réglementaires concernant
            les maladies professionnelles extraits du Bulletin Officiel marocain N°
            160-14 du 19 Rabii I 1435 (21 janvier 2014)
          </Text>

          <Text  bold fontSize="md" style={[styles.text, { color: 'white', textAlign: 'right', textAlign: 'center' }]}>
            هذا التطبيق يقدم لك الأنظمة التنظيمية المتعلقة بأمراض العمل من مرسوم المغربي 
            الرسمي رقم 160-14 بتاريخ 19 ربيع الأول 1435 هـ (21 يناير 2014)
          </Text>
        
          <Text bold color="white" style={styles.copyrightText}>
            © 2024 Tous droits réservés.
          </Text>
        </Center>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  text: {
    width: '85%',
    textAlign: 'JUSTIFY', // Center text horizontally
  },
  copyrightText: {
    position: 'absolute',
    bottom: 0,
    textAlign: 'center',
    width: '95%',
    fontSize: 12,
    paddingBottom: 10,
  },
});

export default IntroScreen;
