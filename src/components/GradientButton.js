// import React, { Component } from "react";
// import { Text, StyleSheet, TouchableOpacity } from "react-native";

// import { LinearGradient } from "expo-linear-gradient";

// export default class GradientButton extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   title = this.props.title;
//   component = this.props.component;
//   navigation = this.props.navigation;

//   render() {
//     return (
//       <LinearGradient
//         colors={["#373B44", "#4286f4", "#373B44"]}
//         style={styles.body}
//       >
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => {
//             this.props.navigation.navigate(this.props.component);
//           }}
//         >
//           <LinearGradient
//             start={{ x: 0.0, y: 0.0 }}
//             end={{ x: 0.0, y: 1.0 }}
//             locations={[0.0, 0.74]}
//             colors={["#a40606", "#d98324"]}
//             style={styles.button}
//             useAngle={true}
//             angle={315}
//             angleCenter={{ x: 0.5, y: 0.5 }}
//           >
//             <Text style={styles.buttonText}>{this.title}</Text>
//           </LinearGradient>
//         </TouchableOpacity>
//       </LinearGradient>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   body: {
//     flex: 0.1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "white",
//     margin: 80,
//   },
//   button: {
//     width: 130,
//     height: 40,
//     justifyContent: "center",
//     borderRadius: 10,
//     backgroundColor: "#2c3e50",
//   },
//   buttonText: {
//     fontSize: 12,
//     textAlign: "center",
//     margin: 2,
//     color: "#ffffff",
//   },
// });

import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default class GradientButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  title = this.props.title;
  component = this.props.component;
  navigation = this.props.navigation;

  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          this.props.navigation.navigate(this.props.component);
        }}
      >
        <LinearGradient
          style={styles.buttonStyle}
          colors={["#a40606", "#d98324"]}
        >
          <Text style={styles.buttonText}>{this.title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 120,
    height: 45,
    justifyContent: "center",
    margin: 15,
  },
  buttonStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
});
