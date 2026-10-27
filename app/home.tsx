import React from 'react';
import { useRouter } from "expo-router";
import { Image, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { BRAND, FONT, LOGO } from '../constants/Brand';

const home = () => {

  const router = useRouter();
  // Gérer la navigation lorsque l'écran est touché
  const handleScreenTouch = () => {
   // router.push("/construction");
router.push("/LangChoice");
  };

  return (
    <TouchableOpacity style={{ flex: 1 }} activeOpacity={1} onPress={handleScreenTouch}>
      <View style={styles.background}>
        <View style={styles.center}>
          <View style={styles.logoWrap}>
            <Image source={LOGO} style={styles.logo} resizeMode="contain" />
          </View>
          <View style={styles.card}>
            <Text style={styles.textFr}>
              Cette application vous propose les dispositifs réglementaires concernant
              les maladies professionnelles extraits du Bulletin Officiel marocain N° 160-14 du 19 Rabii I 1435 (21 janvier 2014)
            </Text>
            <View style={styles.divider} />
            <Text style={styles.textAr}>
              هذا التطبيق يقدم لك الأنظمة التنظيمية المتعلقة بأمراض العمل من مرسوم المغربي
              الرسمي رقم 160-14 بتاريخ 19 ربيع الأول 1435 هـ (21 يناير 2014)
            </Text>
          </View>
          <Text style={styles.hint}>Touchez pour continuer · اضغط للمتابعة</Text>
        </View>
        <Text style={styles.copyrightText}>
          Copyright © 2025 FD. Tous droits réservés.
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: BRAND.ink,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    gap: 24,
  },
  logoWrap: {
    width: 148,
    height: 148,
    borderRadius: 74,
    backgroundColor: BRAND.white,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  logo: { width: 200, height: 200 },
  card: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.14)',
    borderRadius: 20,
    padding: 20,
  },
  textFr: {
    fontFamily: FONT.regular,
    fontSize: 15,
    lineHeight: 23,
    color: BRAND.white,
  },
  textAr: {
    fontFamily: FONT.arRegular,
    fontSize: 15,
    lineHeight: 26,
    color: BRAND.white,
    textAlign: 'right',
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.14)',
    marginVertical: 16,
  },
  hint: {
    fontFamily: FONT.medium,
    fontSize: 13,
    color: BRAND.saffron,
  },
  copyrightText: {
    position: 'absolute',
    bottom: 12,
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: FONT.regular,
    fontSize: 12,
    color: BRAND.onInkMuted,
  },
});

export default home;
