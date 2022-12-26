import { View, Text, Image } from 'react-native'
import React from 'react'

const RecentFile = (props) => {
    const { uri, date, title } = props;
    return (
        <View>
            <View>
                <Image source={{
                    uri: uri
                }} />
            </View>
            <View>
                <Text>{title}</Text>
                <Text>{date}</Text>
            </View>
        </View>
    )
}

export default RecentFile