import { fork, all } from 'redux-saga/effects';
import { watchFetchBlogs, watchFetchBlogById, createBlogSaga } from './blog.saga';
import { requestLogin } from './auth.saga';

export default function* rootSaga () {
  yield all([
    fork(watchFetchBlogs),
    fork(watchFetchBlogById),
    fork(createBlogSaga),
    fork(requestLogin)
  ]);
}
