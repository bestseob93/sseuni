import { fork, all } from 'redux-saga/effects';
import { watchFetchBlogs, postBlog } from './blog.saga';

export default function* rootSaga () {
  yield all([
    fork(watchFetchBlogs),
    fork(postBlog),
  ]);
}
