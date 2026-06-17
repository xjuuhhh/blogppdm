import { Image } from 'expo-image';
import { Platform, ScrollView, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export default function ProfissaoScreen() {
  const safeAreaInsets = useSafeAreaInsets();
  const insets = {
    ...safeAreaInsets,
    bottom: safeAreaInsets.bottom + BottomTabInset + Spacing.three,
  };
  const theme = useTheme();

  const contentPlatformStyle = Platform.select({
    android: {
      paddingTop: insets.top,
      paddingLeft: insets.left,
      paddingRight: insets.right,
      paddingBottom: insets.bottom,
    },
    web: {
      paddingTop: Spacing.six,
      paddingBottom: Spacing.four,
    },
  });

  return (
    <ScrollView
      style={[styles.scrollView, { backgroundColor: theme.background }]}
      contentInset={insets}
      contentContainerStyle={[styles.contentContainer, contentPlatformStyle]}>

      <ThemedView style={styles.container}>

        {/* ================= TÓPICO 1: SONGS (PICTURES) ================= */}
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="subtitle">tech</ThemedText>
          <ThemedText style={styles.centerText} themeColor="textSecondary">
            "It is the art of giving your emotions a voice{'\n'}when you can't find the words to speak them."
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.sectionsWrapper}>

          <ThemedView style={styles.sectionBlock}>
            <ThemedView style={styles.imageGrid}>

              <ThemedView style={styles.songContainer}>
                <Image source={require('@/assets/images/instax.png')} style={styles.songPhoto} />
                <ThemedText style={styles.songTitle} numberOfLines={1}>Instax mini 12</ThemedText>
                <ThemedText style={styles.songArtist} numberOfLines={1}>~R$500</ThemedText>
              </ThemedView>

              <ThemedView style={styles.songContainer}>
                <Image source={require('@/assets/images/iphone.png')} style={styles.songPhoto} />
                <ThemedText style={styles.songTitle} numberOfLines={1}>Iphone 17 Pro Max 2TB Prateado</ThemedText>
                <ThemedText style={styles.songArtist} numberOfLines={1}>~R$16600</ThemedText>
              </ThemedView>

              <ThemedView style={styles.songContainer}>
                <Image source={require('@/assets/images/cabo.png')} style={styles.songPhoto} />
                <ThemedText style={styles.songTitle}>Cabo Usb Vmc-md1 Sony Cyber-shot Dsc-w110</ThemedText>
                <ThemedText style={styles.songArtist} numberOfLines={1}>~R$59,90</ThemedText>
              </ThemedView>

            </ThemedView> 
          </ThemedView>
        </ThemedView>

        {/* --- LINHA SEPARADORA (OPCIONAL) --- */}
        <ThemedView style={styles.separator} />

        {/* ================= TÓPICO 2: foods ================= */}
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="subtitle">Looks</ThemedText>
          <ThemedText style={styles.centerText} themeColor="textSecondary">
            "kkkk{'\n'}kkkkkk"
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.sectionsWrapper}>
          <ThemedView style={styles.sectionBlock}>
            <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>Meus Favoritos</ThemedText>
            <ThemedView style={styles.imageGrid}>
              <Image source={require('@/assets/images/img.jpeg')} style={styles.photoItem} />
              <Image source={require('@/assets/images/imgg.jpeg')} style={styles.photoItem} />
              <Image source={require('@/assets/images/doguinho.png')} style={styles.photoItem} />
            </ThemedView>
          </ThemedView>
        </ThemedView>

        {Platform.OS === 'web' && <WebBadge />}
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
    maxWidth: MaxContentWidth,
    flexGrow: 1,
  },
  titleContainer: {
    gap: Spacing.three,
    alignItems: 'center',
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.six,
  },
  centerText: {
    textAlign: 'center',
  },
  sectionsWrapper: {
    gap: Spacing.six,
    paddingHorizontal: Spacing.four,
    paddingBottom: Spacing.four,
  },
  sectionBlock: {
    gap: Spacing.two,
  },
  sectionTitle: {
    fontSize: 18,
    opacity: 0.8,
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  photoItem: {
    width: '31%',
    aspectRatio: 1,
    borderRadius: Spacing.three,
    backgroundColor: '#eaeaea',
  },
  /* --- ESTILOS COMPLEMENTARES PARA OS ITENS COM LEGENDA --- */
  songContainer: {
    width: '31%',
    gap: 4,
  },
  songPhoto: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: Spacing.three,
    backgroundColor: '#eaeaea',
  },
  songTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 2,
  },
  songArtist: {
    fontSize: 12,
    opacity: 0.6,
  },
  separator: {
    height: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
    marginVertical: Spacing.four,
    marginHorizontal: Spacing.four,
  },
});
