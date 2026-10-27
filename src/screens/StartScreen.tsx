// @ts-nocheck
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
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import { COLORS, RADIUS, SHADOW, SPACING } from '../theme';

const image = require('../assets/images/background1.png');

const MENU_ITEMS = [
  { label: 'Pathologies', icon: 'activity', route: 'Home' },
  { label: 'Agents pathogènes', icon: 'users', route: 'AllAgents' },
  { label: 'N° de Tableau', icon: 'grid', route: 'NTableau' },
];

const StartScreen = () => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(24)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 700, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 0, duration: 700, useNativeDriver: true }),
    ]).start();
  }, []);

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.background}>
      <View style={styles.overlay} />
      <SafeAreaView style={styles.safeArea}>
        <Animated.View
          style={[
            styles.content,
            { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
          ]}>

          <View style={styles.titleSection}>
            <Text style={styles.title}>Menu Principal</Text>
            <Text style={styles.subtitle}>Sélectionnez une catégorie</Text>
          </View>

          <View style={styles.menuContainer}>
            {MENU_ITEMS.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.menuCard}
                onPress={() => navigation.navigate(item.route)}
                activeOpacity={0.82}>
                <View style={styles.iconBox}>
                  <Feather name={item.icon} size={22} color={COLORS.primaryLight} />
                </View>
                <Text style={styles.menuLabel}>{item.label}</Text>
                <Feather name="chevron-right" size={20} color={COLORS.text.light} />
              </TouchableOpacity>
            ))}
          </View>
        </Animated.View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1 },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(20, 32, 55, 0.50)',
  },
  safeArea: { flex: 1 },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SPACING.lg,
  },
  titleSection: {
    alignItems: 'center',
    marginBottom: SPACING.xl,
  },
  title: {
    color: COLORS.white,
    fontSize: 26,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: SPACING.xs,
  },
  subtitle: {
    color: 'rgba(255,255,255,0.65)',
    fontSize: 14,
    letterSpacing: 0.3,
  },
  menuContainer: {
    width: '100%',
  },
  menuCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.lg,
    paddingVertical: SPACING.md + 2,
    paddingHorizontal: SPACING.md,
    marginBottom: SPACING.md,
    ...SHADOW.md,
  },
  iconBox: {
    width: 46,
    height: 46,
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.iconBg,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SPACING.md,
  },
  menuLabel: {
    flex: 1,
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default StartScreen;
