import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Colors from '../constants/colors';

type TitleProps = {
  title: string;
};

function Title(props: TitleProps) {
  return <Text style={styles.title}>{props.title}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: Colors.accent500,
    textAlign: 'center',
    padding: 5,
    fontWeight: 'bold',
  },
});
