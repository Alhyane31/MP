/**
 * Identité visuelle TMP-Maroc : palette « Encre / Majorelle / Safran » et polices IBM Plex.
 * Le logo officiel (assets/images/icon.png) reste inchangé.
 */
import { StyleSheet } from 'react-native';

export const BRAND = {
  ink: '#0F2238',        // Encre : texte, en-têtes, fonds sombres
  majorelle: '#2847D9',  // actions, liens, icônes actives
  majorelleDark: '#1F3AB8',
  saffron: '#E9A23B',    // repère : sélection en cours, numéro de tableau actif
  mist: '#E3E9F7',       // Brume : surfaces actives, puces
  chalk: '#F4F6FA',      // Chaux : fond des écrans
  slate: '#5B6878',      // Ardoise : texte secondaire
  slateDark: '#3B4A5E',
  border: '#DCE2EB',
  borderStrong: '#D5DCE6',
  white: '#FFFFFF',
  onInkMuted: '#C6D0DE',
  disabled: '#B7C3D6',
};

export const FONT = {
  regular: 'IBMPlexSans_400Regular',
  medium: 'IBMPlexSans_500Medium',
  semibold: 'IBMPlexSans_600SemiBold',
  bold: 'IBMPlexSans_700Bold',
  arRegular: 'IBMPlexSansArabic_400Regular',
  arMedium: 'IBMPlexSansArabic_500Medium',
  arSemibold: 'IBMPlexSansArabic_600SemiBold',
  arBold: 'IBMPlexSansArabic_700Bold',
};

export const RADIUS = { sm: 8, md: 14, lg: 20, pill: 100 };

export const LOGO = require('../assets/images/icon.png');

// Styles communs aux listes (agents, tableaux, historique, détails)
export const listStyles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: BRAND.chalk },
  searchBar: {
    backgroundColor: BRAND.ink,
    paddingHorizontal: 16,
    paddingTop: 4,
    paddingBottom: 16,
  },
  searchInput: {
    backgroundColor: BRAND.white,
    height: 48,
    paddingHorizontal: 14,
    borderRadius: RADIUS.md,
    fontFamily: FONT.regular,
    fontSize: 15,
    color: BRAND.ink,
  },
  searchInputAr: { fontFamily: FONT.arRegular, textAlign: 'right' },
  listContent: { padding: 16, paddingBottom: 80 },
  card: {
    backgroundColor: BRAND.white,
    borderWidth: 1,
    borderColor: BRAND.border,
    borderRadius: RADIUS.md,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  cardText: { flex: 1, gap: 6 },
  title: { fontFamily: FONT.semibold, fontSize: 15, color: BRAND.ink, lineHeight: 21 },
  titleAr: { fontFamily: FONT.arSemibold, textAlign: 'right' },
  body: { fontFamily: FONT.regular, fontSize: 15, color: BRAND.ink, lineHeight: 21 },
  bodyAr: { fontFamily: FONT.arRegular, textAlign: 'right' },
  meta: { fontFamily: FONT.regular, fontSize: 13, color: BRAND.slate },
  metaAr: { fontFamily: FONT.arRegular, textAlign: 'right' },
  chip: {
    alignSelf: 'flex-start',
    backgroundColor: BRAND.mist,
    borderRadius: RADIUS.sm,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  chipAr: { alignSelf: 'flex-end' },
  chipText: { fontFamily: FONT.medium, fontSize: 13, color: BRAND.majorelleDark },
  chipTextAr: { fontFamily: FONT.arMedium },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: BRAND.mist,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontFamily: FONT.semibold,
    fontSize: 12,
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: BRAND.slateDark,
    marginTop: 8,
    marginBottom: 10,
  },
  sectionTitleAr: {
    fontFamily: FONT.arSemibold,
    fontSize: 14,
    letterSpacing: 0,
    textAlign: 'right',
  },
});
