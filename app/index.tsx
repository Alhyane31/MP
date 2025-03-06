import { useEffect } from 'react';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace('/Splash');
    }, 300); // Redirige vers Splash
  }, []);

  return null; // Rien à afficher
}