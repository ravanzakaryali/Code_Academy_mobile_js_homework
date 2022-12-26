import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

const UserItem = ({ item ,deleteUserState}) => {
    const { avatar, firstName, lastName, id } = item;

    const deleteUser = (id) => {
        fetch(`https://639935b029930e2bb3cc9fb8.mockapi.io/rmad101/users/${id}`, {
            method: 'DELETE'
        }).then(res => {
            if (res.ok == true) {
                return res.json()
            } else {
                throw {
                    status: res.status,
                    message: "Error",
                };
            }
        })
            .then(data => {
                alert(data.id);
                deleteUserState(data.id);
            })
            .catch(err => {
                alert(err.message);
            })
    }
    return (
        <View style={styles.row}>
            <View style={{
                flex: 3,
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <View >
                    <Image style={styles.image} source={{
                        uri: avatar
                    }} />
                </View>
                <View>
                    <Text style={styles.text}>{firstName} {lastName}</Text>
                </View>
            </View>
            <View style={{
                flex: 2,
                alignItems: 'flex-end'
            }}>
                <TouchableOpacity style={styles.button} onPress={() => deleteUser(id)}>
                    <Text style={{
                        color: 'white',
                        fontSize: 17,
                    }}>
                        Delete
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    row: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 5,
    },
    flex1: {
        flex: 1
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    text: {
        fontSize: 17,
        marginLeft: 4
    },
    button: {
        backgroundColor: '#f30f0f',
        padding: 20,
        borderRadius: 4,
        width: 90,
    }
})

export default UserItem