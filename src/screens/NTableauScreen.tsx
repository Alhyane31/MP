// @ts-nocheck
import React, { useState, useEffect, useCallback } from 'react';
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

const TableauItem = React.memo(({ item, onPress }) => (
  <TouchableOpacity style={styles.tableauCard} onPress={() => onPress(item)} activeOpacity={0.80}>
    <View style={styles.tableauIconBox}>
      <Feather name="hash" size={18} color={COLORS.primaryLight} />
    </View>
    <View style={styles.tableauInfo}>
      <Text style={styles.tableauLabel}>Tableau</Text>
      <Text style={styles.tableauNumber}>{item.NTAB}</Text>
    </View>
    <Feather name="chevron-right" size={18} color={COLORS.text.light} />
  </TouchableOpacity>
));

const NTableau = () => {
  const navigation = useNavigation();
  const [searchTerm, setSearchTerm] = useState('');
  const { setAgent } = usePathologyStore(state => state);
  const [agents, setAgents] = useState([]);

  const filterAgents = term =>
    agents.filter(agent => {
      const regex = new RegExp(term, 'gi');
      return agent.NTAB.match(regex);
    });

  useEffect(() => {
    const fetchAgents = async () => {
      const db = await openDatabase();
      db.transaction(tx => {
        tx.executeSql(
          'Select distinct NTAB from agents',
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

  const handleNavigation = useCallback(
    item => {
      navigation.navigate('DetailsNtableau', { agent: item });
    },
    [navigation],
  );

  const displayedAgents =
    searchTerm !== ''
      ? filterAgents(searchTerm)
      : [...agents].sort((a, b) => (a.NTAB > b.NTAB ? 1 : -1));

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
            placeholder="Rechercher un numéro..."
            placeholderTextColor={COLORS.text.muted}
            returnKeyType="search"
            keyboardType="default"
          />
          {searchTerm.length > 0 && (
            <TouchableOpacity
              onPress={() => setSearchTerm('')}
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
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
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TableauItem item={item} onPress={handleNavigation} />
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
  tableauCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.lg,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.md,
    marginBottom: SPACING.sm,
    ...SHADOW.sm,
  },
  tableauIconBox: {
    width: 40,
    height: 40,
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.iconBg,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SPACING.md,
  },
  tableauInfo: {
    flex: 1,
  },
  tableauLabel: {
    color: COLORS.text.muted,
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  tableauNumber: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: '700',
    marginTop: 1,
  },
});

export default NTableau;
