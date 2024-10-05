/* eslint-disable react-native/no-inline-styles */
// @ts-nocheck
import {Button, Center, Image} from 'native-base';
import React from 'react';
import {ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import { LanguageContext } from '../utils/LanguageContext';

const image = require('../assets/images/background1.png');
//const logo1 = require('../assets/images/Picture2.png');
//const logo2 = require('../assets/images/Picture3.png');

const StartScreen = () => {
  const navigation = useNavigation();

  const handleNavigation1 = () => {
    navigation.navigate('Home');
  };

  const handleNavigation2 = () => {
    navigation.navigate('AllAgents');
  };
  const handleNavigation3 = () => {
    navigation.navigate('NTableau');
  };

  return (
   
    <ImageBackground source={image} resizeMode="cover" style={{flex: 1}}>
  
      <Center flex={1}>
        <Button
          style={{width: 200}}
          onPress={handleNavigation1}
          mt={5}
          ml={5}
          bg="primary.600">
          Pathologies 
        </Button>
        <Button
          style={{width: 200}}
          onPress={handleNavigation2}
          mt={5}
          ml={5}
          bg="primary.600">
          Agents pathogènes 
        </Button>
        <Button
          style={{width: 200}}
          onPress={handleNavigation3}
          mt={5}
          ml={5}
          bg="primary.600">
          N° de Tableau
        </Button>
      </Center>
    </ImageBackground>
    
  );
};

export default StartScreen;
