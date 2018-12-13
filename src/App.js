// Import packages or libraries
import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

//import Store
import { configureStore } from './store/configureStore';

//Import components
import { HomeScreen } from 'src/home/HomeScreen';
import PlaceInput from './components/PlaceInput/PlaceInput';
import PlaceList from './components/PlaceList/PlaceList';
import PlaceDetail from './components/PlaceDetail/PlaceDetail';

// Imports Assets
import placeImage from './assets/place.jpg';

// Import add Action Creator
import {
  addPlace,
  deletePlace,
  selectPlace,
  deselectPlace
} from './store/actions/index';

const AppStack = createStackNavigator({
  Home: HomeScreen
});

class App extends React.Component {
  // No need of local state when we use store
  // state = {
  //   places: [],
  //   selectedPlace: null
  // };

  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
    // When we are using store no need to call setState
    // this.setState(prevState => {
    //   return {
    //     places: prevState.places.concat({
    //       key: Math.random(),
    //       name: placeName,
    //       image: {
    //         uri:
    //           'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg'
    //       }
    //     })
    //   };
    // });
  };

  
  onItemSelectHandler = key => {
    this.props.onSelectPlace(key);
    // When we are using store no need to call setState
    // this.setState(prevState => {
    //   return {
    //     selectedPlace: prevState.places.find(place => {
    //       return place.key === key;
    //     })
    //   };
    // });

    // this.setState(prevState => {
    //   return {
    //     places: prevState.places.filter((place, i) => {
    //       return place.key !== key;
    //     })
    //   };
    // });
  };
  onModelCloseHandler = () => {
    this.props.onDeselectPlace();
    // When we are using store no need to call setState
    // this.setState({
    //   selectedPlace: null
    // });
  };
  onModelDeleteHandler = () => {
    this.props.onDeletePlace();
    // When we are using store no need to call setState
    // this.setState(prevState => {
    //   return {
    //     places: prevState.places.filter((place, i) => {
    //       return place.key !== prevState.selectedPlace.key;
    //     }),
    //     selectedPlace: null
    //   };
    // });
  };
  
  componentDidCatch(error) {
    Alert.alert('Error', error.stack);
  }
  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          // selectedPlace={this.state.selectedPlace} no need to use state when use store
          selectedPlace={this.props.selectedPlace}
          onModelClose={this.onModelCloseHandler}
          onModelDelete={this.onModelDeleteHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          // places={this.state.places} no need to use state when use store
          places={this.props.places}
          onItemSelect={this.onItemSelectHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});
const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: name => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: key => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
