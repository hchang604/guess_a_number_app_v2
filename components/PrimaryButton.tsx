import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

type PrimaryButtonProps = {
  textValue: string;
  onPress: () => void;
};

function PrimaryButton(props: PrimaryButtonProps) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        /* We try to achieve the same effect of android_ripple on iOS here */
        style={({pressed}) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={props.onPress}
        android_ripple={{color: '#640233'}}>
        <Text style={styles.buttonText}>{props.textValue}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: '#72063c',
    paddingVertical: 8,
    paddingHorizontal: 16,
    /* Android specific styling */
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
