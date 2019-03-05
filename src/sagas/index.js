import { fork, all } from 'redux-saga/effects';
import * as watcher from './watcher';

export function* rootSaga() {
  yield all([
    fork(watcher.addPost),
    fork(watcher.getPosts),
  ]);
}