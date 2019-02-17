import { fork, all } from 'redux-saga/effects';
import { watchFetchBlogs, watchFetchBlogById, createBlogSaga } from './blog.saga';

export default function* rootSaga () {
  yield all([
    fork(watchFetchBlogs),
    fork(watchFetchBlogById),
    fork(createBlogSaga),
  ]);
}
