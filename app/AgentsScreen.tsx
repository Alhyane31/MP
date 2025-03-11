import React, { useState, useEffect } from 'react';
import { 
  View, Text, FlatList, TouchableOpacity, ImageBackground, Modal 
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import * as SQLite from 'expo-sqlite';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Pdf from 'react-native-pdf';

const image = require('../assets/images/background.png');
const db = SQLite.openDatabase('database.db');

const AgentsScreen = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [agents, setAgents] = useState([]);
  const route = useRoute();
  const { pathologyType, PathologyLabelFR } = route.params;

  useEffect(() => {
    const fetchAgents = () => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM agents WHERE NTAB IN (SELECT PathTab.NTAB FROM PathTab WHERE IDPath = ?)',
          [pathologyType],
          (_, results) => {
            const agentsData = [];
            for (let i = 0; i < results.rows.length; i++) {
              agentsData.push(results.rows.item(i));
            }
            setAgents(agentsData);
          },
          (_, error) => console.error('Error fetching agents:', error.message)
        );
      });
    };

    fetchAgents();
  }, [pathologyType]);

  return (
    <ImageBackground source={image} resizeMode="cover" style={{ flex: 1, padding: 15 }}>
      <View style={{ alignItems: 'center', marginTop: 20, marginBottom: 20 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'white' }}>{PathologyLabelFR}</Text>
      </View>

      <FlatList
        data={agents}
        keyExtractor={item => item.NTAB.toString()}
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
            <TouchableOpacity onPress={() => setSelectedFile(item.NTAB.toString().replace(/\./g, '-'))}>
              <FontAwesome name="file-pdf-o" size={25} color="black" />
            </TouchableOpacity>
          </View>
        )}
      />

      <Modal visible={Boolean(selectedFile)} animationType="slide" onRequestClose={() => setSelectedFile(null)}>
        <View style={{ flex: 1 }}>
          <Pdf
            trustAllCerts={false}
            source={{ uri: `https://raw.githubusercontent.com/Alhyane31/MP/fcdf8a7e8c79e527dcbc2d0cbc688e2fc5ec11fd/FilesMP/FR/${selectedFile}.pdf` }}
            onError={error => console.error('Error loading PDF:', error)}
            style={{ flex: 1 }}
          />
          <TouchableOpacity
            onPress={() => setSelectedFile(null)}
            style={{ padding: 15, backgroundColor: '#233b67', alignItems: 'center' }}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Fermer</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </ImageBackground>
  );
};

export default AgentsScreen;
