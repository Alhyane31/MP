/* eslint-disable react-native/no-inline-styles */
// @ts-nocheck
import {Button, Center, Image} from 'native-base';
import React from 'react';
import {ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';


const image = require('../assets/images/background1.png');
//const logo1 = require('../assets/images/Picture2.png');
//const logo2 = require('../assets/images/Picture3.png');

const StartScreen = () => {
  const navigation = useNavigation();

  const handleNavigation1 = () => {
    navigation.navigate('HomeAR');
  };

  const handleNavigation2 = () => {
    navigation.navigate('AllAgentsAR');
  };
  const handleNavigation3 = () => {
    navigation.navigate('NTableauAR');
  };

  return (
   
    <ImageBackground source={image} resizeMode="cover" style={{flex: 1}}>
{/* <Image
       // source={logo1}
        alt="logo1"
        style={{
          position: 'absolute',
          top: 20,
          left: 20,
          width: 100,
          height: 50,
        }} 
      />*/}
      {/* <Image
        //  source={logo2}
      alt="logo2"
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
          width: 50,
          height: 50,
        }}
      /> */}
      <Center flex={1}>
        <Button
          style={{width: 220, height: 50}} 
          onPress={handleNavigation1}
          mt={5}
          ml={5}
          bg="white"
          _text={{color: '#233b67', fontSize: 18}} >
          الأمراض 
        </Button>
        <Button
          style={{width: 220, height: 50}} 
          onPress={handleNavigation2}
          mt={5}
          ml={5}
          bg="white"
          _text={{color: '#233b67', fontSize: 18}} >
          مسببات الأمراض
        </Button>
        <Button
          style={{width: 220, height: 50}} 
          onPress={handleNavigation3}
          mt={5}
          ml={5}
          bg="white"
          _text={{color: '#233b67', fontSize: 18}} >
          رقم الجدول
        </Button>
      </Center>
    </ImageBackground>
    
  );
};

export default StartScreen;
