import React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import Colors from '../constants/colors';

type NumberContainerProps = {
  text: number;
};

function NumberContainer(props: NumberContainerProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{props.text}</Text>
    </View>
  );
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 450 ? 12 : 24,
    margin: deviceWidth < 450 ? 12 : 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colors.accent500,
    fontSize: deviceWidth < 450 ? 28 : 36,
  },
});
