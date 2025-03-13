import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import FontAwesome from 'react-native-vector-icons/Feather';
import { fetchAllAgents } from '@/assets/utils/databaseC';

const image = require('@/assets/images/background.png');
interface Agent {
  LibelleFR: string;
   ID: number;
  NTAB: string;
  LibelleAR: string;
}

const AgentsScreen = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [agents, setAgents] = useState<Agent[]>([]);

  useEffect(() => {
    const loadAgents = async () => {
      const fetchedAgents = await fetchAllAgents();
      setAgents(fetchedAgents);
    };

    loadAgents();
  }, []);

  const searchAgents = (term: string) => {
    if (!term) return agents;
    const regex = new RegExp(term, 'i');
    return agents.filter(agent => regex.test(agent.LibelleFR) || regex.test(agent.NTAB));
  };

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.searchInput}
          value={searchTerm}
          onChangeText={setSearchTerm}
          placeholder="Recherche"
          placeholderTextColor="#555"
        />
      </View>
      <FlatList
        contentContainerStyle={styles.listContainer}
        data={searchAgents(searchTerm).sort((a, b) => a.LibelleFR.localeCompare(b.LibelleFR))}
        keyExtractor={(item) => item.ID.toString()}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.LibelleFR}</Text>
              <Text style={styles.info}>N.Tableau : {item.NTAB}</Text>
            </View>
            <TouchableOpacity onPress={() => router.push({ pathname: '/detailsagent', params: { NTAB : item.NTAB,LibelleFR : item.LibelleFR} })}>
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
    padding: 15,
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

export default AgentsScreen;
