import {SET_USER, LOGOUT_USER} from '../actions/types';

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};
