import { fork, all } from 'redux-saga/effects';
import { watchFetchBlogs, watchFetchBlogById, createBlog } from './blog.saga';

export default function* rootSaga () {
  yield all([
    fork(watchFetchBlogs),
    fork(watchFetchBlogById),
    fork(createBlog),
  ]);
}
