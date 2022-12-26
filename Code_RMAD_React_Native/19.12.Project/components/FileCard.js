import { View, Text, Image } from 'react-native'
import React from 'react'

const FileCard = (props) => {
    return (
        <View>
            <View style={{
                width: 60,
                height: 60,
                borderRadius: 15,
                backgroundColor: props.backgroundColor
            }}>
                <Image source={{
                    uri: props.src
                }} />

            </View>
            <View>
                <Text>{props.name}</Text>
                <Text>{props.itemCount} items</Text>
            </View>
        </View>
    )
}

export default FileCard