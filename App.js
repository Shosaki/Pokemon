import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LandingPage from "./src/LandingPage";
import PokeDex from "./src/PokeDex";
import Login from "./src/Login";
import Register from "./src/Register";
import CameraScreen from "./src/components/CameraScreen";
import BattleScreen from "./src/BattleScreen";
import TeamSelectionScreen from "./src/TeamSelectionScreen";
import TabNavigator from "./src/components/TabNavigator";

import { Provider } from "react-redux";
import { compose, createStore } from "redux";
import reducers from "./src/reducers";

const store = createStore(reducers);

import Ad from "./src/components/Ad";

const image = require("./assets/Images/landing.jpg");

const MyStack = createStackNavigator();

export default function App() {
  createMyStack = () => {
    return (
      <MyStack.Navigator
        initialRouteName="LandingPage"
        screenOptions={{ headerShown: false }}
      >
        <MyStack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{
            title: "My Landing Page",
          }}
        />

        {/* <MyStack.Screen
          name="PokeDex"
          component={PokeDex}
          options={{
            title: "My PokeDex Page",
          }}
        /> */}

        <MyStack.Screen
          name="Login"
          component={Login}
          options={{
            title: "My Login Page",
          }}
        />

        <MyStack.Screen
          name="CameraScreen"
          component={CameraScreen}
          options={{
            title: "My CameraScreen Page",
          }}
        />

        <MyStack.Screen
          name="Register"
          component={Register}
          options={{
            title: "My Register Page",
          }}
        />

        <MyStack.Screen
          name="Ad"
          component={Ad}
          options={{
            title: "My Ad Page",
          }}
        />

        {/* <MyStack.Screen
          name="TeamSelect"
          component={TeamSelectionScreen}
          options={{
            title: "My TeamSelectionScreen Page",
          }}
        /> */}

        <MyStack.Screen
          name="Battle"
          component={BattleScreen}
          options={{
            title: "My BattleScreen Page",
          }}
        />

        <MyStack.Screen
          name="Tab"
          component={TabNavigator}
          options={{
            title: "My TabNav Page",
          }}
        />
      </MyStack.Navigator>
    );
  };
  return (
    <Provider store={store}>
      <NavigationContainer>{createMyStack()}</NavigationContainer>
    </Provider>
  );
}

// createMyStack()
