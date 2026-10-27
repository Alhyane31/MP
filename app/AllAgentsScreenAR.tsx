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
    return agents.filter(agent => regex.test(agent.LibelleAR) || regex.test(agent.NTAB));
  };

  const openAgent = async (item: Agent) => {
    console.log(item.ID);
    await updateAgentsHistory(parseInt(String(item.ID), 10));
    router.push({ pathname: '/detailsagentAR', params: { NTAB : item.NTAB,LibelleFR : item.LibelleFR,LibelleAR : item.LibelleAR} });
  };

  return (
    <View style={styles.screen}>
      <View style={styles.searchBar}>
        <TextInput
          style={[styles.searchInput, styles.searchInputAr]}
          value={searchTerm}
          onChangeText={setSearchTerm}
          placeholder="البحث عن عامل أو رقم جدول"
          placeholderTextColor={BRAND.slate}
        />
      </View>
      <FlatList
        contentContainerStyle={styles.listContent}
        data={searchAgents(searchTerm).sort((a, b) => a.LibelleAR.localeCompare(b.LibelleAR))}
        keyExtractor={(item) => item.ID.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} activeOpacity={0.75} onPress={() => openAgent(item)}>
            <Feather name="chevron-left" size={22} color={BRAND.majorelle} />
            <View style={styles.cardText}>
              <Text style={[styles.title, styles.titleAr]}>{item.LibelleAR}</Text>
              <View style={[styles.chip, styles.chipAr]}><Text style={[styles.chipText, styles.chipTextAr]}>رقم الجدول {item.NTAB}</Text></View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default AgentsScreen;
