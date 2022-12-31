import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootStackNavigations from "./src/navigations/RootStackNavigations";

const App = () => {
  return (
    <NavigationContainer>
      <RootStackNavigations />
    </NavigationContainer>
  );
};

export default App;
