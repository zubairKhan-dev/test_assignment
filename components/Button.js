/*eslint-disable */
import React from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";
import theme from "../src/utill/theme";

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

function hp(percentage) {
  const value = (percentage * viewportHeight) / 100;
  return Math.round(value);
}

const Button=(props)=> {
    return(
      <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text style={styles.btnText}>Next</Text>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  button: {
    width: wp(80),
    height: hp(7),
    borderRadius: 30,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: hp(5),
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.Default_Color
  }
});

export default Button
