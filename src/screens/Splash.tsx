import React, { useEffect, Dispatch, SetStateAction } from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { SPLASH_HTML } from '../assets/splashHtml';

interface SplashProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export default function Splash({ setIsLoading }: SplashProps): JSX.Element {
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <WebView
      source={{ html: SPLASH_HTML }}
      style={StyleSheet.absoluteFill}
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      overScrollMode="never"
    />
  );
}

const styles = StyleSheet.create({});
