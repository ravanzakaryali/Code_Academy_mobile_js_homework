import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from "../screens/Details";
import Users from "../screens/Users";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>   
        <Stack.Screen name="Users" component={Users}/>
        <Stack.Screen name="Details" component={Details}/>
    </Stack.Navigator>
  );
};

export default HomeStack;
