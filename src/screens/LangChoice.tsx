// @ts-nocheck
import { useNavigation } from '@react-navigation/native';
import { BlurView } from 'expo-blur';
import React, { useEffect, useRef } from 'react';
import {
  Animated,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { setupDatabase } from '../utils/database';
import { COLORS, RADIUS, SHADOW, SPACING } from '../theme';

const backgroundImg = require('../assets/images/background1.png');

const LangChoice = () => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const brandingSlide = useRef(new Animated.Value(-20)).current;
  const cardSlide = useRef(new Animated.Value(40)).current;
  const logoScale = useRef(new Animated.Value(0.7)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(fadeAnim, { toValue: 1, duration: 600, useNativeDriver: true }),
        Animated.spring(logoScale, { toValue: 1, tension: 70, friction: 8, useNativeDriver: true }),
        Animated.spring(brandingSlide, { toValue: 0, tension: 60, friction: 10, useNativeDriver: true }),
      ]),
      Animated.spring(cardSlide, { toValue: 0, tension: 55, friction: 10, useNativeDriver: true }),
    ]).start();
  }, []);

  useEffect(() => {
    setupDatabase().catch(e => console.error('DB setup failed:', e));
  }, []);

  return (
    <ImageBackground source={backgroundImg} style={styles.bg} resizeMode="cover">
      <View style={styles.overlay} />
      <SafeAreaView style={styles.safe}>

        {/* Branding */}
        <Animated.View
          style={[
            styles.branding,
            {
              opacity: fadeAnim,
              transform: [{ translateY: brandingSlide }, { scale: logoScale }],
            },
          ]}>
          <View style={styles.logoRing}>
            <Text style={styles.logoSymbol}>✚</Text>
          </View>
          <Text style={styles.appTitle}>TMP-MAROC</Text>
          <Text style={styles.appSub}>Tableaux des Maladies Professionnelles</Text>
        </Animated.View>

        {/* Language card */}
        <Animated.View
          style={[styles.cardWrap, { opacity: fadeAnim, transform: [{ translateY: cardSlide }] }]}>
          <BlurView intensity={80} tint="light" style={styles.card}>

            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Choisissez la langue</Text>
              <Text style={styles.cardTitleAR}>اختر اللغة</Text>
            </View>

            <View style={styles.divider} />

            {/* French */}
            <TouchableOpacity
              style={styles.langRow}
              onPress={() => navigation.navigate('Start')}
              activeOpacity={0.72}>
              <View style={[styles.flagBadge, { backgroundColor: '#EEF4FF' }]}>
                <Text style={styles.flagEmoji}>🇫🇷</Text>
              </View>
              <View style={styles.langInfo}>
                <Text style={styles.langName}>Français</Text>
                <Text style={styles.langHint}>Version française</Text>
              </View>
              <View style={[styles.arrowBadge, { backgroundColor: COLORS.french + '18' }]}>
                <Text style={[styles.arrowText, { color: COLORS.french }]}>›</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.rowSep} />

            {/* Arabic */}
            <TouchableOpacity
              style={styles.langRow}
              onPress={() => navigation.navigate('StartAR')}
              activeOpacity={0.72}>
              <View style={[styles.flagBadge, { backgroundColor: '#FFF0F0' }]}>
                <Text style={styles.flagEmoji}>🇲🇦</Text>
              </View>
              <View style={styles.langInfo}>
                <Text style={styles.langName}>العربية</Text>
                <Text style={styles.langHint}>النسخة العربية</Text>
              </View>
              <View style={[styles.arrowBadge, { backgroundColor: COLORS.arabic + '18' }]}>
                <Text style={[styles.arrowText, { color: COLORS.arabic }]}>›</Text>
              </View>
            </TouchableOpacity>

          </BlurView>
        </Animated.View>

        <Animated.Text style={[styles.copyright, { opacity: fadeAnim }]}>
          © 2024 TMP-MAROC · Tous droits réservés
        </Animated.Text>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bg: { flex: 1 },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(12, 22, 42, 0.68)',
  },
  safe: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: SPACING.xl,
    paddingHorizontal: SPACING.lg,
  },

  // Branding
  branding: {
    alignItems: 'center',
    marginTop: SPACING.lg,
  },
  logoRing: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.28)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.md,
  },
  logoSymbol: {
    fontSize: 34,
    color: '#FFFFFF',
  },
  appTitle: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '800',
    letterSpacing: 5,
    marginBottom: SPACING.xs,
  },
  appSub: {
    color: 'rgba(255,255,255,0.55)',
    fontSize: 12,
    textAlign: 'center',
    maxWidth: 240,
    lineHeight: 19,
    letterSpacing: 0.3,
  },

  // Card
  cardWrap: {
    width: '100%',
    borderRadius: RADIUS.xl,
    overflow: 'hidden',
    ...SHADOW.lg,
  },
  card: {
    padding: SPACING.lg,
  },
  cardHeader: {
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  cardTitle: {
    color: COLORS.primary,
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  cardTitleAR: {
    color: 'rgba(29,48,76,0.5)',
    fontSize: 13,
    marginTop: 2,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(29,48,76,0.08)',
    marginBottom: SPACING.sm,
  },

  // Language rows
  langRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.xs,
    borderRadius: RADIUS.lg,
    gap: SPACING.md,
  },
  flagBadge: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flagEmoji: {
    fontSize: 28,
  },
  langInfo: {
    flex: 1,
  },
  langName: {
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 2,
  },
  langHint: {
    color: 'rgba(29,48,76,0.45)',
    fontSize: 12,
  },
  arrowBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowText: {
    fontSize: 26,
    fontWeight: '300',
    lineHeight: 32,
  },
  rowSep: {
    height: 1,
    backgroundColor: 'rgba(29,48,76,0.06)',
    marginHorizontal: SPACING.sm,
  },

  copyright: {
    color: 'rgba(255,255,255,0.3)',
    fontSize: 11,
    letterSpacing: 0.3,
  },
});

export default LangChoice;
