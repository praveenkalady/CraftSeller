import { createStore,combineReducers,compose } from 'redux';
import { userAuthReducer } from './reducers/userReducer';


const reducers = combineReducers({
   user:userAuthReducer
});

const initialState = {
    
}

const store = createStore(reducers,initialState);

export default store;