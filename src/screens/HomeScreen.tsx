// @ts-nocheck
import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  FlatList,
  ImageBackground,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { openDatabase } from '../utils/database';
import { COLORS, RADIUS, SHADOW, SPACING } from '../theme';

const image = require('../assets/images/background.png');

// ── Custom Select Field ──────────────────────────────────────────────────────

const SelectField = ({ label, value, placeholder, options, onSelect, disabled, labelKey }) => {
  const [open, setOpen] = useState(false);
  const selectedLabel = options.find(o => o.ID?.toString() === value)?.[labelKey];

  return (
    <View style={sf.wrap}>
      <Text style={[sf.label, disabled && sf.labelDim]}>{label}</Text>

      <TouchableOpacity
        style={[sf.btn, disabled && sf.btnDim]}
        onPress={() => !disabled && setOpen(true)}
        activeOpacity={0.75}
        disabled={disabled}>
        <Text style={[sf.btnText, !selectedLabel && sf.placeholder]} numberOfLines={1}>
          {selectedLabel || placeholder}
        </Text>
        <Text style={sf.chevron}>⌄</Text>
      </TouchableOpacity>

      <Modal visible={open} transparent animationType="slide" onRequestClose={() => setOpen(false)}>
        <View style={sf.backdrop}>
          <TouchableOpacity style={StyleSheet.absoluteFill} onPress={() => setOpen(false)} />
          <View style={sf.sheet}>
            <View style={sf.handle} />
            <Text style={sf.sheetTitle}>{label}</Text>
            <FlatList
              data={options}
              keyExtractor={(_, i) => i.toString()}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={() => <View style={sf.itemSep} />}
              renderItem={({ item }) => {
                const selected = item.ID?.toString() === value;
                return (
                  <TouchableOpacity
                    style={[sf.item, selected && sf.itemActive]}
                    onPress={() => { onSelect(item.ID.toString()); setOpen(false); }}
                    activeOpacity={0.68}>
                    <Text style={[sf.itemText, selected && sf.itemTextActive]}>
                      {item[labelKey]}
                    </Text>
                    {selected && <Text style={sf.check}>✓</Text>}
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const sf = StyleSheet.create({
  wrap: { marginBottom: SPACING.md },
  label: {
    color: COLORS.primaryLight,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.9,
    textTransform: 'uppercase',
    marginBottom: 6,
  },
  labelDim: { color: COLORS.text.light },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.offWhite,
    borderWidth: 1.5,
    borderColor: COLORS.border,
    borderRadius: RADIUS.md,
    paddingHorizontal: SPACING.md,
    paddingVertical: 14,
    minHeight: 52,
  },
  btnDim: { opacity: 0.42 },
  btnText: { flex: 1, color: COLORS.primary, fontSize: 15, fontWeight: '500' },
  placeholder: { color: COLORS.text.muted },
  chevron: { fontSize: 18, color: COLORS.text.muted, lineHeight: 22 },
  backdrop: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.42)',
  },
  sheet: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: RADIUS.xl,
    borderTopRightRadius: RADIUS.xl,
    padding: SPACING.lg,
    paddingBottom: SPACING.xxl,
    maxHeight: '65%',
    ...SHADOW.lg,
  },
  handle: {
    width: 38,
    height: 4,
    borderRadius: 2,
    backgroundColor: 'rgba(29,48,76,0.15)',
    alignSelf: 'center',
    marginBottom: SPACING.md,
  },
  sheetTitle: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: SPACING.md,
  },
  itemSep: { height: 1, backgroundColor: 'rgba(29,48,76,0.05)' },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
    paddingHorizontal: SPACING.sm,
    borderRadius: RADIUS.sm,
  },
  itemActive: { backgroundColor: '#EEF2F8' },
  itemText: { flex: 1, fontSize: 15, color: COLORS.text.primary },
  itemTextActive: { color: COLORS.primaryLight, fontWeight: '600' },
  check: { color: COLORS.primaryLight, fontSize: 15, fontWeight: '700' },
});

// ── Step Indicator ───────────────────────────────────────────────────────────

const StepIndicator = ({ step1Done, step2Done }) => (
  <View style={si.row}>
    <View style={si.item}>
      <View style={[si.dot, step1Done && si.dotDone]}>
        <Text style={[si.dotText, step1Done && si.dotTextDone]}>
          {step1Done ? '✓' : '1'}
        </Text>
      </View>
      <Text style={[si.label, step1Done && si.labelDone]}>Pathologie</Text>
    </View>

    <View style={[si.line, step1Done && si.lineDone]} />

    <View style={si.item}>
      <View style={[si.dot, step2Done && si.dotDone, !step1Done && si.dotInactive]}>
        <Text style={[si.dotText, step2Done && si.dotTextDone]}>2</Text>
      </View>
      <Text style={[si.label, step2Done && si.labelDone, !step1Done && si.labelInactive]}>
        Atteinte
      </Text>
    </View>
  </View>
);

