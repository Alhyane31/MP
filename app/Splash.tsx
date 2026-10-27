import React from 'react';
import { StyleSheet } from 'react-native';
import { WebView, WebViewMessageEvent } from 'react-native-webview';
import { useRouter } from 'expo-router';
import { SPLASH_HTML } from '@/assets/splashHtml';

const INJECTED_JS = `
  document.body.addEventListener('click', function() {
    window.ReactNativeWebView.postMessage('navigate');
  });
  true;
`;

export default function Splash(): React.ReactElement {
  const router = useRouter();

  const handleMessage = (event: WebViewMessageEvent) => {
    if (event.nativeEvent.data === 'navigate') {
      router.replace('/home');
    }
  };

  return (
    <WebView
      source={{ html: SPLASH_HTML }}
      style={StyleSheet.absoluteFill}
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      overScrollMode="never"
      injectedJavaScript={INJECTED_JS}
      onMessage={handleMessage}
    />
  );
}
