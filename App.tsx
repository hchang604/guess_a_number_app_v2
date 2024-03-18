import React, {useState} from 'react';
import StartGameScreen from './screens/StartGameScreen';
import {ImageBackground, SafeAreaView, StyleSheet} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';

export default function App() {
  /* The number you want the computer to guess in the game */
  const [userNumber, setUserNumber] = useState<number | undefined>();

  function confirmNumberHandler(pickedNumber: number) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onConfirmNumber={confirmNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} />;
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
