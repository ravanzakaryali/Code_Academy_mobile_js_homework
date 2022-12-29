import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = ({ navigation }) => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        axios.get('https://639935b029930e2bb3cc9fb8.mockapi.io/rmad101/jobs')
            .then(res => setJobs(res.data));
    }, [])
    return (
        <View>
            <FlatList
                data={jobs}
                renderItem={({ item }) => <JobItem item={item} navigation={navigation} />}
            />
        </View>
    );
};

const JobItem = ({ item, navigation }) => {
    return (
        <View>
            <TouchableOpacity
                onPress={() => navigation.navigate('Details',
                    {
                        id: item.id,
                        username: item.username
                    })}
            >
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    padding: 10,
                    margin: 10,
                    borderColor: 'gray',
                    borderWidth: 1
                }}>{item.title}</Text>
            </TouchableOpacity>
        </View>
    )
}


export default Home;
