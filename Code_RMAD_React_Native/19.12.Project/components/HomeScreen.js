import { View, Text } from 'react-native'
import React from 'react'
import Title from './Title'
import UpgradeCard from './UpgradeCard'
import FileCard from './FileCard'
import RecentFile from './RecentFile'

const HomeScreen = ({ data }) => {
    return (
        <View>
            <Title name={data.name} />
            <UpgradeCard card={data.card} />
            <View style={{
                flexDirection: 'row'
            }}>
                {data.files.map((file) => {
                    return <FileCard
                        backgroundColor={file.backgroundColor}
                        name={file.name}
                        itemCount={file.itemCount}
                    />
                })}
            </View>
            <View>
                <Text>Recents Files</Text>
                <View>
                    {data.recentFiles.map((file) =>
                        <RecentFile
                            uri={file.uri}
                            date={file.uploadDate}
                            title={file.title}
                        />
                    )}
                </View>
            </View>
        </View>
    )
}

export default HomeScreen