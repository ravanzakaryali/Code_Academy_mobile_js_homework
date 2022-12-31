import { View, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { axiosInstance } from "../common/helper";
import UserItem from "../components/UserItem";

const Users = ({ navigation }) => {
    const [users, setUsers] = useState([]);
    const [pageLoading, setpageLoading] = useState(false)

    useEffect(() => {
        setpageLoading(true);
        axiosInstance.get("users")
            .then(res => {
                setUsers(res.data)

                //page loading
                setpageLoading(false);
            });
    }, [])

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
        }}>
            {pageLoading ?
                <ActivityIndicator animating={pageLoading} size="large" color="purple" />
                :
                <FlatList
                    data={users}
                    renderItem={({ item }) => <UserItem item={item} navigation={navigation} />}
                />
            }
        </View>
    );
};

export default Users;
