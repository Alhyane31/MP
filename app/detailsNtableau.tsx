import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, ImageBackground, StyleSheet,Modal,
  SafeAreaView, } from 'react-native';
  import { WebView } from 'react-native-webview';
import { useLocalSearchParams } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import * as FileSystem from 'expo-file-system';
import Pdf from 'react-native-pdf';
import { fetchPathologies,fetchNTABAgents } from '@/assets/utils/databaseC';

const image = require('../assets/images/background.png');
//const db = openDatabase();



const DetailsNtableau = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const { NTAB } = useLocalSearchParams();
  const [pathologies, setPathologies] = useState<any>([]);
  const [agents, setAgents] = useState<any>([]);

  useEffect(() => {
    const loadData = async () => {
      
      setPathologies(await fetchPathologies(NTAB.toString()));
      setAgents(await fetchNTABAgents(NTAB.toString()));
    };
    loadData();
  }, [NTAB]);

  const handleClose = () => {
    setSelectedFile(null);
  };

 // const url = `https://raw.githubusercontent.com/Alhyane31/MP/fcdf8a7e8c79e527dcbc2d0cbc688e2fc5ec11fd/FilesMP/FR/${selectedFile}.pdf`;

  return (
    <ImageBackground source={image} resizeMode="cover" style={{ flex: 1, padding: 15 }}>
      <View style={{ backgroundColor: 'white', padding: 15, marginBottom: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ fontSize: 16 }}>N.Tableau : {NTAB}</Text>
        <TouchableOpacity onPress={() => setSelectedFile(NTAB.replace(/\./g, '-'))}>
          <FontAwesome name="file-pdf-o" size={25} color="black" />
        </TouchableOpacity>
      </View>

      <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>Agents pathogènes :</Text>
      <FlatList
        data={agents}
        keyExtractor={(item) => item.LibelleFR}
        renderItem={({ item }) => (
          <View style={{ backgroundColor: 'white', padding: 15, marginBottom: 10 }}>
            <Text>{item.LibelleFR}</Text>
          </View>
        )}
      />

      <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 ,marginTop : 10}}>Pathologies :</Text>
      <FlatList
        data={pathologies}
        keyExtractor={(item) => item.LibelleFR}
        renderItem={({ item }) => (
          <View style={{ backgroundColor: 'white', padding: 15, marginBottom: 10 }}>
            <Text>{item.LibelleFR}</Text>
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

export default DetailsNtableau;
