import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screens/Profile";
import FoundationIcon from 'react-native-vector-icons/Foundation'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import HomeStack from "./HomeStack";

const Tab = createBottomTabNavigator();

const RootStackNavigations = () => {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} options={{
          tabBarIcon: ({ size }) => <FoundationIcon size={size} name="home" />,
          headerShown: false
        }} />
        <Tab.Screen name="Profile" component={Profile} options={{
          tabBarIcon: ({ size }) => <AntDesignIcon size={size} name="user" />
        }} />
      </Tab.Navigator>
    </>
  );
};

export default RootStackNavigations;
