import React, {useState} from 'react';
import {Alert, TextInput, View} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import {StyleSheet} from 'react-native';
import Colors from '../constants/colors';
import Title from '../components/Title';
import Card from '../components/Card';
import SubTitle from '../components/SubTitle';

type StartGameScreenProps = {
  onConfirmNumber: (confirmedNumber: number) => void;
};

function StartGameScreen(props: StartGameScreenProps) {
  const [enteredNumber, setEnteredNumber] = useState('');

  function numberInputHandler(inputText: string) {
    setEnteredNumber(inputText);
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99',
        [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}],
      );
      return;
    }

    props.onConfirmNumber(chosenNumber);
  }

  return (
    <View style={styles.rootContainer}>
      <Title title="Guess My Number" />
      <Card>
        <SubTitle>Enter a Number</SubTitle>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          onChangeText={numberInputHandler}
          autoCorrect={false}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler} textValue="Reset" />
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler} textValue="Confirm" />
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});
