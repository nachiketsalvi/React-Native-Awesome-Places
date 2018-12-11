import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Image } from 'react-native';

const listItem = (props) => (
    <TouchableOpacity  onPress={props.onItemPress}>
        <View style={styles.listItem} >
        <Image style={styles.placeImage} source={props.placeImage}/>
        <Text  style={styles.placeName}>{props.placeName}</Text>
    </View>
    </TouchableOpacity >
    
);

const styles = StyleSheet.create({
    listItem: {
        width:"100%",
        marginBottom: 5,
        padding: 10,
        backgroundColor: "#eee",
        flexDirection: "row",
        alignItems:"center"
    },
    placeImage:{
        flex: 0.3,
        width: 90,
        height: 50
    },
    placeName:{
        paddingLeft: 30,
        paddingTop: 6,
        flex:0.7
    }
});

export default listItem;