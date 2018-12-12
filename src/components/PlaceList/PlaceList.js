import React from 'react';
// import { ScrollView, StyleSheet } from "react-native";
import { FlatList, StyleSheet } from 'react-native';

import ListItem from '../ListItem/ListItem';

const placeList = props => {
  //   const placesOutput = props.places.map((place, i) => (
  //     <ListItem
  //       key={i}
  //       placeName={place}
  //       onItemPress={()=>{props.onItemDelete(i)}}
  //     />
  //   ));
  //   return <ScrollView style={styles.listContainer}>{placesOutput}</ScrollView>;
  return (
    <FlatList
    style={styles.listContainer}
      data={props.places}
      renderItem={(info) => (
        <ListItem
          placeName={info.item.name}
          placeImage={info.item.image}
          onItemPress={() => {
            props.onItemSelect(info.item.key);
          }}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default placeList;
