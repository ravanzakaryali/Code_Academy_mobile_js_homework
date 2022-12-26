import { View, Text } from 'react-native'
import React from 'react'

const Title = ({ name }) => {
    return (
        <View>
            <Text>Hi {name}</Text>
            <Text>Manage Your file</Text>
        </View>
    )
}

export default Title