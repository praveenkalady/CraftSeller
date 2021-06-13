import {SET_BASKET_LENGTH} from './types';

export const setBasketLength = (basketLength) => {
  return {
    type: SET_BASKET_LENGTH,
    payload: basketLength,
  };
};
