
import React, { useEffect } from 'react';
import { useRouter,Link } from "expo-router";
import { ImageBackground, StyleSheet, TouchableOpacity, View, Text } from 'react-native';


const backgroundImg = require('@/assets/images/background1.png');

const Credits = () => {
 
  const router = useRouter();
  // Gérer la navigation lorsque l'écran est touché
  const handleScreenTouch = () => {
   // router.push("/construction");
router.push("/home");
  };



  return (
    <TouchableOpacity style={{ flex: 1 }} onPress={handleScreenTouch} activeOpacity={1}>
      <ImageBackground source={backgroundImg} style={styles.background}>
        <View style={styles.center}>
       
 
  <Text style={[styles.text, { textAlign: 'left', textDecorationLine: 'underline' }]}>{"\n"}{"\n"}{"\n"}{"\n"}Elaboré par :{"\n"}</Text>
 
  <Text style={[styles.text, { left :'30%',top: 10,bottom : 20,textAlign: 'left', }]}>
 
  Dr. Fadwa Darid{"\n"}
  Pr. Loubna Tahri{"\n"}
  Pr. Abdeljalil El Kholti{"\n"}{"\n\n"}
  </Text>

  <Text style={[styles.text2, {textAlign: 'center' }]}>Unité de Santé au Travail</Text>
 <Text style={[styles.text2, {textAlign: 'center' }]}>Faculté de Médecine et de Pharmacie</Text>  
  <Text style={[styles.text2, {textAlign: 'center' }]}>Université Hassan II de Casablanca{"\n"}</Text>  
 
 
 
  
 
  

         
        </View><Text style={[styles.copyrightText, { color: 'white', fontWeight: 'bold' }]}>
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
    justifyContent: 'center',
    alignItems: 'center',
   
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
  copyrightText: {
    position: 'absolute',
    bottom: 0,
    textAlign: 'center',
    width: '95%',
    fontSize: 12,
    paddingBottom:10,
  },
});

export default Credits;