const si = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: SPACING.lg },
  item: { alignItems: 'center', gap: 5 },
  dot: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: COLORS.offWhite,
    borderWidth: 2,
    borderColor: COLORS.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotDone: { backgroundColor: COLORS.primaryLight, borderColor: COLORS.primaryLight },
  dotInactive: { opacity: 0.35 },
  dotText: { fontSize: 13, fontWeight: '700', color: COLORS.text.muted },
  dotTextDone: { color: COLORS.white },
  label: { fontSize: 11, color: COLORS.text.muted, fontWeight: '600' },
  labelDone: { color: COLORS.primaryLight },
  labelInactive: { opacity: 0.35 },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: COLORS.border,
    marginHorizontal: SPACING.sm,
    marginBottom: 16,
  },
  lineDone: { backgroundColor: COLORS.primaryLight },
});

// ── HomeScreen ───────────────────────────────────────────────────────────────

const HomeScreen = () => {
  const navigation = useNavigation();
  const [pathologies, setPathologies] = useState([]);
  const [selectedPathology, setSelectedPathology] = useState('');
  const [selectedPathologyType, setSelectedPathologyType] = useState('');
  const [pathologyTypes, setPathologyTypes] = useState([]);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const headerSlide = useRef(new Animated.Value(-18)).current;
  const cardSlide = useRef(new Animated.Value(32)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 550, useNativeDriver: true }),
      Animated.spring(headerSlide, { toValue: 0, tension: 65, friction: 10, useNativeDriver: true }),
      Animated.spring(cardSlide, { toValue: 0, tension: 60, friction: 11, delay: 80, useNativeDriver: true }),
    ]).start();
  }, []);

  useEffect(() => {
    openDatabase().then(db => {
      db.transaction(tx => {
        tx.executeSql('SELECT * FROM PathType', [], (_, r) => {
          const data = [];
          for (let i = 0; i < r.rows.length; i++) data.push(r.rows.item(i));
          setPathologies(data);
        }, (_, e) => console.error('PathType fetch:', e.message));
      });
    });
  }, []);

  useEffect(() => {
    if (!selectedPathology) { setPathologyTypes([]); return; }
    openDatabase().then(db => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM Path WHERE PathTypeID = ?',
          [selectedPathology],
          (_, r) => {
            const data = [];
            for (let i = 0; i < r.rows.length; i++) data.push(r.rows.item(i));
            setPathologyTypes(data);
          },
          (_, e) => console.error('Path fetch:', e.message),
        );
      });
    });
  }, [selectedPathology]);

  const selectedType = pathologyTypes.find(pt => pt.ID.toString() === selectedPathologyType);

  const handleNavigation = () => {
    navigation.navigate('Agents', {
      pathology: selectedPathology,
      pathologyType: selectedPathologyType,
      PathologyLabelAR: selectedType?.LibelleAR,
      PathologyLabelFR: selectedType?.LibelleFR,
    });
  };

  const step1Done = Boolean(selectedPathology);
  const step2Done = Boolean(selectedPathologyType);

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.bg}>
      <View style={styles.overlay} />
      <SafeAreaView style={styles.safe}>

        <Animated.View style={[styles.header, { opacity: fadeAnim, transform: [{ translateY: headerSlide }] }]}>
          <Text style={styles.headerTitle}>Recherche de Pathologie</Text>
          <Text style={styles.headerSub}>Sélectionnez une pathologie et un type d'atteinte</Text>
        </Animated.View>

        <Animated.View
          style={[styles.card, { opacity: fadeAnim, transform: [{ translateY: cardSlide }] }]}>

          <StepIndicator step1Done={step1Done} step2Done={step2Done} />

          <View style={styles.divider} />

          <SelectField
            label="Type de pathologie"
            value={selectedPathology}
            placeholder="Sélectionnez une pathologie"
            options={pathologies}
            labelKey="LibelleFR"
            onSelect={val => { setSelectedPathology(val); setSelectedPathologyType(''); }}
          />

          <SelectField
            label="Type d'atteinte"
            value={selectedPathologyType}
            placeholder="Sélectionnez un type d'atteinte"
            options={pathologyTypes}
            labelKey="LibelleFR"
            onSelect={setSelectedPathologyType}
            disabled={!selectedPathology}
          />

          <TouchableOpacity
            style={[styles.cta, !step2Done && styles.ctaDim]}
            onPress={handleNavigation}
            disabled={!step2Done}
            activeOpacity={0.82}>
            <Text style={styles.ctaText}>Afficher les agents</Text>
          </TouchableOpacity>
        </Animated.View>

      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bg: { flex: 1 },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(12, 22, 42, 0.58)',
  },
  safe: {
    flex: 1,
    paddingHorizontal: SPACING.lg,
    justifyContent: 'center',
    gap: SPACING.xl,
  },
  header: { alignItems: 'center' },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 23,
    fontWeight: '800',
    letterSpacing: 0.4,
    marginBottom: 6,
    textAlign: 'center',
  },
  headerSub: {
    color: 'rgba(255,255,255,0.55)',
    fontSize: 13,
    textAlign: 'center',
    maxWidth: 280,
    lineHeight: 19,
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.98)',
    borderRadius: RADIUS.xl,
    padding: SPACING.lg,
    ...SHADOW.lg,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(29,48,76,0.07)',
    marginBottom: SPACING.lg,
  },
  cta: {
    backgroundColor: COLORS.primaryLight,
    borderRadius: RADIUS.md,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: SPACING.xs,
    ...SHADOW.sm,
  },
  ctaDim: { backgroundColor: COLORS.text.light },
  ctaText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});

export default HomeScreen;
