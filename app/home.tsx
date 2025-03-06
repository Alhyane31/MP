import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useRouter } from "expo-router";
import { ImageBackground, StyleSheet, TouchableOpacity, View, Text } from 'react-native';


const backgroundImg = require('@/assets/images/background1.png');

const home = () => {
 
  const router = useRouter();
  // Gérer la navigation lorsque l'écran est touché
  const handleScreenTouch = () => {
    router.push("/construction");
//router.push("/explore");
  };



  return (
    <TouchableOpacity style={{ flex: 1 }} onPress={handleScreenTouch} activeOpacity={1}>
      <ImageBackground source={backgroundImg} style={styles.background}>
        <View style={styles.center}>
          <Text style={[styles.text, { marginBottom: 20, textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 16 }]}>
            Cette application vous propose les dispositifs réglementaires concernant
            les maladies professionnelles extraits du Bulletin Officiel marocain N° 160-14 du 19 Rabii I 1435 (21 janvier 2014)
          </Text>
          <Text style={[styles.text, { textAlign: 'right', color: 'white', fontWeight: 'bold', fontSize: 16 }]}>
            هذا التطبيق يقدم لك الأنظمة التنظيمية المتعلقة بأمراض العمل من مرسوم المغربي 
            الرسمي رقم 160-14 بتاريخ 19 ربيع الأول 1435 هـ (21 يناير 2014)
          </Text>
          <Text style={[styles.copyrightText, { color: 'white', fontWeight: 'bold' }]}>
            © 2025 Tous droits réservés.
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    width: '85%',
    textAlign: 'justify',
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

export default home;
