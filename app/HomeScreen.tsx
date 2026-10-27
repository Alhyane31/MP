import React, { useEffect, useState } from 'react'; 
import { fetchPathTypes, fetchPathologyTypes ,updatePathologyHistory} from '@/assets/utils/api';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Modal, 
  FlatList
} from 'react-native';
import { useRouter } from 'expo-router';

import { Feather } from '@expo/vector-icons';
import { BRAND, FONT, RADIUS } from '../constants/Brand';

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
 
  const PathologyLabelFR = pathologyTypes.find(
    (pathologyTypes) => pathologyTypes.ID.toString() === selectedPathologyType
  )?.LibelleFR;
  const PathologyLabelAR= pathologyTypes.find(
    (pathologyTypes) => pathologyTypes.ID.toString() === selectedPathologyType
  )?.LibelleAR;
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

  const stepOneDone = Boolean(selectedPathology);
  const stepTwoDone = Boolean(selectedPathologyType);

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Rechercher par pathologie</Text>
        <View style={styles.card}>
          <View style={styles.stepRow}>
            <View style={[styles.stepDot, styles.stepDotActive]}><Text style={styles.stepDotTextActive}>1</Text></View>
            <Text style={styles.label}>Pathologies</Text>
          </View>
          <TouchableOpacity onPress={() => { setModalVisible(true); setModalType('pathology'); }} style={[styles.selectBox, stepOneDone && styles.selectBoxFilled]}>
            <Text style={[styles.selectText, !stepOneDone && styles.placeholder]} numberOfLines={2}>{selectedPathology ? pathologies.find(p => p.ID.toString() === selectedPathology)?.LibelleFR : 'Sélectionnez une pathologie'}</Text>
            <Feather name="chevron-down" size={20} color={stepOneDone ? BRAND.majorelle : BRAND.slate} />
          </TouchableOpacity>

          <View style={[styles.stepRow, !stepOneDone && styles.dim]}>
            <View style={[styles.stepDot, stepOneDone && styles.stepDotActive]}><Text style={stepOneDone ? styles.stepDotTextActive : styles.stepDotText}>2</Text></View>
            <Text style={styles.label}>Type d'atteinte</Text>
          </View>
          <TouchableOpacity onPress={() => { setModalVisible(true); setModalType('pathologyType'); }} style={[styles.selectBox, stepTwoDone && styles.selectBoxFilled, !selectedPathology && styles.disabledSelectBox]} disabled={!selectedPathology}>
            <Text style={[styles.selectText, !stepTwoDone && styles.placeholder]} numberOfLines={2}>{selectedPathologyType ? pathologyTypes.find(pt => pt.ID.toString() === selectedPathologyType)?.LibelleFR : 'Sélectionnez type d\'atteinte'}</Text>
            <Feather name="chevron-down" size={20} color={stepTwoDone ? BRAND.majorelle : BRAND.slate} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, !selectedPathologyType && styles.disabledButton]}
            onPress={async() =>{console.log(selectedPathologyType);await updatePathologyHistory(parseInt(selectedPathologyType, 10)); router.push({ pathname: '/agentsfr', params: { pathology: selectedPathology, pathologyType: selectedPathologyType ,PathologyLabelFR: PathologyLabelFR,PathologyLabelAR: PathologyLabelAR} })}}
            disabled={!selectedPathologyType}
          >
            <Text style={styles.buttonText}>Afficher les agents</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal visible={modalVisible} animationType="slide" transparent onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={StyleSheet.absoluteFill} onPress={() => setModalVisible(false)} />
          <View style={styles.modalContent}>
            <View style={styles.handle} />
            <Text style={styles.modalTitle}>{modalType === 'pathology' ? "Pathologies" : "Type d'atteinte"}</Text>
            <FlatList
              data={modalType === 'pathology' ? pathologies : pathologyTypes}
              keyExtractor={(item) => item.ID.toString()}
              renderItem={({ item }) => {
                const selected = item.ID.toString() === (modalType === 'pathology' ? selectedPathology : selectedPathologyType);
                return (
                  <TouchableOpacity onPress={() => handleSelection(item.ID.toString())} style={[styles.modalItem, selected && styles.modalItemActive]}>
                    <Text style={[styles.modalItemText, selected && styles.modalItemTextActive]}>{item.LibelleFR}</Text>
                  </TouchableOpacity>
                );
              }}
            />
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Fermer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1, backgroundColor: BRAND.chalk },
  container: { padding: 20 },
  title: { fontFamily: FONT.bold, fontSize: 24, color: BRAND.ink, marginBottom: 16, textAlign: 'left' },
  card: { backgroundColor: BRAND.white, padding: 20, borderRadius: RADIUS.lg, borderWidth: 1, borderColor: BRAND.border },
  stepRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 8 },
  dim: { opacity: 0.5 },
  stepDot: { width: 22, height: 22, borderRadius: 11, backgroundColor: BRAND.mist, alignItems: 'center', justifyContent: 'center' },
  stepDotActive: { backgroundColor: BRAND.majorelle },
  stepDotText: { fontFamily: FONT.bold, fontSize: 12, color: BRAND.majorelleDark },
  stepDotTextActive: { fontFamily: FONT.bold, fontSize: 12, color: BRAND.white },
  label: { fontFamily: FONT.semibold, fontSize: 12, color: BRAND.slateDark, letterSpacing: 0.8, textTransform: 'uppercase' },
  selectBox: { flexDirection: 'row', alignItems: 'center', gap: 10, minHeight: 52, paddingHorizontal: 14, paddingVertical: 12, backgroundColor: BRAND.chalk, borderWidth: 1, borderColor: BRAND.borderStrong, borderRadius: RADIUS.md, marginBottom: 20 },
  selectBoxFilled: { backgroundColor: BRAND.white, borderWidth: 2, borderColor: BRAND.majorelle },
  selectText: { flex: 1, fontFamily: FONT.medium, fontSize: 15, color: BRAND.ink, textAlign: 'left' },
  placeholder: { fontFamily: FONT.regular, color: BRAND.slate },
  disabledSelectBox: { opacity: 0.5 },
  button: { backgroundColor: BRAND.majorelle, height: 52, borderRadius: RADIUS.md, alignItems: 'center', justifyContent: 'center' },
  disabledButton: { backgroundColor: BRAND.disabled },
  buttonText: { color: BRAND.white, fontSize: 16, fontFamily: FONT.semibold },
  modalContainer: { flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(15,34,56,0.5)' },
  modalContent: {
    backgroundColor: BRAND.white,
    width: '100%',
    borderTopLeftRadius: RADIUS.lg,
    borderTopRightRadius: RADIUS.lg,
    maxHeight: '80%', // Limite la hauteur pour permettre le scroll
    padding: 20,
  },
  handle: { width: 40, height: 4, borderRadius: 2, backgroundColor: BRAND.borderStrong, alignSelf: 'center', marginBottom: 14 },
  modalTitle: { fontFamily: FONT.bold, fontSize: 17, color: BRAND.ink, marginBottom: 10, textAlign: 'left' },
  modalItem: { paddingVertical: 14, paddingHorizontal: 10, borderRadius: RADIUS.sm, borderBottomWidth: 1, borderBottomColor: '#EDF0F5' },
  modalItemActive: { backgroundColor: BRAND.mist, borderBottomColor: BRAND.mist },
  modalItemText: { fontFamily: FONT.regular, fontSize: 16, color: BRAND.ink, textAlign: 'left' },
  modalItemTextActive: { fontFamily: FONT.semibold, color: BRAND.majorelleDark },
  closeButton: { height: 52, borderRadius: RADIUS.md, marginTop: 12, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: BRAND.borderStrong },
  closeButtonText: { fontFamily: FONT.semibold, color: BRAND.ink, fontSize: 16 }
});

export default HomeScreen;
