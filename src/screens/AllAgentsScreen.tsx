// @ts-nocheck
import React, { useState, useEffect } from 'react';
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { usePathologyStore } from 'store/pathologies';
import { openDatabase } from '../utils/database';
import Feather from 'react-native-vector-icons/Feather';
import { COLORS, RADIUS, SHADOW, SPACING } from '../theme';

const image = require('../assets/images/background.png');

const AgentsScreen = () => {
  const navigation = useNavigation();
  const [searchTerm, setSearchTerm] = useState('');
  const { setAgent } = usePathologyStore(state => state);
  const [agents, setAgents] = useState([]);

  const filterAgents = term =>
    agents.filter(agent => {
      const regex = new RegExp(term, 'gi');
      return agent.LibelleFR.match(regex) || agent.NTAB.match(regex);
    });

  useEffect(() => {
    const fetchAgents = async () => {
      const db = await openDatabase();
      db.transaction(tx => {
        tx.executeSql(
          'Select * from agents',
          [],
          (tx, results) => {
            const agentsData = [];
            for (let i = 0; i < results.rows.length; i++) {
              agentsData.push(results.rows.item(i));
            }
            setAgents(agentsData);
          },
          (tx, error) => {
            console.error('Error fetching Agents:', error.message);
          },
        );
      });
    };
    fetchAgents();
  }, []);

  const handleNavigation = item => {
    navigation.navigate('DetailsAgent', { agent: item });
  };

  const displayedAgents =
    searchTerm !== ''
      ? filterAgents(searchTerm)
      : [...agents].sort((a, b) => (a.LibelleFR > b.LibelleFR ? 1 : -1));

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.background}>
      <View style={styles.overlay} />

      {/* Search Header */}
      <View style={styles.searchHeader}>
        <View style={styles.searchBar}>
          <Feather name="search" size={17} color={COLORS.text.muted} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={setSearchTerm}
            placeholder="Rechercher un agent..."
            placeholderTextColor={COLORS.text.muted}
            returnKeyType="search"
          />
          {searchTerm.length > 0 && (
            <TouchableOpacity onPress={() => setSearchTerm('')} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
              <Feather name="x-circle" size={16} color={COLORS.text.muted} />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.countBadge}>
          <Text style={styles.countText}>{displayedAgents.length}</Text>
        </View>
      </View>

      {/* List */}
      <FlatList
        data={displayedAgents}
        contentContainerStyle={styles.listContent}
        keyExtractor={(item, index) => item.NTAB?.toString() || index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.agentCard}
            onPress={() => handleNavigation(item)}
            activeOpacity={0.80}>
            <View style={styles.agentIconBox}>
              <Feather name="user" size={18} color={COLORS.primaryLight} />
            </View>
            <View style={styles.agentInfo}>
              <Text style={styles.agentName} numberOfLines={2}>
                {item.LibelleFR}
              </Text>
              <Text style={styles.agentNTab}>Tableau N° {item.NTAB}</Text>
            </View>
            <Feather name="chevron-right" size={18} color={COLORS.text.light} />
          </TouchableOpacity>
        )}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1 },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(20, 32, 55, 0.40)',
  },
  searchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.md,
    paddingTop: SPACING.lg,
    backgroundColor: COLORS.primary,
    gap: SPACING.sm,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.pill,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm + 1,
    ...SHADOW.sm,
  },
  searchIcon: {
    marginRight: SPACING.sm,
  },
  searchInput: {
    flex: 1,
    color: COLORS.primary,
    fontSize: 15,
    paddingVertical: 0,
  },
  countBadge: {
    backgroundColor: 'rgba(255,255,255,0.18)',
    borderRadius: RADIUS.pill,
    paddingHorizontal: SPACING.sm + 2,
    paddingVertical: SPACING.xs + 1,
    minWidth: 42,
    alignItems: 'center',
  },
  countText: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: '700',
  },
  listContent: {
    padding: SPACING.md,
    paddingBottom: SPACING.xl,
  },
  agentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.lg,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.md,
    marginBottom: SPACING.sm,
    ...SHADOW.sm,
  },
  agentIconBox: {
    width: 40,
    height: 40,
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.iconBg,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SPACING.md,
  },
  agentInfo: {
    flex: 1,
    marginRight: SPACING.xs,
  },
  agentName: {
    color: COLORS.primary,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    marginBottom: 2,
  },
  agentNTab: {
    color: COLORS.text.muted,
    fontSize: 12,
    fontWeight: '500',
  },
});

export default AgentsScreen;
