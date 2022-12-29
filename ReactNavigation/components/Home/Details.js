import { View, Text, Image } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Details = ({ route }) => {
    const [job, setJob] = useState({});
    const { id } = route.params;
    const { image, title, descriptor } = job;

    useEffect(() => {
        axios.get(`https://639935b029930e2bb3cc9fb8.mockapi.io/rmad101/jobs/${id}`)
            .then(res => setJob(res.data));
    }, [id])
    return (
        <View>
            <Image
                source={{
                    uri: image
                }}
                style={{
                    width: 100,
                    height: 100
                }}
            />
            <Text style={{
                fontSize: 20
            }}>Title: {title}</Text>
            <Text>{descriptor}</Text>
        </View>
    );
};

export default Details;
