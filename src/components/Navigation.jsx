// Navigation.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import Home from "../pages/Home";
import RegisterNewTransaction from "./RegisterNewTransaction";
import { ContainerApp } from "../styles/root";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          options={{
            headerTitle: "",
            headerTintColor: "#FFF",
            headerStyle: {
              backgroundColor: "#181818", // Substitua 'seucor' pela cor desejada
            },
          }}
          name="Other"
          component={RegisterNewTransaction}
        />
      </Stack.Navigator>
      {/* </ContainerApp> */}
    </NavigationContainer>
  );
};

export default Navigation;
