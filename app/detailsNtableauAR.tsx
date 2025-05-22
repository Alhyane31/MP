import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, ImageBackground, StyleSheet,Modal,Linking
  ,SafeAreaView, } from 'react-native';
  import { WebView } from 'react-native-webview';
import { useLocalSearchParams,useRouter } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import * as FileSystem from 'expo-file-system';

import { fetchPathologies,fetchNTABAgents } from '@/assets/utils/databaseC';

const image = require('../assets/images/background.png');
//const db = openDatabase();



const DetailsNtableau = () => {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const { NTAB } = useLocalSearchParams();
  const [pathologies, setPathologies] = useState<any>([]);
  const [agents, setAgents] = useState<any>([]);
  const pdfUrl = `https://raw.githubusercontent.com/Alhyane31/MP/main/FilesMP/AR/${selectedFile}.pdf`;
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
const handleChangeLanguage = () => {
  // Revenir à l'écran précédent
  router.back();

  // Rediriger vers l'écran en arabe après
  router.push({
    pathname: '/detailsNtableau',
    params: {
      NTAB,
      
      
    },
  });
};
const handleDownload = () => {
  Linking.openURL(pdfUrl); 
  setShowDownloadView(true);
  setCountdown(10); // Lancer un compte à rebours de 10 secondes
};
  useEffect(() => {
    const loadData = async () => {
      
      setPathologies(await fetchPathologies(NTAB.toString()));
      setAgents(await fetchNTABAgents(NTAB.toString()));
    };
    loadData();
  }, [NTAB]);

 
 // const url = `https://raw.githubusercontent.com/Alhyane31/MP/fcdf8a7e8c79e527dcbc2d0cbc688e2fc5ec11fd/FilesMP/AR/${selectedFile}.pdf`;

  return (
    <ImageBackground source={image} resizeMode="cover" style={{ flex: 1, padding: 15 }}>
        
     <View style={{ backgroundColor: 'white', padding: 15, marginBottom: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        
         <TouchableOpacity onPress={() => setTimeout(() => setSelectedFile(NTAB.toString().replace(/\./g, '-')), 100)}>
          <FontAwesome name="file-pdf-o" size={25} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 16 , textAlign: 'right'  }}>رقم الجدول : {NTAB}</Text>
      </View>

      <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>العوامل الممرضة :</Text>
      <FlatList
        data={agents}
        keyExtractor={(item) => item.LibelleAR}
        renderItem={({ item }) => (
          <View style={{ backgroundColor: 'white', padding: 15, marginBottom: 10 }}>
            <Text style = {{fontSize: 16, textAlign: 'right' }}>{item.LibelleAR}</Text>
          </View>
        )}
      />

      <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 ,marginTop : 10}}>الأمراض :</Text>
      <FlatList style={{  marginBottom: 30}}
        data={pathologies}
        keyExtractor={(item) => item.LibelleAR}
        renderItem={({ item }) => (
          <View style={{ backgroundColor: 'white', padding: 15, marginBottom: 10 }}>
            <Text style = {{ fontSize: 16,textAlign: 'right' }}>{item.LibelleAR}</Text>
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
                   
                   {showDownloadView ? (
                     // WebView affichant le fichier PDF directement
                     <WebView source={{ uri: pdfUrl }} style={{ flex: 1 }} />
                   ) : (
                     // WebView intégrée via Google Viewer
                     <WebView key={selectedFile} source={{ uri: `https://docs.google.com/gview?embedded=true&url=${pdfUrl}` }} 
                     style={{ flex: 1 }} 
                     onError={() => {
                      console.error("Erreur de chargement du PDF");
                    }}/>
                   )}
         
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
             <TouchableOpacity
          onPress={handleChangeLanguage}
          style={{ position: 'absolute', bottom: 20,  alignSelf: 'center'}}
        >
          <Text style={{ color: 'white', fontSize: 16, textDecorationLine: 'underline', fontWeight: 'bold' }}>
          تغيير اللغة إلى الفرنسية
          </Text>
        </TouchableOpacity>
    </ImageBackground>
  );
};

export default DetailsNtableau;
