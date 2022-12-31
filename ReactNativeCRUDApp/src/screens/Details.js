import { View} from "react-native";
import React, { useState, useEffect } from "react";
import { axiosInstance } from "../common/helper";
import { Avatar, Card, Text } from "react-native-paper";

const Details = ({ route }) => {
  const [user, setuser] = useState({});
  useEffect(() => {
    //get -> users all
    //get/:id -> user by id
    axiosInstance.get(`users/${id}`)
      .then(res => setuser(res.data));
  }, []);
  const { id } = route.params;
  return (
    <Card style={{
      paddingBottom: 20
    }}>
      <Card.Cover blurRadius={10} source={{
        uri: user.avatar
      }} />
      <Avatar.Image style={{
        position: 'absolute',
        top: 90,
        left: '50%',
        transform: [{
          translateX: -75,
        }, {
          translateY: 10
        }]
      }} size={150} source={{
        uri: user.avatar
      }} />
      <View style={{
        marginTop: 75
      }}>
        <Text variant="headlineMedium" style={{
          textAlign: 'center',
          fontWeight: 'bold'
        }}>
          {user.name}
        </Text>
        <Text style={{
          textAlign: 'center',
          fontWeight: 'bold'
        }} variant="titleMedium">
          {user.jobTitle}
        </Text>
      </View>
    </Card>
  );
};

export default Details;
