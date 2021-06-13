import {SET_USER, LOGOUT_USER} from '../actions/types';

export const userAuthReducer = (state = {user: {}}, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        user: action.payload,
      };
    case LOGOUT_USER:
      return {
        user: {},
      };
    default:
      return state;
  }
};
