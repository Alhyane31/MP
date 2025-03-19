import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Modal,
  SafeAreaView,
  Linking
} from 'react-native';
import { useLocalSearchParams,useRouter } from 'expo-router';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { fetchPath } from '@/assets/utils/databaseC';
import { WebView } from 'react-native-webview';

const image = require('@/assets/images/background.png');

const DetailsAgent = () => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [pathologies, setPathologies] = useState<any | any>([]);
  const { NTAB } = useLocalSearchParams<any>();
  const { LibelleFR,LibelleAR } = useLocalSearchParams<any>();

  const pdfUrl = `https://raw.githubusercontent.com/Alhyane31/MP/main/FilesMP/FR/${selectedFile}.pdf`;
  const [showDownloadView, setShowDownloadView] = useState(false);
  const [countdown, setCountdown] = useState(0);
// Démarrer le compte à rebours lorsque le téléchargement commence
useEffect(() => {
  if (countdown > 0){
    const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    return () => clearTimeout(timer);
  } else if (countdown === 0 && showDownloadView) {
    setShowDownloadView(false);
  }
}, [countdown]);
const router = useRouter();
const handleDownload = () => {
  Linking.openURL(pdfUrl); 
  setShowDownloadView(true);
  setCountdown(10); // Lancer un compte à rebours de 10 secondes
};
const handleChangeLanguage = () => {
  // Revenir à l'écran précédent
  router.back();

  // Rediriger vers l'écran en arabe après
  router.push({
    pathname: '/detailsagentAR',
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
    <ImageBackground source={image} resizeMode="cover" style={{padding: 16, flex: 1 }}>
      
        {/* Infos Agent */}
        <View
          style={{
            backgroundColor: 'white',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 16,
            marginBottom: 12,
            borderRadius: 8,
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 2,
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{LibelleFR}</Text>
            <Text style={{ marginTop: 4 }}>N.Tableau : {NTAB}</Text>
          </View>

          <TouchableOpacity onPress={() => setSelectedFile(NTAB.toString().replace(/\./g, '-'))}>
            <FontAwesome name="file-pdf-o" size={25} color="black" />
          </TouchableOpacity>
        </View>

        {/* Liste des Pathologies */}
        <Text style={{ color: 'white', fontSize: 18, marginBottom: 8 }}>Pathologies :</Text>
        <FlatList style={{  marginBottom: 30}}
          data={pathologies}
          keyExtractor={(item) => item.ID.toString()}
          contentContainerStyle={{ paddingBottom: 15 }}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: 'white',
                padding: 16,
                marginBottom: 12,
                borderRadius: 8,
                shadowColor: '#000',
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 2,
              }}
            >
              <Text style={{ fontSize: 16 }}>{item.LibelleFR}</Text>
            </View>
          )}
        />

          {/* Affichage du PDF avec WebView */}
           <Modal
      style={{ flex: 1, backgroundColor: '#233b67' }}
      visible={Boolean(selectedFile)}
      animationType="slide"
      onRequestClose={() => setSelectedFile(null)}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: '#233b67' }}>
        <View style={{ flex: 1, bottom: 0, height: "80%", width: '100%', borderTopLeftRadius: 5, borderTopRightRadius: 5, maxHeight: '100%', padding: 0 }}>
          
          {/* WebView pour afficher l'aperçu du PDF */}
          <WebView source={{ uri: `https://docs.google.com/gview?embedded=true&url=${pdfUrl}` }} style={{ flex: 1 }} />

          {/* Conteneur des boutons */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, backgroundColor: '#233b67' }}>
            
            {/* Bouton Télécharger avec compte à rebours */}
            <TouchableOpacity
              onPress={countdown === 0 ? handleDownload : undefined}
              disabled={countdown > 0}
              style={{ 
                flex: 1, 
                padding: 15, 
                backgroundColor: countdown > 0 ? '#1b2b50' : '#2d4a8a', 
                alignItems: 'center', 
                borderRadius: 5, 
                marginHorizontal: 5 
              }}
            >
              <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
                {countdown > 0 ? `Patientez... ${countdown}s` : "Télécharger"}
              </Text>
            </TouchableOpacity>

            {/* Bouton Fermer */}
            <TouchableOpacity
              onPress={() => setSelectedFile(null)}
              style={{ flex: 1, padding: 15, backgroundColor: '#1b2b50', alignItems: 'center', borderRadius: 5, marginHorizontal: 5 }}>
              <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Fermer</Text>
            </TouchableOpacity>

          </View>

        </View>
      </SafeAreaView>
    </Modal>
     {/* Texte "Voir en arabe" en bas */}
     <TouchableOpacity
          onPress={handleChangeLanguage}
          style={{ position: 'absolute', bottom: 20,  alignSelf: 'center'}}
        >
          <Text style={{ color: 'white', fontSize: 16, textDecorationLine: 'underline', fontWeight: 'bold' }}>
            Voir en arabe
          </Text>
        </TouchableOpacity>
   
    </ImageBackground>
  );
};

export default DetailsAgent;
