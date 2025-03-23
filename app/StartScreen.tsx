/* eslint-disable react-native/no-inline-styles */
// @ts-nocheck
import { useRouter } from 'expo-router';
import React from 'react';
import { TouchableOpacity,TextInput, View, Text, ImageBackground, StyleSheet } from 'react-native';
import { Image } from 'react-native';
import historyIcon from '@/assets/icons/history.png';
import { fetchPathHistory } from '@/assets/utils/databaseC';

const backgroundImg = require('@/assets/images/background1.png');

const StartScreen = () => {
  const router = useRouter();

  const handleNavigationPath = () => {
    router.push("/HomeScreen");
  };


  const handleChangeLanguage = () => {
    // Revenir à l'écran précédent
    router.back();
  
    // Rediriger vers l'écran en arabe après
    router.push({
      pathname: '/StartScreenAR',
      
    });
  };
  const handleNavigationAllAgents = () => {
    router.push("/AllAgentsScreen");
  };
  
  const handleNavigationNtab = () => {
    router.push("/AllNTableauScreen");
  };
  return (
    <ImageBackground source={backgroundImg} resizeMode="cover" style={styles.background}>
       <View style={styles.iconContainer}>
    <TouchableOpacity onPress={() => router.push({ pathname: '/HistoryScreen'})}>
      <Image source={historyIcon} style={styles.icon} />
    </TouchableOpacity>
  </View>
      <View style={styles.container}>
        {/* Conteneur des boutons */}
        <View style={styles.buttonWrapper}>
         
          <TouchableOpacity style={styles.button} onPress={handleNavigationPath}>
            <Text style={styles.buttonText}>Pathologies</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleNavigationAllAgents}>
            <Text style={styles.buttonText}>Agents pathogènes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleNavigationNtab}>
            <Text style={styles.buttonText}>N° de Tableau</Text>
          </TouchableOpacity>
          


          {

            
          }
                   
        </View>
      </View>
      <TouchableOpacity
          onPress={handleChangeLanguage}
          style={{ position: 'absolute', bottom: 20,  alignSelf: 'center'}}
        >
          <Text style={{ color: 'white', fontSize: 16, textDecorationLine: 'underline', fontWeight: 'bold' }}>
          Voir en arabe
          </Text>
        </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },searchInput: {
    marginTop: 15, 
    backgroundColor: 'white',
    width: '100%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  buttonWrapper: {
    width: '70%', 
    gap: 15, 
  },
  button: {
    width: '100%',
    paddingVertical: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#1D304C',
    
    fontSize: 20,
   
  },
  iconContainer: {
    position: 'absolute',
    top: 20, // Ajuste selon ton besoin
    right: 20, // Position en haut à droite
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: 'white', // Facultatif si tu veux changer la couleur
  },
});

export default StartScreen;
