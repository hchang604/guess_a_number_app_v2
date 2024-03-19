import React, {ReactNode} from 'react';
import {View, StyleSheet} from 'react-native';
import Colors from '../constants/colors';

type CardProps = {
  children: ReactNode;
};

function Card(props: CardProps) {
  return <View style={styles.inputContainer}>{props.children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    /* Android specific styling */
    elevation: 4,
    /* iOS specific stlying */
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
