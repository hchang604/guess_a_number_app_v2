import React from 'react';
import {Image, StyleSheet, Text} from 'react-native';
import {View} from 'react-native';
import Title from '../components/Title';
import Colors from '../constants/colors';
import PrimaryButton from '../components/PrimaryButton';

type GameOverScreenProps = {
  roundsCount: number;
  userNumber: number;
  onRestartGame: () => void;
};

function GameOverScreen(props: GameOverScreenProps) {
  return (
    <View style={styles.rootContainer}>
      <Title title="GAME OVER!" />
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/success.png')}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed{' '}
        <Text style={styles.highlight}>{props.roundsCount}</Text> rounds to
        guess the number{' '}
        <Text style={styles.highlight}>{props.userNumber}</Text>
      </Text>
      <PrimaryButton onPress={props.onRestartGame}>
        Start New Game
      </PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  highlight: {
    color: Colors.primary500,
    fontWeight: 'bold',
  },
});
