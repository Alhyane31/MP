// @ts-nocheck
import React, { useState, useEffect } from 'react';
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import { Actionsheet, Box } from 'native-base';
import { useRoute } from '@react-navigation/native';
import { openDatabase } from '../utils/database';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Pdf from 'react-native-pdf';
import { COLORS, RADIUS, SHADOW, SPACING } from '../theme';

const image = require('../assets/images/background.png');

const AgentsScreen = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [agents, setAgents] = useState([]);
  const route = useRoute();
  const { pathology, pathologyType, PathologyLabelAR, PathologyLabelFR } = route.params;

  const handleClose = () => setSelectedFile(null);

  useEffect(() => {
    const fetchAgents = async () => {
      const db = await openDatabase();
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM agents WHERE NTAB IN (SELECT PathTab.NTAB FROM PathTab WHERE IDPath = ?)',
          [pathologyType],
          (tx, results) => {
            const agentsData = [];
            for (let i = 0; i < results.rows.length; i++) {
              agentsData.push(results.rows.item(i));
            }
            setAgents(agentsData);
          },
          (tx, error) => {
            console.error('Error fetching agents:', error.message);
          },
        );
      });
    };
    fetchAgents();
  }, [pathologyType]);

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.background}>
      <View style={styles.overlay} />

      {/* Pathology Header */}
      <View style={styles.header}>
        <View style={styles.headerIconBox}>
          <Feather name="file-text" size={18} color={COLORS.white} />
        </View>
        <Text style={styles.headerTitle} numberOfLines={2}>
          {PathologyLabelFR}
        </Text>
        <View style={styles.countChip}>
          <Text style={styles.countChipText}>{agents.length}</Text>
        </View>
      </View>

      {pathology && pathologyType && (
        <FlatList
          data={agents}
          contentContainerStyle={styles.listContent}
          keyExtractor={item => item.NTAB?.toString()}
          renderItem={({ item }) => (
            <View style={styles.agentCard}>
              <View style={styles.agentInfo}>
                <Text style={styles.agentName}>{item.LibelleFR}</Text>
                <View style={styles.tableChip}>
                  <Text style={styles.tableChipText}>Tableau {item.NTAB}</Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.pdfButton}
                onPress={() =>
                  setSelectedFile(item.NTAB.toString().replace(/\./g, '-'))
                }
                activeOpacity={0.80}>
                <FontAwesome name="file-pdf-o" size={18} color={COLORS.white} />
              </TouchableOpacity>
            </View>
          )}
        />
      )}

      <Actionsheet animationPreset="fade" isOpen={Boolean(selectedFile)} onClose={handleClose}>
        <Actionsheet.Content>
          <Box w="100%" h="100%">
            <Pdf
              trustAllCerts={false}
              source={{
                uri: `https://raw.githubusercontent.com/Alhyane31/MP/fcdf8a7e8c79e527dcbc2d0cbc688e2fc5ec11fd/FilesMP/FR/${selectedFile}.pdf`,
              }}
              onLoadComplete={numberOfPages => {
                console.log(`Number of pages: ${numberOfPages}`);
              }}
              onPageChanged={page => {
                console.log(`Current page: ${page}`);
              }}
              onError={error => {
                console.error('Error loading PDF:', error);
              }}
              onPressLink={uri => {
                console.log(`Link pressed: ${uri}`);
              }}
              style={{ flex: 1 }}
            />
          </Box>
        </Actionsheet.Content>
      </Actionsheet>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1 },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(20, 32, 55, 0.42)',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.md,
    paddingTop: SPACING.lg,
    gap: SPACING.sm,
  },
  headerIconBox: {
    width: 34,
    height: 34,
    borderRadius: RADIUS.sm,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    flex: 1,
    color: COLORS.white,
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 20,
  },
  countChip: {
    backgroundColor: 'rgba(255,255,255,0.18)',
    borderRadius: RADIUS.pill,
    paddingHorizontal: SPACING.sm,
    paddingVertical: 3,
    minWidth: 32,
    alignItems: 'center',
  },
  countChipText: {
    color: COLORS.white,
    fontSize: 12,
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
    padding: SPACING.md,
    marginBottom: SPACING.sm,
    ...SHADOW.sm,
  },
  agentInfo: {
    flex: 1,
    marginRight: SPACING.sm,
  },
  agentName: {
    color: COLORS.primary,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    marginBottom: SPACING.xs,
  },
  tableChip: {
    alignSelf: 'flex-start',
    backgroundColor: COLORS.iconBg,
    borderRadius: RADIUS.pill,
    paddingHorizontal: SPACING.sm,
    paddingVertical: 2,
  },
  tableChipText: {
    color: COLORS.primaryLight,
    fontSize: 11,
    fontWeight: '700',
  },
  pdfButton: {
    backgroundColor: COLORS.primaryLight,
    borderRadius: RADIUS.md,
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    ...SHADOW.sm,
  },
});

export default AgentsScreen;
