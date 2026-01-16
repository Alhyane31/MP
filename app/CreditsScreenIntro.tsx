import React from 'react';
import { useRouter } from "expo-router";
import { ImageBackground, StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';

const backgroundImg = require('@/assets/images/background1.png');
const logo1 = require('@/assets/images/logo1.jpeg');
const logo2 = require('@/assets/images/logo2.jpeg');

const Credits = () => {
  const router = useRouter();

  const handleScreenTouch = () => {
    router.push("/home");
  };

  return (
    <TouchableOpacity style={{ flex: 1 }} onPress={handleScreenTouch} activeOpacity={1}>
      <ImageBackground source={backgroundImg} style={styles.background}>
        <View style={styles.center}>
          <Text style={[styles.text, { textAlign: 'left', textDecorationLine: 'underline' }]}>
          Élaboré par :{"\n"}
          </Text>

          <Text style={[styles.text, { left: '30%', top: 10, bottom: 20, textAlign: 'left' }]}>
            Dr. Fadwa Darid{"\n"}
            
          </Text>

          
          

          {/* Logos */}
        
        </View>

        <Text style={[styles.copyrightText, { color: 'white', fontWeight: 'bold' }]}>
          © 2025 Tous droits réservés.
        </Text>
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
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: '100%',
  },
  text: {
    width: '95%',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  text2: {
    width: '95%',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    
    marginTop: "30%",
    width: '100%',height: '10%',
    backgroundColor : '#f7f7f7' 
  },
  logo: {
    width: "30%",
    height: '70%',
    marginHorizontal: 10,top:'15%'
  },
  logo2: {
    width: "30%",
    height: '100%',
    marginHorizontal: 10,
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

export default Credits;
