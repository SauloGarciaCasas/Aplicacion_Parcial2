import React from "react";
//import HomeScreen from "./screens/HomeScreen";
//import EventsExample from "./screens/ExampleEvent";
//import Counter from "./screens/counter";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppNavigator from "./navigation/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
  <NavigationContainer>
    <AppNavigator />
  </NavigationContainer>
  );
}