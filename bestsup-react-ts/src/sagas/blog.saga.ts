import { take, takeLatest, call, put } from 'redux-saga/effects';
import * as blogAPI from 'services/blogAPI';

import { types, actionCreators as actions } from 'ducks/blog.duck';
import { IBlogEntity } from 'models';

function* fetchBlogsSaga() {
  try {
    const blogs: IBlogEntity[] = yield call(blogAPI.fetchBlogs);
    yield put(actions.fetchBlogs(blogs));
  } catch (e) {
    console.error(e);
  }
}

export function* watchFetchBlogs() {
  console.log('saga called');
  yield takeLatest(types.REQUEST_BLOGS, fetchBlogsSaga);
}

// TODO: action type 설정
function* fetchBlogByIdSaga(action: any) {
  try {
    const blog: IBlogEntity = yield call(blogAPI.fetchBlogById, action.payload);
    yield put(actions.fetchBlog(blog));
  } catch (e) {
    console.error(e);
  }
}

export function* watchFetchBlogById() {
  yield takeLatest(types.REQUEST_BLOG, fetchBlogByIdSaga);
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
