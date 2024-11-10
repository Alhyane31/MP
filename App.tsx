import React from 'react';
import { Text, View } from 'native-base';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreenAR from 'screens/HomeScreenAR';
import HomeScreen from 'screens/HomeScreen';

import AgentsScreen from 'screens/AgentsScreen';
import AllAgentsScreen from 'screens/AllAgentsScreen';
import AllAgentsScreenAR from 'screens/AllAgentsScreenAR';
import AgentsScreenAR from 'screens/AgentsScreenAR';
//import AllAgentsScreenAR from 'screens/AllAgentsScreenAR';
import NTableauScreen from 'screens/NTableauScreen';

import NTableauScreenAR from 'screens/NTableauScreenAR';
import DetailsAgent from 'screens/DetailsAgent';
import DetailsAgentAR from 'screens/DetailsAgentAR';
import DetailsNtableau from 'screens/DetailsNtableau';
import DetailsNtableauAR from 'screens/DetailsNtableauAR';
import StartScreen from 'screens/StartScreen';
import StartScreenAR from 'screens/StartScreenAR';
import IntroScreen from 'screens/IntroScreen';
import LogoPulseScreen from 'screens/LogoPulseScreen';
import Splash from 'screens/Splash';
const Stack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator initialRouteName="Intro" >
    <Stack.Screen name="Intro" component={IntroScreen} options={{
          
          headerShown: false,
         
        }}/>
      {/* <Stack.Screen
        name="Intro"
        component={IntroScreen}
        options={{
          animation: 'fade',
          headerShown: false,
          statusBarColor: '#0891b2',
        }}
      /> */}
      <Stack.Screen
        name="Start"
        component={StartScreen}
        options={{
          animation: 'fade',
          headerShown: false,
          statusBarColor: '#0891b2',
        }}
      />
      <Stack.Screen
        name="StartAR"
        component={StartScreenAR}
        options={{
          animation: 'fade',
          headerShown: false,
          statusBarColor: '#0891b2',
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          animation: 'fade',
          title: 'Pathologies',
          headerTitleAlign : 'center',
          headerShown: true,
          statusBarColor: '#0891b2',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#0891b2',
          },
        }}
      />
       <Stack.Screen
        name="HomeAR"
        component={HomeScreenAR}
        options={{
          animation: 'fade',
          title: 'الأمراض',
          headerTitleAlign : 'center',
          headerShown: true,
          statusBarColor: '#0891b2',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#0891b2',
          },
        }}
      />
      <Stack.Screen
        name="Agents"
        component={AgentsScreen}
        options={{
          animation: 'fade',
          headerShown: true,
          headerTitleAlign : 'center',
          statusBarColor: '#0891b2',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#0891b2',
          },
        }}
      />
      <Stack.Screen
        name="AgentsAR"
        component={AgentsScreenAR}
        options={{
          animation: 'fade',
          headerShown: true,
          headerTitleAlign : 'center',
          title : 'مسببات الأمراض',
          statusBarColor: '#0891b2',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#0891b2',
          },
        }}
      />
      <Stack.Screen
        name="AllAgents"
        component={AllAgentsScreen}
        options={{
          animation: 'fade',
          headerShown: true,
          headerShadowVisible: false,
          statusBarColor: '#0891b2',
          headerTitleAlign : 'center',

          title: 'Tous les Agents',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#0891b2',
          },
        }}
      />
      <Stack.Screen
        name="AllAgentsAR"
        component={AllAgentsScreenAR}
        options={{
          animation: 'fade',
          headerShown: true,
          headerShadowVisible: false,
          statusBarColor: '#0891b2',
          headerTitleAlign : 'center',
          title : 'مسببات الأمراض',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#0891b2',
          },
        }}
      />
      <Stack.Screen
        name="NTableau"
        component={NTableauScreen}
        options={{
          animation: 'fade',
          headerShown: true,
          headerShadowVisible: false,
          statusBarColor: '#0891b2',
          headerTitleAlign : 'center',
          title: 'N° Tableau',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#0891b2',
          },
        }} />
        <Stack.Screen
        name="NTableauAR"
        component={NTableauScreenAR}
        options={{
          animation: 'fade',
          headerShown: true,
          headerShadowVisible: false,
          statusBarColor: '#0891b2',
          headerTitleAlign : 'center',
          title: 'رقم الجدول',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#0891b2',
          },
        }}
      />
      <Stack.Screen
        name="DetailsAgent"
        component={DetailsAgent}
        options={{
          animation: 'fade',
          headerTitleAlign : 'center',
          title: 'Details Agent',
          headerShown: true,
          statusBarColor: '#0891b2',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#0891b2',
          },
        }}
      />
      <Stack.Screen
        name="DetailsAgentAR"
        component={DetailsAgentAR}
        options={{
          animation: 'fade',
          headerTitleAlign : 'center',
          title: 'تفاصيل مسبب المرض',
          headerShown: true,
          statusBarColor: '#0891b2',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#0891b2',
          },
        }}
      />
       <Stack.Screen
        name="DetailsNtableau"
        component={DetailsNtableau}
        options={{
          animation: 'fade',
          title: 'Details N° Tableau',
          headerShown: true,
          statusBarColor: '#0891b2',
          headerTitleAlign : 'center',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#0891b2',
          },
        }}
      />
      <Stack.Screen
        name="DetailsNtableauAR"
        component={DetailsNtableauAR}
        options={{
          animation: 'fade',
          title: 'تفاصيل رقم الجدول',
          headerTitleAlign : 'center',
          headerShown: true,
          statusBarColor: '#0891b2',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#0891b2',
          },
        }}
      />
    </Stack.Navigator>
    
  );
}

function App(): JSX.Element {
  const [isLoading,setIsLoading]=React.useState<boolean>(true);
  return (
    isLoading?
      <NavigationContainer>
        <NativeBaseProvider>

<Splash setIsLoading={setIsLoading}/>
          {/* <HomeStackScreen /> */}
        </NativeBaseProvider>
      </NavigationContainer>:
      <NavigationContainer>
        <NativeBaseProvider>
           <HomeStackScreen />
        </NativeBaseProvider>
      </NavigationContainer>
  );
}

export default App;
