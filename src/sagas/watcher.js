import {
  takeLatest,
} from 'redux-saga/effects';

import * as postSagas from './postSagas';

export function* addPost() {
  yield takeLatest('ADD_POST', postSagas.addPost);
}

export function* getPosts() {
  yield takeLatest('GET_POSTS', postSagas.getPosts);
}