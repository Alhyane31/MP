import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useRouter } from "expo-router";
import { ImageBackground, StyleSheet, TouchableOpacity, View, Text } from 'react-native';


const backgroundImg = require('@/assets/images/background1.png');

const construction = () => {
 


  return (
   
      <ImageBackground source={backgroundImg} style={styles.background}>
        <View style={styles.center}>
          <Text style={[styles.text, { marginBottom: 20, textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 16 }]}>
            Application en Construction </Text>
          
          <Text style={[styles.copyrightText, { color: 'white', fontWeight: 'bold' }]}>
            © 2025 Tous droits réservés.
          </Text>
        </View>
      </ImageBackground>
   
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

export default construction;
