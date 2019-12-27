import { ACTION_TEST } from '../actionTypes';
import { IAction } from '../../interfaces/action';

const initialState = {
  loading: true,
};

export const rootReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case ACTION_TEST:
      return {
        ...state,
        payload: action.payload,
      };
  }
  return state;
};
