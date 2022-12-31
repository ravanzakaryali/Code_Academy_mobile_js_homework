import { View, Text } from "react-native";
import React, { useState } from "react";
import { Avatar, List, TouchableRipple } from "react-native-paper";

const UserItem = ({ item, navigation }) => {
    return (
        <>
            <TouchableRipple onPress={() => navigation.navigate("Details", {
                id: item.id
            })}>
                <List.Item
                    title={item.name}
                    description={item.jobTitle}
                    left={({ style }) => <Avatar.Image style={style} size={50} source={{
                        uri: item.avatar
                    }} />}
                />
            </TouchableRipple>
        </>
    );
};

export default UserItem;
