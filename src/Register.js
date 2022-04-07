//import liraries
import React, { Component, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import {
  Provider as PaperProvider,
  Card,
  TextInput,
  Button,
  RadioButton,
} from "react-native-paper";

import { LinearGradient } from "expo-linear-gradient";

import { auth, addUserData } from "../firebase";

// create a component
const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("  ");
  const [profilePic, setProfilePic] = useState("");

  useEffect(() => {
    let authVar = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Login");
      }
    });

    // return unsubscribe;
  }, []);

  const handleCameraOpen = () => navigation.navigate("CameraScreen");
  const handlePicUpload = () => {};

  const handleSignUp = () => {
    if (password === confirmPassword && age > 5 && age < 125) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          const uID = auth.currentUser.uid;
          addUserData(uID, name, age, gender, profilePic);
        })
        .catch((error) => alert(error.message));
    } else {
      Alert.alert("Please check entered information");
    }
  };
  return (
    <PaperProvider>
      <LinearGradient colors={["#bbd2c5", "#536976"]} style={styles.content}>
        <SafeAreaView style={styles.container}>
          <KeyboardAvoidingView>
            <Card>
              <Card.Title
                title="User Registration"
                titleStyle={{ color: "rgb(101,37,131)" }}
              ></Card.Title>
              <Card.Content>
                {/* <TextInput
                  label="Name"
                  value={name}
                  onChangeText={(text) => setName(text)}
                  style={styles.text}
                /> */}
                <TextInput
                  label="Email"
                  keyboardType="email-address"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  style={styles.text}
                />
                <TextInput
                  label="Password"
                  secureTextEntry={true}
                  right={<TextInput.Icon name="eye-off-outline" />}
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  style={styles.text}
                />
                <TextInput
                  label="Confirm Password"
                  secureTextEntry={true}
                  right={<TextInput.Icon name="eye-off-outline" />}
                  value={confirmPassword}
                  onChangeText={(text) => setConfirmPassword(text)}
                  style={styles.text}
                />
                <TextInput
                  label="Age"
                  value={age}
                  onChangeText={(text) => setAge(text)}
                  keyboardType="numeric"
                  style={styles.text}
                />

                <RadioButton.Group
                  onValueChange={(value) => setGender(value)}
                  value={gender}
                >
                  <RadioButton.Item
                    style={styles.radiobutton}
                    label="Male"
                    value="male"
                  />
                  <RadioButton.Item
                    style={styles.radiobutton}
                    label="Female"
                    value="female"
                  />
                  <RadioButton.Item
                    style={styles.radiobutton}
                    label="Other"
                    value="other"
                  />
                </RadioButton.Group>

                {/* <View style={{ width: "50%", flexDirection: "row" }}> */}
                <Button
                  mode="contained"
                  onPress={handleCameraOpen}
                  // style={{ width: "20%" }}
                >
                  Take a Picture
                </Button>

                {/* <Button mode="contained" onPress={handlePicUpload}>
                  Upload from Gallery
                </Button> */}
                {/* </View> */}

                <Button></Button>

                <Button mode="contained" onPress={handleSignUp}>
                  Register
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
    height: "75%",
    width: "90%",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "rgb(101,37,131)",
  },
  text: {
    marginBottom: 2.5,
    marginTop: 2.5,
  },
  radiobutton: {
    marginBottom: -5,
    marginTop: -5,
  },
});

//make this component available to the app
export default Register;
