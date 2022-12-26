import { View, Text, Image } from 'react-native'
import React from 'react'

const UpgradeCard = (props) => {
    const { price, date } = props.card;
    return (
        <View>
            <View>
                <Image source={{
                    uri: 'hhtps://'
                }} />
            </View>
            <View>
                <Text>Lorem ipsum dolor sit</Text>
                <Text>${price}/year</Text>
                <Text>Offer till {date}</Text>
            </View>
        </View>
    )
}

export default UpgradeCard