import React from 'react';
import {Text, StyleSheet} from 'react-native';

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
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 5,
  },
});
