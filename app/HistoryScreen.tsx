import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import FontAwesome from 'react-native-vector-icons/Feather';
import { fetchPathHistory,fetchAgentsHistory } from '@/assets/utils/databaseC';

const image = require('@/assets/images/background.png');


const HistoryScreen = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [Path, setPath] = useState<any>([]);
  const [Agents, setAgents] = useState<any>([]);
  useEffect(() => {
    const loadPath = async () => {
      const fetchedPath = await fetchPathHistory();
      setPath(fetchedPath);
    };

    loadPath();
  }, []);
  useEffect(() => {
    const loadAgents = async () => {
      const fetchedAgents = await fetchAgentsHistory();
      setAgents(fetchedAgents);
    };

    loadAgents();
  }, []);
 

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.container}>
    <View style={{ alignItems: 'center',  marginBottom: 0 , padding : 5}}>
              <Text style={{ fontSize: 22, textAlign: 'center',fontWeight: 'bold', color: 'white' }}> Pathologies</Text>
            </View>
      <FlatList
        contentContainerStyle={styles.listContainer}
        data={Path}
        keyExtractor={(item) => item.ID.toString()}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.LibelleFR}</Text>
               <Text style={[styles.info, { textAlign: 'left', fontWeight: 'bold'  }]}> {new Date(item.History).toISOString().replace('T', ' ').slice(0, 19)}</Text>
            </View>
            <TouchableOpacity onPress={() => router.push({ pathname: '/agentsfr', params: {  pathologyType: item.ID ,PathologyLabelFR: item.LibelleFR,PathologyLabelAR: item.LibelleAR}})}>
              <FontAwesome name="info" size={28} color="black" />
            </TouchableOpacity>
          </View>
        )}
      />

<View style={{ alignItems: 'center',  marginBottom: 0 , padding : 5}}>
              <Text style={{ fontSize: 22, textAlign: 'center',fontWeight: 'bold', color: 'white' }}> Agents</Text>
            </View>
      <FlatList
        contentContainerStyle={styles.listContainer}
        data={Agents}
        keyExtractor={(item) => item.ID.toString()}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.LibelleFR}</Text>
               <Text style={[styles.info, { textAlign: 'left', fontWeight: 'bold'  }]}> {new Date(item.History).toISOString().replace('T', ' ').slice(0, 19)}</Text>
            </View>
            <TouchableOpacity onPress={() => router.push({ pathname: '/detailsagent', params: { NTAB : item.NTAB,LibelleFR : item.LibelleFR,LibelleAR : item.LibelleAR} })}>
              <FontAwesome name="info" size={28} color="black" />
            </TouchableOpacity>
          </View>
        )}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#233b67',
    padding: 15,
    alignItems: 'center',
  },
  searchInput: {
    backgroundColor: 'white',
    width: '100%',
    padding: 10,
    borderRadius: 8,
  },
  listContainer: {
    padding: 5,
  },
  listItem: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  textContainer: {
    width: '80%',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 14,
    color: '#555',
  },
});

export default HistoryScreen;
