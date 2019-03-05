import { put } from 'redux-saga/effects';

export function* addPost({ payload }) {
  try {
    const post = {
      title: payload.post.title,
      body: payload.post.body,
    };
    const response = yield fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post),
    })
      .then(response => response.json())
    yield put({ type: 'ADD_POST_SUCCESS', response });
  } catch (error) {
      yield put({ type: 'ADD_POST_ERROR', error });
  }
}

export function* getPosts({ payload }) {
  try {
    const response = yield fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
    yield put({ type: 'GET_POSTS_SUCCESS', response });
  } catch (error) {
      yield put({ type: 'GET_POSTS_ERROR', error });
  }
}