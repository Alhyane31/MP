import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { fetchDistAgents } from '@/assets/utils/api';
import { BRAND, listStyles as styles } from '../constants/Brand';

interface Agent {

  NTAB: string;

}

const AllNTableauScreen = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [agents, setAgents] = useState<Agent[]>([]);

  useEffect(() => {
    const loadAgents = async () => {
      const fetchedAgents = await fetchDistAgents();
      setAgents(fetchedAgents);
    };

    loadAgents();
  }, []);
  const searchAgents = (term: string) => {
    if (!term) return agents;
    const regex = new RegExp(term, 'i');
    return agents.filter(agent =>  regex.test(agent.NTAB));
  };

  return (
    <View style={styles.screen}>
      <View style={styles.searchBar}>
        <TextInput
          style={[styles.searchInput, styles.searchInputAr]}
          value={searchTerm}
          onChangeText={setSearchTerm}
          placeholder="رقم الجدول، مثال 1-1-4"
          placeholderTextColor={BRAND.slate}
        />
      </View>
      <FlatList
        contentContainerStyle={styles.listContent}
        data={searchAgents(searchTerm).sort((a, b) => a.NTAB > b.NTAB ? 1 : -1)}
        keyExtractor={(item) => item.NTAB.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.75}
            onPress={() => router.push({ pathname: '/detailsNtableauAR', params: { NTAB : item.NTAB} })}
          >
            <Feather name="chevron-left" size={22} color={BRAND.majorelle} />
            <View style={styles.cardText}>
              <Text style={[styles.meta, styles.metaAr]}>رقم الجدول</Text>
              <Text style={[styles.title, styles.titleAr]}>{item.NTAB}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default AllNTableauScreen;
