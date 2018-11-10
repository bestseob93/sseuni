import { takeLatest, call, put } from 'redux-saga/effects';
import * as blogAPI from 'services/blogAPI';

import { types, actionCreators as actions } from 'ducks/blog.duck';
import { IBlogEntity } from 'models';

function* fetchBlogs() {
  let datas: IBlogEntity[];
  console.log('fetchBlogs');
  try {
    datas = yield call(blogAPI.fetchBlogs);
    console.log(datas);
    yield put(actions.receiveData(datas));
  } catch (e) {
    console.error(e);
  }

}

export function* watchFetchBlogs() {
  console.log('saga called');
  yield takeLatest(types.REQUEST_DATA, fetchBlogs);
}
