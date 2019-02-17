import { take, takeLatest, call, put } from 'redux-saga/effects';
import * as blogAPI from 'services/blogAPI';

import { types, actionCreators as actions } from 'ducks/blog.duck';
import { IBlogEntity } from 'models';

function* fetchBlogsSaga() {
  let blogs: IBlogEntity[];
  try {
    blogs = yield call(blogAPI.fetchBlogs);
    yield put(actions.fetchBlogs(blogs));
  } catch (e) {
    console.error(e);
  }
}

export function* watchFetchBlogs() {
  console.log('saga called');
  yield takeLatest(types.REQUEST_BLOGS, fetchBlogsSaga);
}

function* fetchBlogByIdSaga(id: string) {
  let blog: IBlogEntity;

  try {
    blog = yield call(blogAPI.fetchBlogById, id);
    yield put(actions.fetchBlog(blog));
  } catch (e) {
    console.error(e);
  }
}

export function* watchFetchBlogById() {
  const action = yield take(types.REQUEST_BLOG);
  console.log(action);
  yield fetchBlogByIdSaga(action.payload);
}

export function* createBlogSaga() {
  console.log('createBlog saga called');
  const action = yield take(types.REQUEST_CREATE_BLOG);
  console.log(action);
  try {
    yield call(blogAPI.createBlog, action.payload);
    yield action.history.push('/');
  } catch (e) {
    console.error(e);
  }
}
