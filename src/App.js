import React from 'react';
import { Provider,connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation';

import  configureStore  from './store/configureStore';
import { HomeScreen } from 'src/home/HomeScreen';
import { StyleSheet, Text, View, TextInput,Alert } from 'react-native';

import PlaceInput from './components/PlaceInput/PlaceInput';
import PlaceList from './components/PlaceList/PlaceList';
import PlaceDetail from './components/PlaceDetail/PlaceDetail'
import placeImage from './assets/place.jpg'
import {addPlace,deletePlace,deselectPlace,selectPlace} from './store/action/index'
const AppStack = createStackNavigator({
  Home: HomeScreen,
});

 class App extends React.Component {
  //  

  placeAddedHandler = placeName => {
    // this.setState(prevState => {
    //   return {
    //     places: prevState.places.concat({
    //       key: Math.random(),
    //       name:placeName,
    //       image: {
    //         uri:"https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg"
    //       }
    //     })
    //   };
    // });
    this.props.addPlace(placeName);
  };
  store = configureStore();

  componentDidCatch(error) {
    Alert.alert('Error', error.stack);
  }
  onItemSelectHandler = key => {

    this.setState(prevState => {
      return{
        selectedPlace: prevState.places.find(place=> {
          return place.key ===key;
        })
      }
    });
    // this.setState(prevState => {
    //   return {
    //     places: prevState.places.filter((place, i) => {
    //       return place.key !== key;
    //     })
    //   };
    // });
  };
  onModelCloseHandler = () => {
    this.setState( {
     selectedPlace : null
    });
  }
  onModelDeleteHandler = () =>{
      this.setState(prevState => {
      return {
        places: prevState.places.filter((place, i) => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      };
    });
  }

  render() {
    return (
      <View style={styles.container}>
      <PlaceDetail selectedPlace={this.state.selectedPlace} 
      onModelClose={this.onModelCloseHandler}
      onModelDelete={this.onModelDeleteHandler}/>
      <PlaceInput onPlaceAdded={this.placeAddedHandler} />
      <PlaceList places={this.state.places} onItemSelect={this.onItemSelectHandler} />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});

const mapStateToProps= state=> {
  return{
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  }
   
};
const mapDispatchToProps = dispatch => {
  return {  
    addPlace: (name)=>dispatch(addPlace(name)),
    deletePlace: () => dispatch(deletePlace()),
    selectPlace: (key) => dispatch(selectPlace(key)),
    deselectPlace: () => dispatch(deselectPlace())
  
  }

}

export default connect() (App);