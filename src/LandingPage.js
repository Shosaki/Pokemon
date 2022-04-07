import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { NativeBaseProvider, Button } from "native-base";

import GradientButton from "./components/GradientButton";

const image = require("../assets/Images/landing.jpg");

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Sriya",
    };
  }
  navigation = this.props.navigation;

  // test = (username) => {
  //   this.setState({ username });
  // };
  render() {
    return (
      <View style={styles.container}>
        <NativeBaseProvider>
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.image}
          >
            <Text style={styles.text}>Welcome to the world of Pokemon !!!</Text>

            <View style={styles.buttonContainer}>
              <GradientButton
                title="Login"
                component="Login"
                navigation={this.props.navigation}
              />
              <GradientButton
                title="Register"
                component="Register"
                navigation={this.props.navigation}
              />
            </View>

            <Button size="lg" onPress={() => this.navigation.navigate("Ad")}>
              Ad Page
            </Button>

            {/* <Button
              size="lg"
              onPress={() =>
                this.navigation.navigate("TeamSelect", {
                  username: this.state.username,
                })
              }
            >
              Team Select
            </Button> */}
          </ImageBackground>
        </NativeBaseProvider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Platform.OS === "android" ? 24 : 0,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  text: {
    fontSize: 21,
    paddingBottom: 15,
    fontWeight: "bold",
    color: "blue",
  },
  buttonContainer: {
    flexDirection: "row",
  },
});
