import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { fetchAllAgents, updateAgentsHistory } from '@/assets/utils/api';
import { BRAND, listStyles as styles } from '../constants/Brand';

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

  const openAgent = async (item: Agent) => {
    console.log(item.ID);
    await updateAgentsHistory(parseInt(String(item.ID), 10));
    router.push({ pathname: '/detailsagent', params: { NTAB : item.NTAB,LibelleFR : item.LibelleFR,LibelleAR : item.LibelleAR} });
  };

  return (
    <View style={styles.screen}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          value={searchTerm}
          onChangeText={setSearchTerm}
          placeholder="Rechercher un agent ou un n° de tableau"
          placeholderTextColor={BRAND.slate}
        />
      </View>
      <FlatList
        contentContainerStyle={styles.listContent}
        data={searchAgents(searchTerm).sort((a, b) => a.LibelleFR.localeCompare(b.LibelleFR))}
        keyExtractor={(item) => item.ID.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} activeOpacity={0.75} onPress={() => openAgent(item)}>
            <View style={styles.cardText}>
              <Text style={styles.title}>{item.LibelleFR}</Text>
              <View style={styles.chip}><Text style={styles.chipText}>Tableau {item.NTAB}</Text></View>
            </View>
            <Feather name="chevron-right" size={22} color={BRAND.majorelle} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default AgentsScreen;
