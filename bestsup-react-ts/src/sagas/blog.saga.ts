import { take, takeLatest, call, put } from 'redux-saga/effects';
import * as blogAPI from 'services/blogAPI';

import { types, actionCreators as actions } from 'ducks/blog.duck';
import { IBlogEntity } from 'models';

function* fetchBlogs() {
  let datas: IBlogEntity[];
  console.log('fetchBlogs');
  try {
    datas = yield call(blogAPI.fetchBlogs);
    console.log(datas);
    yield put(actions.fetchData(datas));
  } catch (e) {
    console.error(e);
  }
}

export function* watchFetchBlogs() {
  console.log('saga called');
  yield takeLatest(types.REQUEST_DATA, fetchBlogs);
}

export function* postBlog() {
  // let data: IBlogEntity;
  console.log('postBlog saga called');
  const action = yield take(types.REQUEST_POST);
  console.log(action);
  try {
    yield call(blogAPI.createBlog(action.payload));
  } catch (e) {
    console.error(e);
  }

  // const response = yield call(blogAPI.createBlog);

  // const suggestedArtists = response.artists.items.slice(0,8);
  // yield put(receiveTypeaheadSuggestions(suggestedArtists))
}