import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ActivityIndicator, AppState, Image, Linking, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import Constants from 'expo-constants';
import { Feather } from '@expo/vector-icons';
import { BRAND, FONT, LOGO, RADIUS } from '../../constants/Brand';

/**
 * Écrans de contrôle affichés par-dessus l'application :
 *  - pas de connexion (bloquant, disparaît dès que la connexion revient) ;
 *  - maintenance (réglage `maintenance` = 1 dans la table AppConfig) ;
 *  - mise à jour obligatoire (version < `min_version`) ou proposée (version < `latest_version`).
 * Les réglages sont lus sur api/appconfig.php au démarrage, au retour au premier plan et au retour du réseau.
 */

const CONFIG_URL = 'https://sandybrown-giraffe-796579.hostingersite.com/api/appconfig.php';
const APP_VERSION = Constants.expoConfig?.version ?? '0.0.0';

type AppConfig = Partial<Record<
  'min_version' | 'latest_version' | 'maintenance' | 'maintenance_msg_fr' | 'maintenance_msg_ar'
  | 'website_url' | 'store_ios' | 'store_android', string>>;

// -1 si a < b, 0 si égales, 1 si a > b (« 1.10.0 » > « 1.9.3 »)
export function compareVersions(a: string, b: string): number {
  const pa = a.split('.').map((n) => parseInt(n, 10) || 0);
  const pb = b.split('.').map((n) => parseInt(n, 10) || 0);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const d = (pa[i] ?? 0) - (pb[i] ?? 0);
    if (d !== 0) return d < 0 ? -1 : 1;
  }
  return 0;
}

