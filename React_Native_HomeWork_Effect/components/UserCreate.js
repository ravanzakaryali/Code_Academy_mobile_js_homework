import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'

const UserCreate = ({ addUserState }) => {
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');

    const addUser = () => {
        const user = {
            firstName: firstName,
            lastName: lastName
        };
        if (user.firstName.trim() == '') {
            alert('User firstname is required');
            return;
        }
        fetch('https://639935b029930e2bb3cc9fb8.mockapi.io/rmad101/users', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'Application/json'
            }
        })
            .then(res => {
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

                addUserState(data);
                alert(data.id);
            })
            .catch(err => {
                alert(err.message);
            })
    }
    return (
        <View>
            <Text style={styles.title}>User Create</Text>
            <View>
                <TextInput style={styles.input} onChangeText={setfirstName} placeholder='First name' />
                <TextInput style={styles.input} onChangeText={setlastName} placeholder='Last name' />
                <TouchableOpacity style={styles.button} onPress={() => addUser()}>
                    <Text style={styles.textColor}>
                        Create
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        fontWeight: '600'
    },
    input: {
        padding: 15,
        marginVertical: 12,
        borderColor: '#ccc',
        borderWidth: 1
    },
    button: {
        marginVertical: 15,
        padding: 20,
        borderRadius: 4.5,
        backgroundColor: '#0f26f3',
        width: 87
    },
    textColor: {
        color: 'white'
    }
})

export default UserCreate