//import liraries
import React, { Component, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
  Modal,
} from "react-native";
import { colors, mainColors, backgroundColors } from "../../assets/colors";
import Tag from "./Tag";

import { LinearGradient } from "expo-linear-gradient";

import Icon from "react-native-vector-icons/FontAwesome";

import { width, height } from "../../assets/constants";
import axios from "axios";

// create a component
const Card = ({ item, navigation }) => {
  const URI = item["item"]["uri"];
  const type1 = item["item"]["type"][0];
  // console.warn(type1);
  const type2 = item["item"]["type"][1];
  const [showPokeInfo, setShowPokeInfo] = useState(false);
  const [pokeResponseCard, setPokeResponseCard] = useState({
    types: [
      { slot: 2, type: { name: "", url: "" } },
      { slot: 1, type: { name: "", url: "" } },
    ],
    id: "",
    name: "",
    sprites: [
      {
        other: {
          dream_world: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
            front_female: null,
          },
        },

        home: {
          front_default: "",
          front_female: null,
          front_shiny: "",
          front_shiny_female: null,
        },
        "official-artwork": {
          front_default: "",
        },
      },
    ],
    // "versions": {
    //   "generation-i": {
    //     "red-blue": {
    //       "back_default": "",
    //       "back_gray": "",
    //       "back_transparent": "",
    //       "front_default": "",
    //       "front_gray": "",
    //       "front_transparent": ""
    //     },
    //     "yellow": {
    //       "back_default": "",
    //       "back_gray": "",
    //       "back_transparent": "",
    //       "front_default": "",
    //       "front_gray": "",
    //       "front_transparent": ""
    //     }
    //   },
    //   "generation-ii": {
    //     "crystal": {
    //       "back_default": "",
    //       "back_shiny": "",
    //       "back_shiny_transparent": "",
    //       "back_transparent": "",
    //       "front_default": "",
    //       "front_shiny": "",
    //       "front_shiny_transparent": "",
    //       "front_transparent": ""
    //     },
    //     "gold": {
    //       "back_default": "",
    //       "back_shiny": "",
    //       "front_default": "",
    //       "front_shiny": "",
    //       "front_transparent": ""
    //     },
    //     "silver": {
    //       "back_default": "",
    //       "back_shiny": "",
    //       "front_default": "",
    //       "front_shiny": "",
    //       "front_transparent": ""
    //     }
    //   },
    //   "generation-iii": {
    //     "emerald": {
    //       "front_default": "",
    //       "front_shiny": ""
    //     },
    //     "firered-leafgreen": {
    //       "back_default": "",
    //       "back_shiny": "",
    //       "front_default": "",
    //       "front_shiny": ""
    //     },
    //     "ruby-sapphire": {
    //       "back_default": "",
    //       "back_shiny": "",
    //       "front_default": "",
    //       "front_shiny": ""
    //     }
    //   },
    //   "generation-iv": {
    //     "diamond-pearl": {
    //       "back_default": "",
    //       "back_female": null,
    //       "back_shiny": "",
    //       "back_shiny_female": null,
    //       "front_default": "",
    //       "front_female": null,
    //       "front_shiny": "",
    //       "front_shiny_female": null
    //     },
    //     "heartgold-soulsilver": {
    //       "back_default": "",
    //       "back_female": null,
    //       "back_shiny": "",
    //       "back_shiny_female": null,
    //       "front_default": "",
    //       "front_female": null,
    //       "front_shiny": "",
    //       "front_shiny_female": null
    //     },
    //     "platinum": {
    //       "back_default": "",
    //       "back_female": null,
    //       "back_shiny": "",
    //       "back_shiny_female": null,
    //       "front_default": "",
    //       "front_female": null,
    //       "front_shiny": "",
    //       "front_shiny_female": null
    //     }
    //   },
    //   "generation-v": {
    //     "black-white": {
    //       "animated": {
    //         "back_default": "",
    //         "back_female": null,
    //         "back_shiny": "",
    //         "back_shiny_female": null,
    //         "front_default": "",
    //         "front_female": null,
    //         "front_shiny": "",
    //         "front_shiny_female": null
    //       },
    //       "back_default": "",
    //       "back_female": null,
    //       "back_shiny": "",
    //       "back_shiny_female": null,
    //       "front_default": "",
    //       "front_female": null,
    //       "front_shiny": "",
    //       "front_shiny_female": null
    //     }
    //   },
    //   "generation-vi": {
    //     "omegaruby-alphasapphire": {
    //       "front_default": "",
    //       "front_female": null,
    //       "front_shiny": "",
    //       "front_shiny_female": null
    //     },
    //     "x-y": {
    //       "front_default": "",
    //       "front_female": null,
    //       "front_shiny": "",
    //       "front_shiny_female": null
    //     }
    //   },
    //   "generation-vii": {
    //     "icons": {
    //       "front_default": "",
    //       "front_female": null
    //     },
    //     "ultra-sun-ultra-moon": {
    //       "front_default": "",
    //       "front_female": null,
    //       "front_shiny": "",
    //       "front_shiny_female": null
    //     }
    //   },
    //   "generation-viii": {
    //     "icons": {
    //       "front_default": "",
    //       "front_female": null
    //     }
    //   }
    // }
    //   }
    // ]
    stats: [
      [
        {
          base_stat: "",
          effort: "",
          stat: {
            name: "",
            url: "",
          },
        },
      ],
    ],
    xp: "",
  });

  const [pokeResponseCardFinal, setPokeResponseCardFinal] = useState({
    types: [
      { slot: 2, type: { name: "", url: "" } },
      { slot: 1, type: { name: "", url: "" } },
    ],
    id: "",
    name: "",
    type: ["", ""],
    uri: "",
    hp: "",
    xp: "",
  });

  const detailsFlag = (id) => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + id)
      .then((response) => {
        setPokeResponseCard(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setShowPokeInfo(!showPokeInfo);
  };

  useEffect(() => {
    // let pokeType = pokeResponse.types[0]["type"]["name"];
    let id = {
      id: pokeResponseCard.id,
      name: pokeResponseCard.name,
      type:
        pokeResponseCard.types.length === 2
          ? [
              pokeResponseCard.types[0]["type"]["name"],
              pokeResponseCard.types[1]["type"]["name"],
            ]
          : [pokeResponseCard.types[0]["type"]["name"]],
      uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokeResponseCard.id}.png`,
      hp: pokeResponseCard.stats[0]["base_stat"],
      xp: pokeResponseCard["base_experience"],
      height: pokeResponseCard.height,
      weight: pokeResponseCard.weight,
    };
    setPokeResponseCardFinal(id);
  }, [pokeResponseCard]);

  // let searchArrCard = [pokeResponseCardFinal];
  const diffURI = pokeResponseCardFinal["uri"];

  const B = (props) => (
    <Text
      style={{
        fontWeight: "bold",
        marginLeft: 25,
        fontSize: 23,
        color: "black",
      }}
    >
      {props.children}
    </Text>
  );

  return (
    <View style={[styles.card, { backgroundColor: backgroundColors[type1] }]}>
      {showPokeInfo ? (
        <>
          <Modal
            visible={showPokeInfo}
            onRequestClose={() => navigation.replace("PokeDex")}
            transparent
          >
            <View style={styles.adContainer}>
              <View style={styles.adStyle}>
                {/* <View style={styles.adTitle}>
                  <View style={styles.adTitleDivision1}>
                    <Text style={styles.adText}>{item["item"]["name"]}</Text>
                  </View>
                  <View style={styles.adTitleDivision2}>
                    <TouchableOpacity
                      onPress={() => setShowPokeInfo(!showPokeInfo)}
                    >
                      {<Icon name="close" size={40} color="#fb3742" />}
                    </TouchableOpacity>
                  </View>
                </View> */}

                <View style={styles.adBody}>
                  <TouchableOpacity
                    onPress={() => setShowPokeInfo(!showPokeInfo)}
                  >
                    <View
                      style={{
                        height: height * 0.6,
                        width: width * 0.9,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: backgroundColors[type1],
                      }}
                    >
                      <View
                        transparent
                        style={{
                          height: height * 0.3,
                          width: width * 0.9,
                          alignItems: "center",
                        }}
                      >
                        <Image
                          style={styles.pokeImg}
                          source={{
                            uri: diffURI,
                          }}
                        />
                      </View>

                      <View
                      // style={{
                      //   backgroundColor: "white",
                      //   height: height * 0.3,
                      //   width: width * 0.9,
                      //   alignItems: "flex-start",
                      //   // marginLeft: 25,
                      // }}
                      >
                        <LinearGradient
                          style={styles.buttonStyle}
                          colors={
                            backgroundColors[type2] !== undefined
                              ? [
                                  backgroundColors[type1],
                                  backgroundColors[type2],
                                ]
                              : [backgroundColors[type1], "white"]
                          }
                        >
                          <View
                            style={{
                              height: height * 0.3,
                              width: width * 0.9,
                            }}
                          >
                            <Text
                              style={{
                                marginLeft: 25,
                                fontSize: 20,
                                color: "black",
                              }}
                            >
                              <B>No:</B> #{item["item"]["id"]}
                            </Text>
                            <Text style={{ marginLeft: 25, fontSize: 20 }}>
                              <B>Name:</B> {item["item"]["name"]}
                            </Text>
                            <Text style={{ marginLeft: 25, fontSize: 20 }}>
                              <B>Height:</B> {pokeResponseCardFinal["height"]}
                            </Text>
                            <Text style={{ marginLeft: 25, fontSize: 20 }}>
                              <B>Weight:</B> {pokeResponseCardFinal["weight"]}
                            </Text>
                            <Text style={{ marginLeft: 25, fontSize: 20 }}>
                              <B>Type1:</B> {pokeResponseCardFinal.type[0]}
                            </Text>
                            <Text style={{ marginLeft: 25, fontSize: 20 }}>
                              <B>Type2:</B> {pokeResponseCardFinal.type[1]}
                            </Text>
                            <Text style={{ marginLeft: 25, fontSize: 20 }}>
                              <B>XP:</B> {pokeResponseCardFinal["xp"]}
                            </Text>
                            <Text style={{ marginLeft: 25, fontSize: 20 }}>
                              <B>HP:</B> {pokeResponseCardFinal["hp"]}
                            </Text>
                          </View>
                        </LinearGradient>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </>
      ) : (
        <>
          <View style={styles.contentView}>
            <Pressable
              hitSlop={{ right: 30 }}
              onPress={() => detailsFlag(item["item"]["id"])}
            >
              <Text style={styles.cardNumber}>#{item["item"]["id"]}</Text>
              <Text style={styles.cardTitle}>{item["item"]["name"]}</Text>
              <View>
                <Tag type={type1} />
                <Tag type={type2} />
              </View>
            </Pressable>
          </View>
          <View style={styles.imageView}>
            <Pressable
              hitSlop={{ left: 30 }}
              onPress={() => detailsFlag(item["item"]["id"])}
            >
              <Image
                style={styles.pokeImg}
                source={{
                  uri: URI,
                }}
              />
            </Pressable>
          </View>
        </>
      )}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  card: {
    marginVertical: 15,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
  },
  cardNumber: {
    fontSize: 20,
    color: mainColors.number,
    fontWeight: "bold",
  },
  cardTitle: {
    fontSize: 30,
    color: mainColors.white,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  pokeImg: {
    height: 200,
    width: 200,
  },
  contentView: {},
  imageView: {
    position: "absolute",
    right: -20,
    top: -20,
  },
  adContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000099",
  },
  adStyle: {
    height: height * 0.6,
    width: width * 0.9,
    // backgroundColor: "#ffffff",
  },
  adTitle: {
    flex: 0.13,
    flexDirection: "row",
    backgroundColor: "brown",
  },
  adText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "beige",
  },
  adTitleDivision1: {
    flex: 0.85,
    justifyContent: "center",
    alignItems: "center",
  },
  adTitleDivision2: {
    flex: 0.15,
    justifyContent: "center",
    alignItems: "center",
  },
  adBody: {
    flex: 1,
    flexShrink: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  adBodyText: {
    color: "red",
  },
});

//make this component available to the app
export default Card;
