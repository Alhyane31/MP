
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
        <Text style={[styles.text, { 
  
   // Centrer le texte
   
  color: 'white', 
  fontWeight: 'bold', 
  fontSize: 14,
 marginTop: 90, // Décaler vers le bas
}]}>
  Nous tenons à exprimer notre gratitude envers toutes les personnes ayant contribué à la réalisation de ce projet.{"\n\n"}

  🚀 <Text style={{ textDecorationLine: 'underline' }}>Porteuse de projet :</Text>{"\n"}
  <Text style={{ textAlign: 'left',fontSize: 14 }}>{"\t"} {"\t"} {"\t"} {"\t"} {"\t"} {"\t"} Fadwa Darid</Text>{"\n\n"}

  👨‍💻 <Text style={{ textDecorationLine: 'underline' }}>Développeurs :</Text>{"\n"}
  <Text style={{ fontSize: 14 }}>
  {"\t"} {"\t"} {"\t"} {"\t"} {"\t"} {"\t"} Ahmad Alhyane{"\n"}
  {"\t"} {"\t"} {"\t"} {"\t"} {"\t"} {"\t"} Reda Soulami{"\n"}
  {"\t"} {"\t"} {"\t"} {"\t"} {"\t"} {"\t"} Abdelillah Badris{"\n"}
  {"\t"} {"\t"} {"\t"} {"\t"} {"\t"} {"\t"} Hamza Manssouri
  </Text>{"\n\n"}

  🎓 <Text style={{ textDecorationLine: 'underline' }}>Encadrants :</Text>{"\n"}
  <Text style={{ textAlign: 'center',fontSize: 14 }}>
  {"\t"} {"\t"} {"\t"} {"\t"} {"\t"} {"\t"} Abdeljalil Kholti{"\n"}
  {"\t"} {"\t"} {"\t"} {"\t"} {"\t"} {"\t"} Loubna Tahri
  </Text>{"\n\n"}

  🏛️ <Text style={{ textDecorationLine: 'underline' }}>Sous la tutelle de : {"\n"}Moroccan Occupational Health Association (MOHA)</Text>{"\n\n"}

  Merci à tous pour votre engagement et votre précieuse contribution à la réussite de ce projet. 🙌
</Text>

         
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
