//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors, mainColors } from "../../assets/colors";

// create a component

const Tag = ({ type }) => {
  return (
    <View style={[styles.tag, { backgroundColor: colors[type] }]}>
      <Text style={styles.text}>{type}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  tag: {
    height: 35,
    width: 80,
    borderRadius: 7,
    marginRight: 5,
    padding: 5,
    marginTop: 5,
  },
  text: {
    textTransform: "capitalize",
    color: mainColors.white,
    textAlign: "center",
    fontSize: 18,
  },
});

//make this component available to the app
export default Tag;
