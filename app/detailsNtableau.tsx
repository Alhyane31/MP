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
  const pdfUrl = `https://sandybrown-giraffe-796579.hostingersite.com/FilesMP/FR/${selectedFile}.pdf`;
  const router = useRouter();

const handleChangeLanguage = () => {
  // Revenir à l'écran précédent
  router.back();

  // Rediriger vers l'écran en arabe après
  router.push({
    pathname: '/detailsNtableauAR',
    params: {
      NTAB

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
        onOpenPdf={() => setTimeout(() => setSelectedFile(NTAB.toString().replace(/\./g, '-')), 100)}
      />

      <View style={{ flex: 1, paddingHorizontal: 16, paddingTop: 12, paddingBottom: 72 }}>
        <Text style={styles.sectionTitle}>Agents pathogènes</Text>
        <FlatList
          data={agents}
          keyExtractor={(item) => item.LibelleFR}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={[styles.body, { flex: 1 }]}>{item.LibelleFR}</Text>
            </View>
          )}
        />

        <Text style={styles.sectionTitle}>Pathologies</Text>
        <FlatList
          data={pathologies}
          keyExtractor={(item) => item.LibelleFR}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={[styles.body, { flex: 1 }]}>{item.LibelleFR}</Text>
            </View>
          )}
        />
      </View>

      {/* Affichage du PDF avec WebView */}
      <PdfViewerModal
        selectedFile={selectedFile}
        pdfUrl={pdfUrl}
        onClose={() => setSelectedFile(null)}
        directViewWhileDownloading
      />

      <LangSwitch onPress={handleChangeLanguage} to="ar" />
    </View>
  );
};

export default DetailsNtableau;
