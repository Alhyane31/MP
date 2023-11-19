/* eslint-disable react-native/no-inline-styles */
// @ts-nocheck
import {Button, Center, Image} from 'native-base';
import React from 'react';
import {ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const image = require('../assets/images/background.png');
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
      <Image
       // source={logo1}
        alt="logo1"
        style={{
          position: 'absolute',
          top: 20,
          left: 20,
          width: 100,
          height: 50,
        }}
      />
      <Image
        //  source={logo2}
      alt="logo2"
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
          width: 50,
          height: 50,
        }}
      />
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
