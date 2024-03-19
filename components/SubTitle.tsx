import React, {ReactNode} from 'react';
import {Text, StyleSheet, TextStyle} from 'react-native';
import Colors from '../constants/colors';

type SubTitleProps = {
  children: ReactNode;
  style?: TextStyle;
};

function SubTitle(props: SubTitleProps) {
  return (
    <Text style={[styles.instructionText, props.style]}>{props.children}</Text>
  );
}

export default SubTitle;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
