import React, { useEffect, useState } from 'react'; 
import { fetchPathTypes, fetchPathologyTypes } from '@/assets/utils/databaseC';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  ImageBackground, 
  Modal, 
  FlatList
} from 'react-native';
import { useRouter } from 'expo-router';

const backgroundImg = require('@/assets/images/background.png');

interface PathologyType {
  ID: number;
  LibelleFR: string;
  LibelleAR?: string;
  PathTypeID: number;
}

const HomeScreen = () => {
  const router = useRouter();
  const [pathologies, setPathologies] = useState<PathologyType[]>([]);
  const [selectedPathology, setSelectedPathology] = useState('');
  const [selectedPathologyType, setSelectedPathologyType] = useState('');
  const [pathologyTypes, setPathologyTypes] = useState<PathologyType[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState<'pathology' | 'pathologyType' | null>(null);

  useEffect(() => {
    const fetchPathologies = async () => {
      try {
        const data:any = await fetchPathTypes();
        setPathologies(data);
      } catch (error: any) {
        console.error('❌ Erreur lors de la récupération des pathologies:', error.message);
      }
    };
    fetchPathologies();
  }, []);
 
  const PathologyLabelAR = pathologyTypes.find(
    (pathologyTypes) => pathologyTypes.ID.toString() === selectedPathologyType
  )?.LibelleAR;
  const PathologyLabelFR = pathologyTypes.find(
    (pathologyTypes) => pathologyTypes.ID.toString() === selectedPathologyType
  )?.LibelleFR;
  useEffect(() => {
    if (selectedPathology) {
      fetchPathologyTypes(parseInt(selectedPathology, 10)).then(setPathologyTypes);
    } else {
      setPathologyTypes([]);
    }
  }, [selectedPathology]);

  const handleSelection = (itemValue: string) => {
    if (modalType === 'pathology') {
      setSelectedPathology(itemValue);
      setSelectedPathologyType('');
    } else if (modalType === 'pathologyType') {
      setSelectedPathologyType(itemValue);
    }
    setModalVisible(false);
  };

  return (
    <ImageBackground source={backgroundImg} resizeMode="cover" style={styles.background}>
      
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={[styles.label, { textAlign: 'right' }]}>الأمراض</Text>
          <TouchableOpacity onPress={() => { setModalVisible(true); setModalType('pathology'); }} style={styles.selectBox}>
            <Text>{selectedPathology ? pathologies.find(p => p.ID.toString() === selectedPathology)?.LibelleAR : 'اختر مرضًا'}</Text>
          </TouchableOpacity>
          
          <Text style={[styles.label, { textAlign: 'right' }]}>نوع الإصابة</Text>
          <TouchableOpacity onPress={() => { setModalVisible(true); setModalType('pathologyType'); }} style={[styles.selectBox, !selectedPathology && styles.disabledSelectBox]} disabled={!selectedPathology}>
            <Text>{selectedPathologyType ? pathologyTypes.find(pt => pt.ID.toString() === selectedPathologyType)?.LibelleAR : 'اختر نوع الإصابة'}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.button, !selectedPathologyType && styles.disabledButton]}
            onPress={() => router.push({ pathname: '/agentsar', params: { pathology: selectedPathology, pathologyType: selectedPathologyType ,PathologyLabelFR: PathologyLabelFR,PathologyLabelAR: PathologyLabelAR} })}
            disabled={!selectedPathologyType}
          >
            <Text style={styles.buttonText}>عرض مسببات الأمراض</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={modalType === 'pathology' ? pathologies : pathologyTypes}
              keyExtractor={(item) => item.ID.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleSelection(item.ID.toString())} style={styles.modalItem}>
                  <Text style={styles.modalItemText}>{item.LibelleAR}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Fermer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  container: { width: '90%', alignItems: 'center' },
  card: { backgroundColor: 'white', width: '100%', padding: 20, borderRadius: 6, elevation: 5 },
  label: { fontSize: 20, fontWeight: 'bold', color: '#233b67', marginBottom: 5 },
  selectBox: { padding: 15, backgroundColor: '#ddd', borderRadius: 6, marginBottom: 20, alignItems: 'center' },
  disabledSelectBox: { backgroundColor: '#A9A9A9' },
  button: { backgroundColor: '#233b67', paddingVertical: 10, borderRadius: 6, alignItems: 'center', marginTop: 5 },
  disabledButton: { backgroundColor: '#A9A9C9' },
  buttonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  modalContainer: { flex: 1, alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  modalContent: {   position: 'absolute',
    backgroundColor: 'white',
    bottom: 0,
    width: '100%',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    maxHeight: '80%', // Limite la hauteur pour permettre le scroll
    padding: 20},
  modalItem: { padding: 15, borderBottomWidth: 1, borderBottomColor: '#ddd' },
  modalItemText: { fontSize: 18 },
  closeButton: { padding: 15, backgroundColor: '#233b67', borderRadius: 6, marginTop: 10, alignItems: 'center' },
  closeButtonText: { color: 'white', fontSize: 16 }
});

export default HomeScreen;
