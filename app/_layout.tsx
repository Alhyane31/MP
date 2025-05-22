import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { SQLiteProvider } from 'expo-sqlite';
import { migrateDbIfNeeded } from '@/assets/utils/database'; 
import { Slot } from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  console.log("1");
 const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  console.log("2");
  useEffect(() => {
    if (loaded) {console.log("3");
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    console.log("4");
    return null;
  }

  return (
    
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <SQLiteProvider databaseName="MP.db" onInit={migrateDbIfNeeded}>
      <Stack  screenOptions={{
          headerStyle: { backgroundColor: '#1D304C' },
          headerTintColor: '#fff', // Couleur du texte de l'en-tête
          headerTitleAlign: 'center', // Centre le texte de l'en-tête
      
        }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="Splash" options={{ headerShown: false }} />
        <Stack.Screen name="construction" options={{ headerShown: false }} />
        <Stack.Screen name="home" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="LangChoice" options={{ headerShown: true,title : ""}} />
        <Stack.Screen name="StartScreen" options={{ headerShown: true ,title : "Accueil"}} />
        <Stack.Screen name="HomeScreen" options={{ title : "Pathologies"}} />
        <Stack.Screen name="agentsfr" options={{ title : "Agent Pathogène"}} />
        <Stack.Screen name="AllAgentsScreen" options={{ title : "Agents Pathogènes"}} />
        <Stack.Screen name="AllNTableauScreen" options={{ title : "N° Tableau"}} />
        <Stack.Screen name="detailsagent" options={{ title : "Pathologies"}} />
        <Stack.Screen name="detailsNtableau" options={{ title : "Pathologies"}} />
        <Stack.Screen name="StartScreenAR" options={{ headerShown: false ,title : "الرئيسية"}} />
        <Stack.Screen name="HomeScreenAR" options={{ title : "الأمراض"}} />
        <Stack.Screen name="agentsar" options={{ title : "العامل الممرض"}} />
        <Stack.Screen name="AllAgentsScreenAR" options={{ title : "العوامل الممرضة"}} />
        <Stack.Screen name="AllNTableauScreenAR" options={{ title : "رقم الجدول"}} />
        <Stack.Screen name="detailsagentAR" options={{ title : "الأمراض"}} />
        <Stack.Screen name="detailsNtableauAR" options={{ title : "الأمراض"}} />
        <Stack.Screen name="CreditsScreen" options={{ title: "Crédits" }} />
        <Stack.Screen name="CreditsScreenIntro" options={{ headerShown: false }} />
        <Stack.Screen name="HistoryScreen" options={{ title : "Historique des accès"}} />
        <Stack.Screen name="HistoryScreenAR" options={{ title: "سجل الوصول" }} />

        <Stack.Screen name="+not-found" />
      </Stack>
    </SQLiteProvider>
      
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
