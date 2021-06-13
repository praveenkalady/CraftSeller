import {SET_BASKET_LENGTH} from '../actions/types';

export const basketReducer = (state = {basketLength: 0}, action) => {
  switch (action.type) {
    case SET_BASKET_LENGTH:
      return {
        ...state,
        basketLength: action.payload,
      };
    default:
      return state;
  }
};
