import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import UserItem from './UserItem'
const Users = ({ data, deleteUserState }) => {

    return (
        <View>
            <Text style={styles.title}>Users</Text>
            <View>
                <FlatList
                    style={{
                        height: 400
                    }}
                    data={data}
                    renderItem={({ item }) => <UserItem item={item} deleteUserState={deleteUserState} />}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        fontWeight: '600'
    },
})
export default Users