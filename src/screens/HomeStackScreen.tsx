import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import LogoPulseScreen from './LogoPulseScreen'; // Import the new screen
import IntroScreen from './IntroScreen';

const Stack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator initialRouteName="LogoPulse" >
          <Stack.Screen name="LogoPulse" component={LogoPulseScreen} />
          <Stack.Screen name="Intro" component={IntroScreen} />
          {/* Add more screens if needed */}
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default HomeStackScreen;



