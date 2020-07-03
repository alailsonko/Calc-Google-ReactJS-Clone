import { put, select } from 'redux-saga/effects';
import { KEY_REQUEST } from './types';
import {} from './actions';

function* addToCart({ id }) {
  const productExists = yield select((state) =>
    state.cart.find((p) => p.id === id)
  );

  yield put();
}
