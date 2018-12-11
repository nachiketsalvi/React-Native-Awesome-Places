import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet, Alert } from 'react-native';
const placeDetails = props => {
  let modelContent = null;
  if (props.selectedPlace) {
    modelContent = ( 
      <View style={styles.modelPlaceDetailsContainer}>
        <Image style={styles.placeImage} source={props.selectedPlace.image} />
        <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
      </View>
    );
  }
  return (
    <Modal visible={props.selectedPlace !==null} 
     onModelClose={props.onModelClose}
    animationType={"fade"}>
      <View style={styles.modelContainer}>
        <View style={styles.modelButtonContainer}>
          <Button title={"Delete"} color={"red"} onPress={props.onModelDelete}/>
          <Button title={"Close"} onPress={props.onModelClose}/>
        </View>
        {modelContent}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
    modelContainer:{
        margin:22,
        flexDirection: "column"
    },
    modelButtonContainer:{
        flexDirection: "row"
    },
    modelPlaceDetailsContainer:{
      flexDirection:"column"
    },
    placeImage:{
      width: "100%",
      height:150
    },
    placeName:{
    padding: 15,
    fontWeight:"bold",
    fontSize: 30,
    display:"flex",
    textAlign:"center"
    }
});
export default placeDetails;
