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

  const handleNavigationPath = () => {
    router.push("/HomeScreen");
  };


  const handleChangeLanguage = () => {
    // Revenir à l'écran précédent
    router.back();

    // Rediriger vers l'écran en arabe après
    router.push({
      pathname: '/StartScreenAR',

    });
  };
  const handleNavigationAllAgents = () => {
    router.push("/AllAgentsScreen");
  };

  const handleNavigationNtab = () => {
    router.push("/AllNTableauScreen");
  };

  const entries = [
    { label: 'Pathologies', hint: 'Par pathologie et type d\'atteinte', icon: 'activity', onPress: handleNavigationPath },
    { label: 'Agents pathogènes', hint: 'Rechercher un agent', icon: 'search', onPress: handleNavigationAllAgents },
    { label: 'N° de Tableau', hint: 'Accès direct par numéro', icon: 'grid', onPress: handleNavigationNtab },
  ];

  return (
    <View style={styles.background}>
      <View style={styles.topRow}>
        <View style={styles.brand}>
          <View style={styles.logoWrap}>
            <Image source={LOGO} style={styles.logo} resizeMode="contain" />
          </View>
          <Text style={styles.brandText}>Maladies{'\n'}professionnelles</Text>
        </View>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => router.push({ pathname: '/HistoryScreen'})}
          accessibilityLabel="Historique"
        >
          <Image source={historyIcon} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Que recherchez-vous ?</Text>

      <View style={styles.buttonWrapper}>
        {entries.map((e) => (
          <TouchableOpacity key={e.label} style={styles.button} onPress={e.onPress} activeOpacity={0.75}>
            <View style={styles.buttonIcon}>
              <Feather name={e.icon} size={22} color={BRAND.majorelle} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.buttonText}>{e.label}</Text>
              <Text style={styles.buttonHint}>{e.hint}</Text>
            </View>
            <Feather name="chevron-right" size={22} color={BRAND.slate} />
          </TouchableOpacity>
        ))}
      </View>

      <LangSwitch onPress={handleChangeLanguage} to="ar" />
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
  brandText: { fontFamily: FONT.semibold, fontSize: 14, lineHeight: 18, color: BRAND.ink },
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
    fontFamily: FONT.bold,
    fontSize: 26,
    color: BRAND.ink,
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
    fontFamily: FONT.semibold,
    color: BRAND.ink,
    fontSize: 17,
  },
  buttonHint: {
    fontFamily: FONT.regular,
    color: BRAND.slate,
    fontSize: 13,
    marginTop: 2,
  },
});

export default StartScreen;
