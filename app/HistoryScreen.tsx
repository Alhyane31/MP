import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { fetchPathHistory,fetchAgentsHistory } from '@/assets/utils/api';
import { BRAND, listStyles as styles } from '../constants/Brand';

const formatDate = (value: string) => new Date(value).toISOString().replace('T', ' ').slice(0, 19);

const HistoryScreen = () => {
  const router = useRouter();
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
    <View style={[styles.screen, { paddingHorizontal: 16, paddingTop: 12 }]}>
      <Text style={styles.sectionTitle}>Pathologies</Text>
      <FlatList
        data={Path}
        keyExtractor={(item) => item.ID.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.75}
            onPress={() => router.push({ pathname: '/agentsfr', params: {  pathologyType: item.ID ,PathologyLabelFR: item.LibelleFR,PathologyLabelAR: item.LibelleAR}})}
          >
            <View style={styles.cardText}>
              <Text style={styles.title}>{item.LibelleFR}</Text>
              <Text style={styles.meta}>{formatDate(item.History)}</Text>
            </View>
            <Feather name="chevron-right" size={22} color={BRAND.majorelle} />
          </TouchableOpacity>
        )}
      />

      <Text style={styles.sectionTitle}>Agents</Text>
      <FlatList
        data={Agents}
        keyExtractor={(item) => item.ID.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.75}
            onPress={() => router.push({ pathname: '/detailsagent', params: { NTAB : item.NTAB,LibelleFR : item.LibelleFR,LibelleAR : item.LibelleAR} })}
          >
            <View style={styles.cardText}>
              <Text style={styles.title}>{item.LibelleFR}</Text>
              <Text style={styles.meta}>{formatDate(item.History)}</Text>
            </View>
            <Feather name="chevron-right" size={22} color={BRAND.majorelle} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HistoryScreen;