async function fetchConfig(): Promise<AppConfig> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8000);
  try {
    const res = await fetch(CONFIG_URL, { signal: controller.signal, headers: { 'Cache-Control': 'no-cache' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } finally {
    clearTimeout(timer);
  }
}

const openUrl = (url?: string) => {
  if (url) Linking.openURL(url).catch(() => {});
};

type Action = { labelFr: string; labelAr: string; onPress: () => void; primary?: boolean; loading?: boolean };

type GateProps = {
  icon: React.ComponentProps<typeof Feather>['name'];
  titleFr: string;
  titleAr: string;
  textFr: string;
  textAr: string;
  actions: Action[];
};

// Écran bilingue (FR / AR) : affiché avant même le choix de la langue
const GateScreen = ({ icon, titleFr, titleAr, textFr, textAr, actions }: GateProps) => (
  <View style={styles.overlay} accessibilityViewIsModal>
    <ScrollView contentContainerStyle={styles.scroll} bounces={false}>
      <View style={styles.logoWrap}>
        <View style={styles.logoClip}>
          <Image source={LOGO} style={styles.logo} resizeMode="contain" accessibilityIgnoresInvertColors />
        </View>
        <View style={styles.badge}>
          <Feather name={icon} size={18} color={BRAND.ink} />
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.titleFr} accessibilityRole="header">{titleFr}</Text>
        <Text style={styles.textFr}>{textFr}</Text>
        <View style={styles.divider} />
        <Text style={styles.titleAr} accessibilityRole="header">{titleAr}</Text>
        <Text style={styles.textAr}>{textAr}</Text>
      </View>

      <View style={styles.actions}>
        {actions.map((a) => (
          <TouchableOpacity
            key={a.labelFr}
            onPress={a.onPress}
            disabled={a.loading}
            style={[styles.button, a.primary ? styles.buttonPrimary : styles.buttonGhost]}
            accessibilityRole="button"
            accessibilityLabel={`${a.labelFr} · ${a.labelAr}`}
          >
            {a.loading ? (
              <ActivityIndicator color={a.primary ? BRAND.ink : BRAND.white} />
            ) : (
              <Text style={[styles.buttonText, a.primary ? { color: BRAND.ink } : { color: BRAND.white }]}>
                {a.labelFr} · <Text style={{ fontFamily: FONT.arSemibold }}>{a.labelAr}</Text>
              </Text>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
    <Text style={styles.version}>Version {APP_VERSION}</Text>
  </View>
);

const AppGate = () => {
  const [offline, setOffline] = useState(false);
  const [config, setConfig] = useState<AppConfig | null>(null);
  const [checking, setChecking] = useState(false);
  const [updateLater, setUpdateLater] = useState(false);
  const busy = useRef(false);

  const refresh = useCallback(async () => {
    if (busy.current) return;
    busy.current = true;
    setChecking(true);
    try {
      setConfig(await fetchConfig());
    } catch {
      // serveur injoignable : on garde les derniers réglages connus, sans bloquer l'utilisateur
    } finally {
      busy.current = false;
      setChecking(false);
    }
  }, []);

  // Réseau : bloquant hors ligne, nouvelle vérification au retour de la connexion
  useEffect(() => {
    let wasOffline = false;
    const unsubscribe = NetInfo.addEventListener((state) => {
      const isOffline = state.isConnected === false || state.isInternetReachable === false;
      setOffline(isOffline);
      if (wasOffline && !isOffline) refresh();
      wasOffline = isOffline;
    });
    return unsubscribe;
  }, [refresh]);

  // Démarrage + retour au premier plan
  useEffect(() => {
    refresh();
    const sub = AppState.addEventListener('change', (s) => {
      if (s === 'active') refresh();
    });
    return () => sub.remove();
  }, [refresh]);

  const retryNetwork = useCallback(async () => {
    setChecking(true);
    const state = await NetInfo.refresh();
    const isOffline = state.isConnected === false || state.isInternetReachable === false;
    setOffline(isOffline);
    setChecking(false);
    if (!isOffline) refresh();
  }, [refresh]);

  if (offline) {
    return (
      <GateScreen
        icon="wifi-off"
        titleFr="Pas de connexion"
        titleAr="لا يوجد اتصال"
        textFr="Merci de vous connecter à Internet (Wi-Fi ou données mobiles) pour utiliser l'application."
        textAr="يرجى الاتصال بالإنترنت (Wi-Fi أو بيانات الهاتف) لاستخدام التطبيق."
        actions={[{ labelFr: 'Réessayer', labelAr: 'إعادة المحاولة', onPress: retryNetwork, primary: true, loading: checking }]}
      />
    );
  }

  if (!config) return null;

  if (config.maintenance === '1') {
    return (
      <GateScreen
        icon="tool"
        titleFr="Application en maintenance"
        titleAr="التطبيق قيد الصيانة"
        textFr={config.maintenance_msg_fr || "L'application est momentanément indisponible. Merci de réessayer un peu plus tard."}
        textAr={config.maintenance_msg_ar || 'التطبيق غير متاح مؤقتاً. يرجى المحاولة لاحقاً.'}
        actions={[
          ...(config.website_url
            ? [{ labelFr: 'Visitez le site web', labelAr: 'زوروا الموقع', onPress: () => openUrl(config.website_url), primary: true }]
            : []),
          { labelFr: 'Réessayer', labelAr: 'إعادة المحاولة', onPress: refresh, primary: !config.website_url, loading: checking },
        ]}
      />
    );
  }

  const storeUrl = Platform.OS === 'ios' ? config.store_ios : config.store_android;
  const mustUpdate = !!config.min_version && compareVersions(APP_VERSION, config.min_version) < 0;
  const canUpdate = !!config.latest_version && compareVersions(APP_VERSION, config.latest_version) < 0;

  if (mustUpdate || (canUpdate && !updateLater)) {
    return (
      <GateScreen
        icon="download"
        titleFr={mustUpdate ? 'Mise à jour nécessaire' : 'Nouvelle version disponible'}
        titleAr={mustUpdate ? 'التحديث ضروري' : 'نسخة جديدة متاحة'}
        textFr={mustUpdate
          ? "Cette version de l'application n'est plus prise en charge. Merci de la mettre à jour pour continuer."
          : "Une nouvelle version de l'application est disponible. Nous vous conseillons de la mettre à jour."}
        textAr={mustUpdate
          ? 'هذه النسخة من التطبيق لم تعد مدعومة. يرجى تحديثها للمتابعة.'
          : 'نسخة جديدة من التطبيق متاحة. ننصحكم بتحديثها.'}
        actions={[
          { labelFr: 'Mettre à jour', labelAr: 'تحديث', onPress: () => openUrl(storeUrl), primary: true },
          ...(mustUpdate ? [] : [{ labelFr: 'Plus tard', labelAr: 'لاحقاً', onPress: () => setUpdateLater(true) }]),
        ]}
      />
    );
  }

  return null;
};

const styles = StyleSheet.create({
  overlay: { ...StyleSheet.absoluteFillObject, zIndex: 1000, elevation: 1000, backgroundColor: BRAND.ink },
  scroll: { flexGrow: 1, justifyContent: 'center', alignItems: 'center', padding: 24, gap: 24 },
  logoWrap: {
    width: 132, height: 132, borderRadius: 66, backgroundColor: BRAND.white,
    alignItems: 'center', justifyContent: 'center',
  },
  logoClip: { ...StyleSheet.absoluteFillObject, borderRadius: 66, overflow: 'hidden', alignItems: 'center', justifyContent: 'center' },
  logo: { width: 180, height: 180 },
  badge: {
    position: 'absolute', right: -2, bottom: -2,
    width: 40, height: 40, borderRadius: 20, backgroundColor: BRAND.saffron,
    alignItems: 'center', justifyContent: 'center', borderWidth: 3, borderColor: BRAND.ink,
  },
  card: {
    width: '100%', maxWidth: 480,
    backgroundColor: 'rgba(255,255,255,0.06)', borderWidth: 1, borderColor: 'rgba(255,255,255,0.14)',
    borderRadius: RADIUS.lg, padding: 20,
  },
  titleFr: { fontFamily: FONT.bold, fontSize: 20, color: BRAND.white, marginBottom: 6 },
  textFr: { fontFamily: FONT.regular, fontSize: 15, lineHeight: 22, color: BRAND.onInkMuted },
  titleAr: { fontFamily: FONT.arBold, fontSize: 20, color: BRAND.white, marginBottom: 6, textAlign: 'right', writingDirection: 'rtl' },
  textAr: { fontFamily: FONT.arRegular, fontSize: 15, lineHeight: 26, color: BRAND.onInkMuted, textAlign: 'right', writingDirection: 'rtl' },
  divider: { height: 1, backgroundColor: 'rgba(255,255,255,0.14)', marginVertical: 16 },
  actions: { width: '100%', maxWidth: 480, gap: 12 },
  button: { minHeight: 52, borderRadius: RADIUS.pill, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20 },
  buttonPrimary: { backgroundColor: BRAND.saffron },
  buttonGhost: { borderWidth: 1, borderColor: 'rgba(255,255,255,0.3)' },
  buttonText: { fontFamily: FONT.semibold, fontSize: 16 },
  version: {
    position: 'absolute', bottom: 12, alignSelf: 'center',
    fontFamily: FONT.regular, fontSize: 12, color: BRAND.onInkMuted,
  },
});

export default AppGate;
