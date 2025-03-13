import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Modal,
  SafeAreaView,
} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { fetchPath } from '@/assets/utils/databaseC';
import { WebView } from 'react-native-webview';

const image = require('@/assets/images/background.png');

const DetailsAgent = () => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [pathologies, setPathologies] = useState<any | any>([]);
  const { NTAB } = useLocalSearchParams<any>();
  const { LibelleFR } = useLocalSearchParams<any>();
  useEffect(() => {
    const loadPathologies = async () => {
      if (!NTAB) return;
      try {
        const results = await fetchPath(NTAB);
        setPathologies(results);
      } catch (error) {
        console.error('❌ Erreur lors du chargement des pathologies:', error);
      }
    };
    loadPathologies();
  }, [NTAB]);

  if (!NTAB) {
    return <Text>Loading...</Text>;
  }

  return (
    <ImageBackground source={image} resizeMode="cover" style={{padding: 16, flex: 1 }}>
      
        {/* Infos Agent */}
        <View
          style={{
            backgroundColor: 'white',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 16,
            marginBottom: 12,
            borderRadius: 8,
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 2,
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{LibelleFR}</Text>
            <Text style={{ marginTop: 4 }}>N.Tableau : {NTAB}</Text>
          </View>

          <TouchableOpacity onPress={() => setSelectedFile(NTAB.toString().replace(/\./g, '-'))}>
            <FontAwesome name="file-pdf-o" size={25} color="black" />
          </TouchableOpacity>
        </View>

        {/* Liste des Pathologies */}
        <Text style={{ color: 'white', fontSize: 18, marginBottom: 8 }}>Pathologies :</Text>
        <FlatList
          data={pathologies}
          keyExtractor={(item) => item.ID.toString()}
          contentContainerStyle={{ paddingBottom: 15 }}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: 'white',
                padding: 16,
                marginBottom: 12,
                borderRadius: 8,
                shadowColor: '#000',
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 2,
              }}
            >
              <Text style={{ fontSize: 16 }}>{item.LibelleFR}</Text>
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
   
    </ImageBackground>
  );
};

export default DetailsAgent;
