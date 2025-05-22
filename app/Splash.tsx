import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import LottieView from 'lottie-react-native';
import { ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';

interface SplashProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export default function Splash({ setIsLoading }: SplashProps): JSX.Element {
  const backgroundImg = require('@/assets/images/background.png');
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace('/CreditsScreenIntro');//
    }, 2000); // Attendre 2 secondes
  }, [router]); // Ajout de `router` comme dépendance

  return (
    <ImageBackground source={backgroundImg} style={{ flex: 1 }}>
      <LottieView
        style={{ flex: 1 }}
        source={require('@/assets/Animation.json')}
        autoPlay
        loop={false}
        resizeMode="cover"
        onAnimationFinish={() => setIsLoading(false)}
      />
    </ImageBackground>
  );
}
