import React, { useState, useEffect } from 'react';
import { 
  View, Text, FlatList, TouchableOpacity, ImageBackground, Modal, SafeAreaView 
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';

import { fetchAgents } from '@/assets/utils/databaseC';

const image = require('@/assets/images/background.png');

const AgentsScreen = () => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [agents, setAgents] = useState([]);
  
  const { pathologyType, PathologyLabelFR } = useLocalSearchParams();
  const router = useRouter(); // Navigation avec Expo Router

  useEffect(() => {
    const loadAgents = async () => {
      if (!pathologyType) return;
  
      try {
        const data :any = await fetchAgents(Number(pathologyType));
        setAgents(data);
      } catch (error) {
        console.error('❌ Erreur lors du chargement des agents:', error);
      }
    };
  
    loadAgents();
  }, [pathologyType]);

  return (
    <ImageBackground source={image} resizeMode="cover" style={{ flex: 1, padding: 5 }}>
      <SafeAreaView style={{ flex: 1 }}>
        
       

        <View style={{ alignItems: 'center',  marginBottom: 20 , padding : 10}}>
          <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'white' }}> {PathologyLabelFR}</Text>
        </View>

        <FlatList
          data={agents}
          keyExtractor={item => item.ID.toString()}
          renderItem={({ item }) => (
            <View style={{
              backgroundColor: 'white',
              padding: 15,
              marginBottom: 15,
              borderRadius: 6,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
              elevation: 3
            }}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16, textAlign: 'justify' }}>{item.LibelleFR}</Text>
                <Text style={{ fontWeight: 'bold' }}>N.Tableau: {item.NTAB}</Text>
              </View>
              <TouchableOpacity style={{ alignSelf: 'flex-end', marginTop: 10 }} onPress={() => setSelectedFile(item.NTAB.toString().replace(/\./g, '-'))}>
                <FontAwesome name="file-pdf-o" size={25} color="black" / >
              </TouchableOpacity>
            </View>
          )}
        />

        {/* Affichage du PDF avec WebView */}
                      <Modal style={{ flex: 1 ,backgroundColor: '#233b67'}} visible={Boolean(selectedFile)} animationType="slide" onRequestClose={() => setSelectedFile(null)}>
                       <SafeAreaView style={{ flex: 1,backgroundColor: '#233b67' }}>
                        <View style={{ flex: 1 , 
                  
                  bottom: 0,
                  
                  height : "80%",
                  width: '100%',
                  borderTopLeftRadius: 5,
                  borderTopRightRadius: 5,
                  maxHeight: '100%', // Limite la hauteur pour permettre le scroll
                  padding: 0}}>
                          <WebView 
                            source={{ uri: `https://docs.google.com/gview?embedded=true&url=https://raw.githubusercontent.com/Alhyane31/MP/main/FilesMP/FR/${selectedFile}.pdf` }} 
                            style={{ flex: 1 }} 
                          />
                          <TouchableOpacity
                            onPress={() => setSelectedFile(null)}
                            style={{ padding: 15, backgroundColor: '#233b67', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Fermer</Text>
                          </TouchableOpacity>
                        </View>
                        </SafeAreaView>
                      </Modal>

      </SafeAreaView>
    </ImageBackground>
  );
};

export default AgentsScreen;
