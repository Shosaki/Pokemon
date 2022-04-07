//import liraries
// import { Button, NativeBaseProvider } from "native-base";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import Ad from "./components/Ad";
import {
  Provider as PaperProvider,
  Card,
  TextInput,
  Button,
} from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

import { auth } from "../firebase";

// create a component
const Login = ({ navigation }) => {
  // const nav = navigation;

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(loginEmail, loginPassword)
      .then((userCredentials) => {
        // navigation.reset({
        //   index: 0,
        //   routes: [{ name: "Ad" }],
        // });
        // console.log("Success");
        navigation.navigate("Ad");
      })
      .catch((err) => {
        Alert.alert(err.message);
        console.log(err);
      });
  };
  return (
    // <View style={styles.container}>
    <PaperProvider>
      <LinearGradient colors={["#4286f4", "#373B44"]} style={styles.content}>
        <SafeAreaView style={styles.container}>
          <KeyboardAvoidingView>
            <Card>
              <Card.Title
                title="User Login"
                titleStyle={{ color: "rgb(101,37,131)" }}
              ></Card.Title>
              <Card.Content>
                <TextInput
                  label="Email"
                  keyboardType="email-address"
                  style={{ marginBottom: 5 }}
                  value={loginEmail}
                  onChangeText={(text) => setLoginEmail(text)}
                ></TextInput>
                <TextInput
                  label="Password"
                  secureTextEntry={true}
                  right={<TextInput.Icon name="eye-off-outline" />}
                  value={loginPassword}
                  onChangeText={(text) => setLoginPassword(text)}
                ></TextInput>
                <Button
                  uppercase={false}
                  style={styles.button}
                  onPress={() => {}}
                >
                  Forgot email/password
                </Button>
                <Button
                  mode="contained"
                  uppercase={false}
                  onPress={() => handleLogin()}
                >
                  Login
                </Button>
              </Card.Content>
            </Card>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </LinearGradient>
    </PaperProvider>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: "35%",
    width: "90%",
  },
  content: {
    // display: 'flex',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    // backgroundColor: "rgb(101,37,131)",
  },
  button: {
    margin: 10,
    marginHorizontal: 0,
  },
});

//make this component available to the app
export default Login;

// () => nav.navigate("Ad")
// () => <Ad />

// imgURI="../../assets/Images/pokeball_camera.png"
