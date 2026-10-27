import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useLocalSearchParams ,useRouter} from 'expo-router';

import { fetchPathologies,fetchNTABAgents } from '@/assets/utils/api';
import { listStyles as styles } from '../constants/Brand';
import DetailHeader from '../components/brand/DetailHeader';
import LangSwitch from '../components/brand/LangSwitch';
import PdfViewerModal from '../components/brand/PdfViewerModal';

const DetailsNtableau = () => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const { NTAB } = useLocalSearchParams();
  const [pathologies, setPathologies] = useState<any>([]);
  const [agents, setAgents] = useState<any>([]);
  const router = useRouter();
  const pdfUrl = `https://sandybrown-giraffe-796579.hostingersite.com/FilesMP/AR/${selectedFile}.pdf`;

const handleChangeLanguage = () => {
  // Revenir à l'écran précédent
  router.back();

  // Rediriger vers l'écran en français après
  router.push({
    pathname: '/detailsNtableau',
    params: {
      NTAB,

    },
  });
};


  useEffect(() => {
    const loadData = async () => {

      setPathologies(await fetchPathologies(NTAB.toString()));
      setAgents(await fetchNTABAgents(NTAB.toString()));
    };
    loadData();
  }, [NTAB]);

  return (
    <View style={styles.screen}>
      <DetailHeader
        ntab={NTAB}
        lang="ar"
        onOpenPdf={() => setTimeout(() => setSelectedFile(NTAB.toString().replace(/\./g, '-')), 100)}
      />

      <View style={{ flex: 1, paddingHorizontal: 16, paddingTop: 12, paddingBottom: 72 }}>
        <Text style={[styles.sectionTitle, styles.sectionTitleAr]}>العوامل الممرضة</Text>
        <FlatList
          data={agents}
          keyExtractor={(item) => item.LibelleAR}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={[styles.body, styles.bodyAr, { flex: 1 }]}>{item.LibelleAR}</Text>
            </View>
          )}
        />

        <Text style={[styles.sectionTitle, styles.sectionTitleAr]}>الأمراض</Text>
        <FlatList
          data={pathologies}
          keyExtractor={(item) => item.LibelleAR}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={[styles.body, styles.bodyAr, { flex: 1 }]}>{item.LibelleAR}</Text>
            </View>
          )}
        />
      </View>

      {/* Affichage du PDF avec WebView */}
      <PdfViewerModal
        selectedFile={selectedFile}
        pdfUrl={pdfUrl}
        onClose={() => setSelectedFile(null)}
        lang="ar"
        directViewWhileDownloading
      />

      <LangSwitch onPress={handleChangeLanguage} to="fr" />
    </View>
  );
};

export default DetailsNtableau;
