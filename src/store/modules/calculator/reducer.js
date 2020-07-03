import produce from 'immer';
import { KEY_REQUEST } from './types';

const initialState = {};

export default function cart(state = initialState, action) {
  switch (action.type) {
    case KEY_REQUEST:
      return produce(state, (draft) => {
        draft.push(action.product);
      });

    default:
      return state;
  }
}
