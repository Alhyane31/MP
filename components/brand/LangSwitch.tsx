import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BRAND, FONT, RADIUS } from '../../constants/Brand';

type Props = {
  onPress: () => void;
  // langue vers laquelle on bascule
  to: 'fr' | 'ar';
  onDark?: boolean;
};

// Pastille flottante « Voir en arabe » / « تغيير اللغة إلى الفرنسية »
const LangSwitch = ({ onPress, to, onDark = false }: Props) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.pill, onDark ? styles.pillDark : styles.pillLight]}
    accessibilityRole="button"
  >
    <Text style={[styles.text, { fontFamily: to === 'ar' ? FONT.semibold : FONT.arSemibold }, onDark && { color: BRAND.white }]}>
      {to === 'ar' ? 'Voir en arabe · ع' : 'تغيير اللغة إلى الفرنسية · FR'}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  pill: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    minHeight: 44,
    paddingHorizontal: 18,
    borderRadius: RADIUS.pill,
    justifyContent: 'center',
    borderWidth: 1,
  },
  pillLight: {
    backgroundColor: BRAND.white,
    borderColor: BRAND.borderStrong,
    shadowColor: BRAND.ink,
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  pillDark: { backgroundColor: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.3)' },
  text: { fontSize: 14, color: BRAND.majorelle },
});

export default LangSwitch;
