import {ADD_PLACE,DELETE_PLACE,DESELECT_PLACE,SELECT_PLACE} from './../action/actionTypes';
const initialState = {
  places: [],
  selectedPlace: null
};

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case  ADD_PLACE: 
    return{
        ...state,
        places: state.places.concat({
            key: Math.random(),
            name:action.placeName,
            image: {
              uri:"https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg"
            }
          })
    }
    case DELETE_PLACE: 
    return{
        ...state,
        places: state.places.filter((place, i) => {
            return place.key !== state.selectedPlace.key;
          }),
          selectedPlace: null
    }
    case SELECT_PLACE: 
    return{
        ...state,
        selectedPlace: state.places.find(place=> {
            return place.key ===action.placeKey;
          })
    }
    case DESELECT_PLACE:
    return {
        ...state,
        selectedPlace : null
    }
    default:
      return state;
  }
};

export default reducer;
