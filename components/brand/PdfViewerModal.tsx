import React, { useEffect, useState } from 'react';
import { Linking, Modal, SafeAreaView, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { BRAND, FONT, RADIUS } from '../../constants/Brand';

type Props = {
  selectedFile: string | null;
  pdfUrl: string;
  onClose: () => void;
  lang?: 'fr' | 'ar';
  // detailsNtableau : affiche le PDF directement pendant le compte à rebours
  directViewWhileDownloading?: boolean;
};

const PdfViewerModal = ({ selectedFile, pdfUrl, onClose, lang = 'fr', directViewWhileDownloading = false }: Props) => {
  const [showDownloadView, setShowDownloadView] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const ar = lang === 'ar';

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

  const labelFont = ar ? FONT.arSemibold : FONT.semibold;

  return (
    <Modal visible={Boolean(selectedFile)} animationType="slide" onRequestClose={onClose}>
      <SafeAreaView style={styles.safe}>
        <View style={styles.viewer}>
          {directViewWhileDownloading && showDownloadView ? (
            // WebView affichant le fichier PDF directement
            <WebView source={{ uri: pdfUrl }} style={{ flex: 1 }} />
          ) : (
            // WebView intégrée via Google Viewer
            <WebView
              key={selectedFile}
              source={{ uri: `https://docs.google.com/gview?embedded=true&url=${pdfUrl}` }}
              style={{ flex: 1 }}
              onError={() => {
                console.error('Erreur de chargement du PDF');
              }}
            />
          )}
        </View>

        <View style={[styles.actions, ar && { flexDirection: 'row-reverse' }]}>
          <TouchableOpacity
            onPress={countdown === 0 ? handleDownload : undefined}
            disabled={countdown > 0}
            style={[styles.button, styles.primary, countdown > 0 && styles.primaryWaiting]}
          >
            <Text style={[styles.buttonText, { fontFamily: labelFont }]}>
              {countdown > 0
                ? (ar ? `انتظر... ${countdown}ث` : `Patientez... ${countdown}s`)
                : (ar ? 'تحميل' : 'Télécharger')}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onClose} style={[styles.button, styles.secondary]}>
            <Text style={[styles.buttonText, { fontFamily: labelFont }]}>{ar ? 'إغلاق' : 'Fermer'}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: BRAND.ink },
  viewer: { flex: 1, backgroundColor: BRAND.white },
  actions: { flexDirection: 'row', gap: 10, padding: 12, backgroundColor: BRAND.ink },
  button: { flex: 1, height: 52, borderRadius: RADIUS.md, alignItems: 'center', justifyContent: 'center' },
  primary: { backgroundColor: BRAND.majorelle },
  primaryWaiting: { backgroundColor: BRAND.slateDark },
  secondary: { borderWidth: 1, borderColor: 'rgba(255,255,255,0.35)' },
  buttonText: { color: BRAND.white, fontSize: 16 },
});

export default PdfViewerModal;
