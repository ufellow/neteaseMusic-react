import {createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducers from './combineReducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(Reducers, composeEnhancers(
    applyMiddleware(thunk)
 ));
 export default store;