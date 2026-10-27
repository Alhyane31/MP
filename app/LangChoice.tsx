import { useRouter } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Text, Animated, Image, StyleSheet } from 'react-native';
import { BRAND, FONT, LOGO, RADIUS } from '../constants/Brand';

const LangChoice = () => {
  const [textVisible, setTextVisible] = useState(true);
  const [fadeAnim] = useState(new Animated.Value(0));
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/StartScreen");
  };

  const handleArabicNavigation = () => {
    router.push("/StartScreenAR");
  };

  // Animation du texte
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      setTextVisible(true);
    });
  }, [fadeAnim]);

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        {textVisible && (
          <Animated.View style={[styles.animatedView, { opacity: fadeAnim }]}>
            <View style={styles.logoWrap}>
              <Image source={LOGO} style={styles.logo} resizeMode="contain" />
            </View>

            <Text style={styles.text}>Choisissez la langue</Text>
            <Text style={styles.textAr}>اختر اللغة</Text>

            {/* Conteneur des boutons */}
            <View style={styles.buttonWrapper}>
              <TouchableOpacity style={[styles.button, styles.buttonPrimary]} onPress={handleNavigation}>
                <Text style={[styles.buttonText, styles.buttonTextPrimary]}>Français</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleArabicNavigation}>
                <Text style={[styles.buttonText, { fontFamily: FONT.arSemibold }]}>العربية</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        )}

        <Text style={styles.copyrightText}> Copyright © 2025 FD. Tous droits réservés. </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: BRAND.chalk,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animatedView: {
    alignItems: 'center',
    width: '84%',
  },
  logoWrap: {
    width: 128,
    height: 128,
    borderRadius: 64,
    backgroundColor: BRAND.white,
    borderWidth: 1,
    borderColor: BRAND.border,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginBottom: 28,
  },
  logo: { width: 172, height: 172 },
  text: {
    color: BRAND.ink,
    textAlign: 'center',
    fontFamily: FONT.bold,
    fontSize: 24,
  },
  textAr: {
    color: BRAND.slate,
    textAlign: 'center',
    fontFamily: FONT.arMedium,
    fontSize: 18,
    marginTop: 4,
    marginBottom: 28,
  },
  buttonWrapper: {
    width: '100%',
    gap: 12,
  },
  button: {
    width: '100%',
    height: 54,
    backgroundColor: BRAND.white,
    borderWidth: 1,
    borderColor: BRAND.borderStrong,
    borderRadius: RADIUS.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPrimary: {
    backgroundColor: BRAND.majorelle,
    borderColor: BRAND.majorelle,
  },
  buttonText: {
    color: BRAND.ink,
    fontFamily: FONT.semibold,
    fontSize: 17,
  },
  buttonTextPrimary: {
    color: BRAND.white,
  },
  copyrightText: {
    position: 'absolute',
    bottom: 20,
    textAlign: 'center',
    width: '100%',
    color: BRAND.slate,
    fontFamily: FONT.regular,
    fontSize: 12,
  },
});

export default LangChoice;
