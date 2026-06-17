import { Image } from 'expo-image';
import { SymbolView } from 'expo-symbols';
import { Platform, Pressable, ScrollView, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ExternalLink } from '@/components/external-link';
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
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="subtitle">Pictures</ThemedText>
          <ThemedText style={styles.centerText} themeColor="textSecondary">
            "A good snapshot keeps a moment from running away."{'\n'}E. Welty
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.sectionsWrapper}>
          {/* ----- SEÇÃO 1 ----- */}
          <ThemedView style={styles.sectionBlock}>
            <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
              Mee
            </ThemedText>
            
            <ThemedView style={styles.imageGrid}>
              <Image source={require('@/assets/images/doguinho.png')} style={styles.photoItem} />
              <Image source={require('@/assets/images/doguinho.png')} style={styles.photoItem} />
              <Image source={require('@/assets/images/doguinho.png')} style={styles.photoItem} />
            </ThemedView>
          </ThemedView>

          {/* ----- SEÇÃO 2 ----- */}
          <ThemedView style={styles.sectionBlock}>
            <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
              Achievements
            </ThemedText>
            
            <ThemedView style={styles.imageGrid}>
              <Image source={require('@/assets/images/conqu.jpeg')} style={styles.photoItem} />
              <Image source={require('@/assets/images/conq.png')} style={styles.photoItem} />
              <Image source={require('@/assets/images/doguinho.png')} style={styles.photoItem} />
            </ThemedView>
          </ThemedView>

          {/* ----- SEÇÃO 3 ----- */}
          <ThemedView style={styles.sectionBlock}>
            <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
              Sisterr
            </ThemedText>
            
            <ThemedView style={styles.imageGrid}>
              <Image source={require('@/assets/images/img.jpeg')} style={styles.photoItem} />
              <Image source={require('@/assets/images/img (3).jpeg')} style={styles.photoItem} />
              <Image source={require('@/assets/images/imgg.jpeg')} style={styles.photoItem} />
            </ThemedView>
          </ThemedView>

          {/* ----- SEÇÃO 4 ----- */}
          <ThemedView style={styles.sectionBlock}>
            <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
              Familyy
            </ThemedText>
            
            <ThemedView style={styles.imageGrid}>
              <Image source={require('@/assets/images/imggg.jpeg')} style={styles.photoItem} />
              <Image source={require('@/assets/images/iigm.jpeg')} style={styles.photoItem} />
              <Image source={require('@/assets/images/img (2).jpeg')} style={styles.photoItem} />
              <Image source={require('@/assets/images/doguinho.png')} style={styles.photoItem} />
            </ThemedView>
          </ThemedView>

          {/* ----- SEÇÃO 5 ----- */}
          <ThemedView style={styles.sectionBlock}>
            <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
              Friendss
            </ThemedText>
            
            <ThemedView style={styles.imageGrid}>
              <Image source={require('@/assets/images/img.jpeg')} style={styles.photoItem} />
              <Image source={require('@/assets/images/doguinho.png')} style={styles.photoItem} />
              <Image source={require('@/assets/images/doguinho.png')} style={styles.photoItem} />
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
  pressed: {
    opacity: 0.7,
  },
  sectionsWrapper: {
    gap: Spacing.six,
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.three,
  },
  /* --- ESTILOS ADICIONADOS PARA AS FOTOS APARECEREM --- */
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
    backgroundColor: '#eaeaea', // Ajuda a ver o quadradinho caso a imagem falhe
  },
});
