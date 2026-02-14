import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, Platform } from 'react-native';
import {
  useFonts,
  Lato_400Regular,
  Lato_700Bold,
  Lato_900Black
} from '@expo-google-fonts/lato';
import {
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_400Regular_Italic
} from '@expo-google-fonts/roboto';
import { NavBar } from './src/components/NavBar';
import { Hero } from './src/components/Hero';
import { Skills } from './src/components/Skills';
import { Experience } from './src/components/Experience';
import { Education } from './src/components/Education';
import { Contact } from './src/components/Contact';
import { colors } from './src/styles/theme';
import { useRef } from 'react';

export default function App() {
  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
    Lato_900Black,
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_400Regular_Italic
  });

  const scrollViewRef = useRef<ScrollView>(null);

  const handleNavigate = (sectionId: string) => {
    // In a real web environment with react-native-web, we can use standard anchor links 
    // or manually scroll. For now, we'll just log. 
    // To implement proper scrolling, we'd need onLayout measurements for each section.
    // For web specifically:
    if (Platform.OS === 'web') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  if (!fontsLoaded) {
    return <View style={styles.loadingContainer}><Text>Loading...</Text></View>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <NavBar onNavigate={handleNavigate} />
      <ScrollView
        ref={scrollViewRef}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Contact />
        {/* Footer could go here */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2026 Akshat Patel. All Rights Reserved.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  footer: {
    padding: 40,
    backgroundColor: '#202020',
    alignItems: 'center',
  },
  footerText: {
    color: '#888',
    fontFamily: 'Roboto_400Regular',
  }

});
