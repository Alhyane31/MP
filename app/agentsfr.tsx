import React, { useState, useEffect } from 'react';
import { 
  View, Text, FlatList, TouchableOpacity, ImageBackground, Modal, SafeAreaView ,Linking
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';

import { fetchAgents } from '@/assets/utils/databaseC';

const image = require('@/assets/images/background.png');

const AgentsScreen = () => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [agents, setAgents] = useState<any | any>([]);
  
  const { pathology, pathologyType, PathologyLabelFR, PathologyLabelAR } = useLocalSearchParams();
  const router = useRouter(); // Navigation avec Expo Router
  const pdfUrl = `https://raw.githubusercontent.com/Alhyane31/MP/cde7e1f8effc5b3ce03d522fc0e84770df2716e6/FilesMP/FR/${selectedFile}.pdf`;
  const [showDownloadView, setShowDownloadView] = useState(false);
  const [countdown, setCountdown] = useState(0);

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



  // Démarrer le compte à rebours lorsque le téléchargement commence
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0 && showDownloadView) {
      setShowDownloadView(false);
    }
  }, [countdown]);

  const handleDownload = () => {
    Linking.openURL(pdfUrl); 
    setShowDownloadView(true);
    setCountdown(10); // Lancer un compte à rebours de 10 secondes
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
    <ImageBackground source={image} resizeMode="cover" style={{ flex: 1, padding: 5 }}>
      <SafeAreaView style={{ flex: 1 }}>
        
        <View style={{ alignItems: 'center', marginBottom: 20 , padding: 10 }}>
          <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'white' }}> {PathologyLabelFR}</Text>
        </View>

        <FlatList style={{  marginBottom: 30}}
          data={agents}
          keyExtractor={item => item.ID.toString()}
          renderItem={({ item }) => (
            <View style={{
              backgroundColor: 'white',
              padding: 15,
              marginBottom: 15,
              borderRadius: 6,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
              elevation: 3
            }}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16, textAlign: 'justify' }}>{item.LibelleFR}</Text>
                <Text style={{ fontWeight: 'bold' }}>N.Tableau: {item.NTAB}</Text>
              </View>
              <TouchableOpacity style={{ alignSelf: 'flex-end', marginTop: 10 }} onPress={() => setTimeout(() => setSelectedFile(item.NTAB.toString().replace(/\./g, '-')), 100)}>
                <FontAwesome name="file-pdf-o" size={25} color="black" />
              </TouchableOpacity>
            </View>
          )}
        />

        <Modal
          style={{ flex: 1, backgroundColor: '#233b67' }}
          visible={Boolean(selectedFile)}
          animationType="slide"
          onRequestClose={() => setSelectedFile(null)}
        >
          <SafeAreaView style={{ flex: 1, backgroundColor: '#233b67' }}>
            <View style={{ flex: 1, bottom: 0, height: "80%", width: '100%', borderTopLeftRadius: 5, borderTopRightRadius: 5, maxHeight: '100%', padding: 0 }}>
              
              {/* WebView pour afficher l'aperçu du PDF */}
              <WebView 
              key={selectedFile}
              source={{ uri: `https://docs.google.com/gview?embedded=true&url=${pdfUrl}` }} 
              style={{ flex: 1 }}
              onError={() => {
                console.error("Erreur de chargement du PDF");
              }}  />

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

      </SafeAreaView>
    </ImageBackground>
  );
};

export default AgentsScreen;
