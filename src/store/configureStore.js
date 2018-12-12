// This file is created for demo or practice purpose only
//The Store.ts is the main Store file for this application
//Anyone can refer this for learn how to create store

import {createStore,combineReducers} from 'redux';
 import placesReducer from './reducer/places-reducer';

 const rootReducer= combineReducers({
     places: placesReducer
 })

 const configureStore = createStore(rootReducer);

 export default configureStore;