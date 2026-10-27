import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useLocalSearchParams,useRouter } from 'expo-router';

import { fetchPath } from '@/assets/utils/api';
import { listStyles as styles } from '../constants/Brand';
import DetailHeader from '../components/brand/DetailHeader';
import LangSwitch from '../components/brand/LangSwitch';
import PdfViewerModal from '../components/brand/PdfViewerModal';

const DetailsAgent = () => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [pathologies, setPathologies] = useState<any | any>([]);
  const { NTAB } = useLocalSearchParams<any>();
  const { LibelleFR,LibelleAR } = useLocalSearchParams<any>();

  const pdfUrl = `https://sandybrown-giraffe-796579.hostingersite.com/FilesMP/AR/${selectedFile}.pdf`;
const router = useRouter();
const handleChangeLanguage = () => {
  // Revenir à l'écran précédent
  router.back();

  // Rediriger vers l'écran en français après
  router.push({
    pathname: '/detailsagent',
    params: {
      NTAB,
      LibelleAR,
      LibelleFR

    },
  });
};
  useEffect(() => {
    const loadPathologies = async () => {
      if (!NTAB) return;
      try {
        const results = await fetchPath(NTAB);
        setPathologies(results);
      } catch (error) {
        console.error('❌ Erreur lors du chargement des pathologies:', error);
      }
    };
    loadPathologies();
  }, [NTAB]);

  if (!NTAB) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.screen}>
      {/* Infos Agent */}
      <DetailHeader
        ntab={NTAB}
        title={LibelleAR}
        lang="ar"
        onOpenPdf={() => setTimeout(() => setSelectedFile(NTAB.toString().replace(/\./g, '-')), 100)}
      />

      {/* Liste des Pathologies */}
      <FlatList
        data={pathologies}
        keyExtractor={(item) => item.ID.toString()}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={<Text style={[styles.sectionTitle, styles.sectionTitleAr]}>الأمراض</Text>}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardText}>
              <Text style={[styles.body, styles.bodyAr]}>{item.LibelleAR}</Text>
            </View>
          </View>
        )}
      />

      {/* Affichage du PDF avec WebView */}
      <PdfViewerModal selectedFile={selectedFile} pdfUrl={pdfUrl} onClose={() => setSelectedFile(null)} lang="ar" />

      <LangSwitch onPress={handleChangeLanguage} to="fr" />
    </View>
  );
};

export default DetailsAgent;
