/* eslint-disable react-native/no-inline-styles */
// @ts-nocheck
import { useRouter } from 'expo-router';
import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import historyIcon from '@/assets/icons/history.png';
import { BRAND, FONT, LOGO, RADIUS } from '../constants/Brand';
import LangSwitch from '../components/brand/LangSwitch';

const StartScreen = () => {
  const router = useRouter();
  const handleChangeLanguage = () => {
    // Revenir à l'écran précédent
    router.back();

    // Rediriger vers l'écran en arabe après
    router.push({
      pathname: '/StartScreen',

    });
  };
  const handleNavigationPath = () => {
    router.push("/HomeScreenAR");
  };

  const handleNavigationAllAgents = () => {
    router.push("/AllAgentsScreenAR");
  };

  const handleNavigationNtab = () => {
    router.push("/AllNTableauScreenAR");
  };

  const entries = [
    { label: 'الأمراض', hint: 'حسب المرض ونوع الإصابة', icon: 'activity', onPress: handleNavigationPath },
    { label: 'العوامل الممرضة', hint: 'البحث عن عامل ممرض', icon: 'search', onPress: handleNavigationAllAgents },
    { label: 'رقم الجدول', hint: 'الوصول المباشر بالرقم', icon: 'grid', onPress: handleNavigationNtab },
  ];

  return (
    <View style={styles.background}>
      <View style={styles.topRow}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => router.push({ pathname: '/HistoryScreenAR'})}
          accessibilityLabel="السجل"
        >
          <Image source={historyIcon} style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.brand}>
          <Text style={styles.brandText}>الأمراض المهنية</Text>
          <View style={styles.logoWrap}>
            <Image source={LOGO} style={styles.logo} resizeMode="contain" />
          </View>
        </View>
      </View>

      <Text style={styles.title}>عمّا تبحث؟</Text>

      <View style={styles.buttonWrapper}>
        {entries.map((e) => (
          <TouchableOpacity key={e.label} style={styles.button} onPress={e.onPress} activeOpacity={0.75}>
            <Feather name="chevron-left" size={22} color={BRAND.slate} />
            <View style={{ flex: 1 }}>
              <Text style={styles.buttonText}>{e.label}</Text>
              <Text style={styles.buttonHint}>{e.hint}</Text>
            </View>
            <View style={styles.buttonIcon}>
              <Feather name={e.icon} size={22} color={BRAND.majorelle} />
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <LangSwitch onPress={handleChangeLanguage} to="fr" />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: BRAND.chalk,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 28,
  },
  brand: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  logoWrap: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: BRAND.white,
    borderWidth: 1,
    borderColor: BRAND.border,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  logo: { width: 76, height: 76 },
  brandText: { fontFamily: FONT.arSemibold, fontSize: 16, color: BRAND.ink },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: BRAND.white,
    borderWidth: 1,
    borderColor: BRAND.borderStrong,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 22,
    height: 22,
    tintColor: BRAND.ink,
  },
  title: {
    fontFamily: FONT.arBold,
    fontSize: 26,
    color: BRAND.ink,
    textAlign: 'right',
    marginBottom: 16,
  },
  buttonWrapper: {
    gap: 12,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    backgroundColor: BRAND.white,
    borderWidth: 1,
    borderColor: BRAND.border,
    borderRadius: RADIUS.lg,
    padding: 16,
  },
  buttonIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: BRAND.mist,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: FONT.arSemibold,
    color: BRAND.ink,
    fontSize: 17,
    textAlign: 'right',
  },
  buttonHint: {
    fontFamily: FONT.arRegular,
    color: BRAND.slate,
    fontSize: 13,
    marginTop: 2,
    textAlign: 'right',
  },
});

export default StartScreen;
