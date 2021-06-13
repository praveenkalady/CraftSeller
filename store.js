import {createStore, combineReducers, compose} from 'redux';
import {userAuthReducer} from './reducers/userReducer';
import {basketReducer} from './reducers/basketReducer';

const reducers = combineReducers({
  user: userAuthReducer,
  basketLength: basketReducer,
});

const initialState = {};

const store = createStore(reducers, initialState);

export default store;
