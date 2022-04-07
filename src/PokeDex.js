//import liraries
import React, { Component, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  FlatList,
  CameraRoll,
  Image,
  Alert,
} from "react-native";
import axios from "axios";

import Icon from "react-native-vector-icons/FontAwesome";

// import { width, height } from "../assets/constants";

import { mainColors } from "../assets/colors";
import { width, height } from "../assets/constants";
import Input from "./components/Input";
import Card from "./components/Card";
import DB from "../db";
const Pokeball_header = require("../assets/Images/Pokeball_header.png");
const Profile = require("../assets/Images/SELFIE_EXAMPLE.jpg");

// create a component
const PokeDex = ({ navigation }) => {
  const [pokeSearch, setPokeSearch] = useState("");
  const [pokeResponse, setPokeResponse] = useState({
    types: [
      { slot: 2, type: { name: "", url: "" } },
      { slot: 1, type: { name: "", url: "" } },
    ],
    id: "",
    name: "",
    type: ["", ""],
    uri: "",
  });
  const [pokeResponseFinal, setPokeResponseFinal] = useState({
    types: [
      { slot: 2, type: { name: "", url: "" } },
      { slot: 1, type: { name: "", url: "" } },
    ],
    id: "",
    name: "",
    type: ["", ""],
    uri: "",
  });

  const searchPoke = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + pokeSearch.toLowerCase())
      .then((response) => {
        setPokeResponse(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    // let pokeType = pokeResponse.types[0]["type"]["name"];
    let id = {
      id: pokeResponse.id,
      name: pokeResponse.name,
      type:
        pokeResponse.types.length === 2
          ? [
              pokeResponse.types[0]["type"]["name"],
              pokeResponse.types[1]["type"]["name"],
            ]
          : [pokeResponse.types[0]["type"]["name"]],
      uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeResponse.id}.png`,
    };
    setPokeResponseFinal(id);
  }, [pokeResponse]);

  useEffect(
    () =>
      navigation.addListener("beforeRemove", (e) => {
        // const action = e.data.action;
        e.preventDefault();
        Alert.alert("Are you sure want to Exit !", "", [
          { text: "Cancel", style: "cancel", onPress: () => {} },
          {
            text: "Logout",
            style: "destructive",
            onPress: () => navigation.navigate("LandingPage"),
          },
        ]);
      }),
    [navigation]
  );

  let searchArr = [pokeResponseFinal];

  return (
    <>
      <StatusBar barStyle={"dark-content"} backgroundColor={mainColors.white} />
      <View style={styles.container}>
        <ImageBackground
          style={styles.imgBack}
          source={Pokeball_header}
          resizeMode="contain"
        >
          <View style={styles.topContent}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginRight: 10,
              }}
            >
              <Text style={styles.heading}>Pokedéx</Text>
              <Image
                source={Profile}
                style={{ height: 40, width: 40, borderRadius: 50 }}
              ></Image>
            </View>

            <Text style={styles.subHeading}>
              Search for Pokémon by name or using the National Pokédex number.
            </Text>
          </View>
          <Icon
            name="search"
            size={25}
            onPress={searchPoke}
            style={styles.icon}
          />

          <Input
            placeholderTextColor={mainColors.grey}
            placeholder="What Pokémon are you looking for?"
            // value={pokeSearch}
            onChangeText={(text) => {
              setPokeSearch(text);
            }}
          />
        </ImageBackground>
        {/* <SVGUri
            width="100%"
            height="100%"
            uri="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/debian.svg"
          /> */}

        {pokeSearch !== "" ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={searchArr}
            renderItem={(item) => <Card item={item} />}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={DB}
            renderItem={(item) => <Card item={item} />}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgBack: {
    width: width,
    height: height / 4,
  },
  heading: {
    fontSize: 32,
    fontWeight: "700",
    color: mainColors.black,
    paddingBottom: 10,
    // fontFamily: "SF-Pro-Display",
  },
  subHeading: {
    fontSize: 16,
    color: mainColors.grey,
  },
  topContent: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 10,
    paddingTop: 10,
  },
  icon: {
    position: "absolute",
    marginLeft: width * 0.89,
    marginTop: height * 0.195,
    zIndex: 3,
    color: mainColors.grey,
  },
});

//make this component available to the app
export default PokeDex;

//  <View>
{
  /* {pokeResponseFinal.map(() => (
              <Card item={item} />
            ))} */
}

{
  /* <Text>{pokeResponse.id}</Text>
            <Text>{pokeResponse.name}</Text>

            <Text>---Start Here---</Text>

            <Text>{pokeResponseFinal["id"]}</Text>
            <Text>{pokeResponseFinal["name"]}</Text>

            <Text>{pokeResponseFinal["uri"]}</Text>
            <Text>{pokeResponseFinal["type"]}</Text> */
}
// </View>
