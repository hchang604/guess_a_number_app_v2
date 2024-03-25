import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../constants/colors';

type GuessLogItemProps = {
  roundCount: number;
  value: number;
};

function GuessLogItem(props: GuessLogItemProps) {
  return (
    <View style={styles.listeItem}>
      <Text>#{props.roundCount}</Text>
      <Text>Guess: {props.value}</Text>
    </View>
  );
}

export default GuessLogItem;

const styles = StyleSheet.create({
  listeItem: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    elevation: 4,
    /* iOS specific stlying */
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
});
