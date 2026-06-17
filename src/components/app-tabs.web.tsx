import {
  Tabs,
  TabList,
  TabTrigger,
  TabSlot,
  TabTriggerSlotProps,
  TabListProps,
} from 'expo-router/ui';
import { SymbolView } from 'expo-symbols';
import { Pressable, useColorScheme, View, StyleSheet } from 'react-native';

import { ExternalLink } from './external-link';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

import { Colors, MaxContentWidth, Spacing } from '@/constants/theme';
import { MaterialIcons } from '@expo/vector-icons';

export default function AppTabs() {
  return (
    <Tabs>
      <TabSlot style={{ height: '100%' }} />
      <TabList asChild>
        <CustomTabList>
          
          <TabTrigger name="home" href="/" asChild>
            <TabButton>Home</TabButton>
          </TabTrigger>
          
          <TabTrigger name="explore" href="/explore" asChild>
            <TabButton>Explore</TabButton>
          </TabTrigger>

          {/* Botão Arte */}
          <TabTrigger name="art" href="/art" asChild>
          <TabButton>
            <MaterialIcons name="cloud" size={24} color="red"></MaterialIcons>My culture</TabButton>
          </TabTrigger>

          {/* Botão Gastronomia */}
          <TabTrigger name="fotos" href="/fotos" asChild>
            <TabButton>
              <MaterialIcons name="photo" size={24} color="#ffd900"></MaterialIcons>
              Pictures</TabButton>
          </TabTrigger>

          {/* Botão Viagem */}
          <TabTrigger name="viagens" href="/viagens" asChild>
            <TabButton>
            <MaterialIcons name="map" size={24} color="red"></MaterialIcons>Viagem</TabButton>
          </TabTrigger>

          {/* Botão Hobbies */}
          <TabTrigger name="hobbie" href="/hobbie" asChild>
            <TabButton>
              <MaterialIcons name="radio" size={24} color="#ffd900"></MaterialIcons>
              Hobbies</TabButton>
          </TabTrigger>

          {/* Botão DESEJOS */}
          <TabTrigger name="wishes" href="/wishes" asChild>
            <TabButton>
            <MaterialIcons name="list" size={24} color="red"></MaterialIcons>Wishes</TabButton>
          </TabTrigger> 

        </CustomTabList>
      </TabList>
    </Tabs>
  ); 
}

export function TabButton({ children, isFocused, ...props }: TabTriggerSlotProps) {
  return (
    <Pressable {...props} style={({ pressed }) => pressed && styles.pressed}>
      <ThemedView
        type={isFocused ? 'backgroundSelected' : 'backgroundElement'}
        style={styles.tabButtonView}>

        <View style={styles.buttonContent}>
          {children}
        </View>
      </ThemedView>
    </Pressable>
  );
}

export function CustomTabList(props: TabListProps) {
  const scheme = useColorScheme();
  const colors = Colors[scheme === 'unspecified' ? 'light' : scheme];

  return (
    <View {...props} style={styles.tabListContainer}>
      <ThemedView type="backgroundElement" style={styles.innerContainer}>
        <ThemedText type="smallBold" style={styles.brandText}>
          Juh's Blog
        </ThemedText>

        {props.children}

      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  tabListContainer: {
    position: 'absolute',
    width: '100%',
    padding: Spacing.three,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  innerContainer: {
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.five,
    borderRadius: Spacing.five,
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1,
    gap: Spacing.two,
    // maxWidth: MaxContentWidth,
  },
  brandText: {
    marginRight: 'auto',
  },
  pressed: {
    opacity: 0.7,
  },
  tabButtonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    paddingVertical: Spacing.one,
    paddingHorizontal: Spacing.three,
    borderRadius: Spacing.three,
  },
  externalPressable: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: Spacing.one,
    marginLeft: Spacing.three,
  },

  buttonContent: {
    flexDirection: 'row',     
    alignItems: 'center',     
    justifyContent: 'center', 
    gap: 6,
  },
});
