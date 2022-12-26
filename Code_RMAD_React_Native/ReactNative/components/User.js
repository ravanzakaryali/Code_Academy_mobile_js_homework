import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const User = ({ item }) => {
    const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    return <View style={{
        ...styles.item, ...{
            backgroundColor: color
        }
    }}>
        <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
        <View style={styles.boxParent}>
            <View style={{
                ...styles.box, ...{
                    backgroundColor: item.completed ? 'green' : 'red'
                }
            }}></View>
        </View>
    </View>;
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        borderRadius: 10,
        margin: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    box: {
        width: 20,
        height: 20,
        borderRadius: 10,
    },
    boxParent: {
        flex: 1,
        alignItems: 'flex-end'
    },
    title: {
        flex: 9,
    }
})

export default User;