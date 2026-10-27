import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { BRAND, FONT, RADIUS } from '../../constants/Brand';

type Props = {
  ntab?: string | string[];
  title?: string | string[];
  onOpenPdf?: () => void;
  lang?: 'fr' | 'ar';
};

// Bandeau encre en haut des écrans de détail : n° de tableau (safran), intitulé, accès au PDF
const DetailHeader = ({ ntab, title, onOpenPdf, lang = 'fr' }: Props) => {
  const ar = lang === 'ar';
  return (
    <View style={styles.band}>
      {ntab ? (
        <View style={[styles.chip, ar && { alignSelf: 'flex-end' }]}>
          <Text style={[styles.chipText, ar && { fontFamily: FONT.arSemibold }]}>
            {ar ? `رقم الجدول ${ntab}` : `Tableau ${ntab}`}
          </Text>
        </View>
      ) : null}
      {title ? (
        <Text style={[styles.title, ar && styles.titleAr]}>{title}</Text>
      ) : null}
      {onOpenPdf ? (
        <TouchableOpacity
          style={[styles.pdfButton, ar && { flexDirection: 'row-reverse' }]}
          onPress={onOpenPdf}
          activeOpacity={0.8}
        >
          <FontAwesome name="file-pdf-o" size={18} color={BRAND.white} />
          <Text style={[styles.pdfText, ar && { fontFamily: FONT.arSemibold }]}>
            {ar ? 'النص الرسمي (PDF)' : 'Texte officiel (PDF)'}
          </Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  band: {
    backgroundColor: BRAND.ink,
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 20,
    gap: 12,
  },
  chip: {
    alignSelf: 'flex-start',
    backgroundColor: BRAND.saffron,
    borderRadius: RADIUS.sm,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  chipText: { fontFamily: FONT.semibold, fontSize: 14, color: BRAND.ink },
  title: { fontFamily: FONT.bold, fontSize: 20, lineHeight: 26, color: BRAND.white },
  titleAr: { fontFamily: FONT.arBold, textAlign: 'right', lineHeight: 32 },
  pdfButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    height: 48,
    borderRadius: RADIUS.md,
    backgroundColor: BRAND.majorelle,
  },
  pdfText: { fontFamily: FONT.semibold, fontSize: 15, color: BRAND.white },
});

export default DetailHeader;
