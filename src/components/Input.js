//import liraries
import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

import { customColor } from "../../assets/colors";

// create a component
const Input = ({ ...props }) => {
  return (
    <View style={styles.input}>
      <TextInput {...props} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 0.5,
    borderRadius: 7,
    padding: 10,
    backgroundColor: customColor.input,
  },
});

//make this component available to the app
export default Input;
