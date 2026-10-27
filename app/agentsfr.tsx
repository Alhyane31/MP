import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

import { fetchAgents } from '@/assets/utils/api';
import { BRAND, listStyles as styles } from '../constants/Brand';
import DetailHeader from '../components/brand/DetailHeader';
import LangSwitch from '../components/brand/LangSwitch';
import PdfViewerModal from '../components/brand/PdfViewerModal';

const AgentsScreen = () => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [agents, setAgents] = useState<any | any>([]);

  const { pathology, pathologyType, PathologyLabelFR, PathologyLabelAR } = useLocalSearchParams();
  const router = useRouter(); // Navigation avec Expo Router
  const pdfUrl = `https://sandybrown-giraffe-796579.hostingersite.com/FilesMP/FR/${selectedFile}.pdf`;

  const handleChangeLanguage = () => {
    // Revenir à l'écran précédent
    router.back();

    // Rediriger vers l'écran en arabe après
    router.push({
      pathname: '/agentsar',
      params: {
        pathology,
        pathologyType,
        PathologyLabelFR,
        PathologyLabelAR,
      },
    });
  };

  useEffect(() => {
    const loadAgents = async () => {
      if (!pathologyType) return;

      try {
        const data :any = await fetchAgents(Number(pathologyType));
        setAgents(data);
      } catch (error) {
        console.error('❌ Erreur lors du chargement des agents:', error);
      }
    };

    loadAgents();
  }, [pathologyType]);

  return (
    <View style={styles.screen}>
      <DetailHeader title={PathologyLabelFR} />

      <FlatList
        contentContainerStyle={styles.listContent}
        data={agents}
        keyExtractor={item => item.ID.toString()}
        ListHeaderComponent={<Text style={styles.sectionTitle}>Agents pathogènes</Text>}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardText}>
              <Text style={styles.body}>{item.LibelleFR}</Text>
              <View style={styles.chip}><Text style={styles.chipText}>Tableau {item.NTAB}</Text></View>
            </View>
            <TouchableOpacity
              style={styles.iconButton}
              accessibilityLabel="Ouvrir le PDF"
              onPress={() => setTimeout(() => setSelectedFile(item.NTAB.toString().replace(/\./g, '-')), 100)}
            >
              <FontAwesome name="file-pdf-o" size={20} color={BRAND.majorelle} />
            </TouchableOpacity>
          </View>
        )}
      />

      <PdfViewerModal selectedFile={selectedFile} pdfUrl={pdfUrl} onClose={() => setSelectedFile(null)} />

      <LangSwitch onPress={handleChangeLanguage} to="ar" />
    </View>
  );
};

export default AgentsScreen;
