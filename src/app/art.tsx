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
          <ThemedText type="subtitle">Songs</ThemedText>
          <ThemedText style={styles.centerText} themeColor="textSecondary">
            "It is the art of giving your emotions a voice{'\n'}when you can't find the words to speak them."
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.sectionsWrapper}>

          {/* ----- SEÇÃO 1: Pagode ----- */}
          <ThemedView style={styles.sectionBlock}>
            <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>Pagode</ThemedText>
            <ThemedView style={styles.imageGrid}>

              {/* ITEM DE MÚSICA 1 */}
              <ThemedView style={styles.songContainer}>
                <Image source={require('@/assets/images/tavendoaquelalua.jpg')} style={styles.songPhoto} />
                <ThemedText style={styles.songTitle} numberOfLines={1}>Tá Vendo Aquela Lua</ThemedText>
                <ThemedText style={styles.songArtist} numberOfLines={1}>Exaltasamba</ThemedText>
              </ThemedView>

              {/* ITEM DE MÚSICA 2 */}
              <ThemedView style={styles.songContainer}>
                <Image source={require('@/assets/images/sovaidecamarote.jpg')} style={styles.songPhoto} />
                <ThemedText style={styles.songTitle} numberOfLines={1}>Só vai de camarote</ThemedText>
                <ThemedText style={styles.songArtist} numberOfLines={1}>Grupo Revelação</ThemedText>
              </ThemedView>

              {/* ITEM DE MÚSICA 3 */}
              <ThemedView style={styles.songContainer}>
                <Image source={require('@/assets/images/lancinho.jpg')} style={styles.songPhoto} />
                <ThemedText style={styles.songTitle} numberOfLines={1}>Lancinho</ThemedText>
                <ThemedText style={styles.songArtist} numberOfLines={1}>Turma do Pagode</ThemedText>
              </ThemedView>

              {/* ITEM DE MÚSICA 4 */}
              <ThemedView style={styles.songContainer}>
                <Image source={require('@/assets/images/deixaalagar.jpg')} style={styles.songPhoto} />
                <ThemedText style={styles.songTitle} numberOfLines={1}>Deixa alagar</ThemedText>
                <ThemedText style={styles.songArtist} numberOfLines={1}>Grupo Revelação</ThemedText>
              </ThemedView>

              {/* ITEM DE MÚSICA 5 */}
              <ThemedView style={styles.songContainer}>
                <Image source={require('@/assets/images/camisa10.jpg')} style={styles.songPhoto} />
                <ThemedText style={styles.songTitle} numberOfLines={1}>Camisa 10</ThemedText>
                <ThemedText style={styles.songArtist} numberOfLines={1}>Turma do Pagode</ThemedText>
              </ThemedView>

              {/* ITEM DE MÚSICA 6 */}
              <ThemedView style={styles.songContainer}>
                <Image source={require('@/assets/images/camisa10.jpg')} style={styles.songPhoto} />
                <ThemedText style={styles.songTitle} numberOfLines={1}>Deixa em off</ThemedText>
                <ThemedText style={styles.songArtist} numberOfLines={1}>Turma do Pagode</ThemedText>
              </ThemedView>

              {/* ITEM DE MÚSICA 7 */}
              <ThemedView style={styles.songContainer}>
                <Image source={require('@/assets/images/quemamasentesaudade.jpg')} style={styles.songPhoto} />
                <ThemedText style={styles.songTitle} numberOfLines={1}>Quem Ama Sente Saudade</ThemedText>
                <ThemedText style={styles.songArtist} numberOfLines={1}>Tenta Samba</ThemedText>
              </ThemedView>

              {/* ITEM DE MÚSICA 8 */}
              <ThemedView style={styles.songContainer}>
                <Image source={require('@/assets/images/bebeevemmeprocurar.jpg')} style={styles.songPhoto} />
                <ThemedText style={styles.songTitle} numberOfLines={1}>Bebe e vem me procurar</ThemedText>
                <ThemedText style={styles.songArtist} numberOfLines={1}>Saia Rodada</ThemedText>
              </ThemedView>

              {/* ITEM DE MÚSICA 9 */}
              <ThemedView style={styles.songContainer}>
                <Image source={require('@/assets/images/cobertor de orelha.jpg')} style={styles.songPhoto} />
                <ThemedText style={styles.songTitle} numberOfLines={1}>Cobertor de orelha</ThemedText>
                <ThemedText style={styles.songArtist} numberOfLines={1}>Turma do pagode</ThemedText>
              </ThemedView>

              {/* ITEM DE MÚSICA 10 */}
              <ThemedView style={styles.songContainer}>
                <Image source={require('@/assets/images/suamaevaiamar.jpg')} style={styles.songPhoto} />
                <ThemedText style={styles.songTitle} numberOfLines={1}>Sua mãe vai amar</ThemedText>
                <ThemedText style={styles.songArtist} numberOfLines={1}>Turma do pagode</ThemedText>
              </ThemedView>

              {/* ITEM DE MÚSICA 11 */}
              <ThemedView style={styles.songContainer}>
                <Image source={require('@/assets/images/surpresadeamor.jpg')} style={styles.songPhoto} />
                <ThemedText style={styles.songTitle} numberOfLines={1}>Surpresa de amor</ThemedText>
                <ThemedText style={styles.songArtist} numberOfLines={1}>Turma do pagode</ThemedText>
              </ThemedView>

              {/* ITEM DE MÚSICA 12 */}
              <ThemedView style={styles.songContainer}>
                <Image source={require('@/assets/images/nemdegraça.jpg')} style={styles.songPhoto} />
                <ThemedText style={styles.songTitle} numberOfLines={1}>Nem de graça</ThemedText>
                <ThemedText style={styles.songArtist} numberOfLines={1}>Pixote</ThemedText>
              </ThemedView>

              {/* ITEM DE MÚSICA 13 */}
              <ThemedView style={styles.songContainer}>
                <Image source={require('@/assets/images/saudadearregaça.jpg')} style={styles.songPhoto} />
                <ThemedText style={styles.songTitle} numberOfLines={1}>Saudade arregaça</ThemedText>
                <ThemedText style={styles.songArtist} numberOfLines={1}>Pixote</ThemedText>
              </ThemedView>

              {/* ITEM DE MÚSICA 14 */}
              <ThemedView style={styles.songContainer}>
                <Image source={require('@/assets/images/fulminante.jpg')} style={styles.songPhoto} />
                <ThemedText style={styles.songTitle} numberOfLines={1}>Fulminante</ThemedText>
                <ThemedText style={styles.songArtist} numberOfLines={1}>Mumuzinho</ThemedText>
              </ThemedView>

              {/* ITEM DE MÚSICA 15 */}
              <ThemedView style={styles.songContainer}>
                <Image source={require('@/assets/images/pirataetesouro.jpg')} style={styles.songPhoto} />
                <ThemedText style={styles.songTitle} numberOfLines={1}>Pirata e Tesouro</ThemedText>
                <ThemedText style={styles.songArtist} numberOfLines={1}>Ferrugem</ThemedText>
              </ThemedView>

              {/* ITEM DE MÚSICA 16 */}
              <ThemedView style={styles.songContainer}>
                <Image source={require('@/assets/images/falabaixinho.jpg')} style={styles.songPhoto} />
                <ThemedText style={styles.songTitle} numberOfLines={1}>Fala Baixinho(Shiii)</ThemedText>
                <ThemedText style={styles.songArtist} numberOfLines={1}>Grupo Revelação</ThemedText>
              </ThemedView>

              {/* ITEM DE MÚSICA 17 */}
              <ThemedView style={styles.songContainer}>
                <Image source={require('@/assets/images/eununcaameiassim.jpg')} style={styles.songPhoto} />
                <ThemedText style={styles.songTitle} numberOfLines={1}>Eu nunca amei assim</ThemedText>
                <ThemedText style={styles.songArtist} numberOfLines={1}>Jeito Moleque</ThemedText>
              </ThemedView>

              {/* ITEM DE MÚSICA 18 */}
              <ThemedView style={styles.songContainer}>
                <Image source={require('@/assets/images/insegurança.jpg')} style={styles.songPhoto} />
                <ThemedText style={styles.songTitle} numberOfLines={1}>Insegurança</ThemedText>
                <ThemedText style={styles.songArtist} numberOfLines={1}>Pixote</ThemedText>
              </ThemedView>

            </ThemedView> {/* <--- Aqui faltava fechar a imageGrid antes de fechar o sectionBlock */}
          </ThemedView>

          {/* ----- SEÇÃO 2: Sertanejo ----- */}
          <ThemedView style={styles.sectionBlock}>
            <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>Sertanejo</ThemedText>
            <ThemedView style={styles.imageGrid}>
              <Image source={require('@/assets/images/con.jpeg')} style={styles.photoItem} />
              <Image source={require('@/assets/images/conq.png')} style={styles.photoItem} />
              <Image source={require('@/assets/images/doguinho.png')} style={styles.photoItem} />
            </ThemedView> 
          </ThemedView>

        </ThemedView>

        {/* --- LINHA SEPARADORA (OPCIONAL) --- */}
        <ThemedView style={styles.separator} />

        {/* ================= TÓPICO 2: SONGS ================= */}
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="subtitle">Songs</ThemedText>
          <ThemedText style={styles.centerText} themeColor="textSecondary">
            "It is the art of giving your emotions a voice{'\n'}when you can't find the words to speak them."
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