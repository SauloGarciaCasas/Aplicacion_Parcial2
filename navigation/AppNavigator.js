import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Importación de todas tus pantallas desde la carpeta screens
import HomeScreen from "../screens/HomeScreen";
import ExampleEvent from "../screens/ExampleEvent";
import Counter from "../screens/counter";
import AboutMeScreen from "../screens/AboutMeScreen";
import FoodFavScreen from "../screens/FoodFavScreen";
import MovieFavScreen from "../screens/MovieFavScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: 'Inicio' }} 
      />
      
      <Stack.Screen 
        name="ExampleEvent" 
        component={ExampleEvent} 
        options={{ title: 'Ejemplo de Eventos' }} 
      />
      <Stack.Screen 
        name="Counter" 
        component={Counter} 
        options={{ title: 'Contador' }} 
      />
      
      <Stack.Screen 
        name="AboutMe" 
        component={AboutMeScreen} 
        options={{ title: 'Acerca de Mí' }} 
      />
      <Stack.Screen 
        name="FoodFav" 
        component={FoodFavScreen} 
        options={{ title: 'Comidas Favoritas' }} 
      />
      <Stack.Screen 
        name="MovieFav" 
        component={MovieFavScreen} 
        options={{ title: 'Películas Favoritas' }} 
      />
    </Stack.Navigator>
  );
}